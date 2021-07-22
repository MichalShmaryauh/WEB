/**
 THIS COMPONENT RESET THE PASSWORD TO THE USER IF HE FORGOT HIM PASSWORD  
 */
import React, {useState } from 'react';
import useFormState from '../Form/From-Hook'
import { ValidateName, ValidateEmail} from '../Validation/Validation'
import {UpdateUserDetalies,GetUserByEmail} from '../../Services/UserService'
import {IfEmailExist} from '../../Services/RegisterService'
import emailjs from 'emailjs-com'
import './Form.css'


export default function Form(){
// REAND A NEW_PASSWORD  WHITH 8 DIGITS 
    const  newPassword = Math.ceil(Math.random()*(999999999 - 111111111)+111111111);
    const [SubForgotMassege,SetSubForgotMassege] = useState({message:" "});

 //INITIAL THE INPUT VALUES
    const initialFormValues = {
        name:"",
        email:"",
         
    }
//INITIAL THE ERRORS VALUES
    const initialErrorsValues = {
        name:"",
        email:"",
    }
//VALIDATION OF INPUT ERRORS
    const handleFormErrors = {
        name: ValidateName,
        email: ValidateEmail,
    }
//THIS FUNCTION ACTIVED WHEN SUBMIT ON THE BOUTTON 
    const handleFormSubmit = () => {
        let isErrors = false;
        for(let key of Object.keys(formValues)){
            
            if(formValues[key] === ""){
                isErrors = true;
            //IF ERRORS IN FIELDEST
                SetSubForgotMassege({message: "One or more datelis is invalid"})
            }
            
            if(errorValues[key] !== ""){
                isErrors = true;
                //IF ERRORS IN FIELDEST
                SetSubForgotMassege({message: "One or more datelis is invalid"})
            }
        }
        //IF NOT ERRORS SEND 
        if(!isErrors){
            //IF THE USER IS ALREADY REGISTER SEND THE NEW_PASSWORD TO HIM EMAIL 
            IfEmailExist(formValues.email).then((exist)=>{  
                if(exist){
                    emailjs.send('service_39ofofs', 'template_udonic8', {
                        userName: formValues.name,
                        userMassege: newPassword,
                        userEmail: formValues.email
                    }
                    , 'user_3L87A1QNMgvwGQmTeo4m9').then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                    //REASET THE forgotId IN THE LOCAL_STORAGE
                    localStorage.removeItem("forgotId")
                    GetUserByEmail(formValues.email).then(res=>{ 
                    if(res){ 
                        //INITIAL THE LOCAL_STORAGE WHITH THE USER ID
                        localStorage.setItem("forgotId", res._id)  
                        SetSubForgotMassege({message: "Your password sender to your email"}) 
                       // AND UPDATE IT IN THE DB_JESON 
                        UpdateUserDetalies({
                            id:localStorage.getItem("forgotId"),
                            name: formValues.name,
                            password: newPassword,
                            email: formValues.email
                            
                        })}
                    })
                      
                } 
            //IF THE USER EVER REGISTER  SHOW HIM THE MASSEGE THAT HE DIDN'T RGISTER 
            else{
                SetSubForgotMassege({message: "Your email isn't exist ,please register to oure web site"})
                
            }})}}
//STATE OF FORM 
    const [handleSubmit, updateState, formValues, errorValues] = useFormState(initialFormValues, initialErrorsValues, handleFormSubmit, handleFormErrors);

    return(
        //THE FIELDSET OF FORM AND SPANS IF WHERE ERORRS
        <form onSubmit={ handleSubmit } noValidate className="form-group">
            <fieldset>

                <input name="name" 
                type="string"
                placeholder="Name"
                value={formValues.name}
                onChange={updateState}
                className="form-control badge-pill mt-3"/>
                
                <span>{errorValues.name}</span>

                <input name="email" 
                type="email"
                placeholder="Email"
                value={formValues.email}
                onChange={updateState}
                className="form-control badge-pill mt-3"/>
                 <span>{errorValues.email}</span>

                 
                <span style={{display: "block"}}>{errorValues.message}</span>

                <button className="myButton">
                    Send
                </button>
                <div>{SubForgotMassege.message}</div>
                
            </fieldset>
        </form>

    )




}