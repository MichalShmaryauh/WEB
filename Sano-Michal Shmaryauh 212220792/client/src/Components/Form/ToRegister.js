import React,  {useState} from 'react';
import useFormState from './From-Hook'
import {ValidatePassword, ValidateName, ValidateEmail} from '../Validation/Validation'
import './Form.css'
import {CreateUser} from '../../Services/RegisterService'
import {IfEmailExist} from '../../Services/RegisterService'

                
    

export default function Form(){

//IT STATE OF MASSAGES ON SUBMIT  THAT SHOW THE MASSEGE UNDER THE BOUTTON  
    const [SubRegMassege,SetSubRegMassege] = useState({message:" "});

//INITIAL THE INPUT VALUES
    const initialFormValues = {
        name:"",
        password:"",
        email:"",
         
    }

//INITIAL THE ERRORS VALUES
    const initialErrorsValues = {
        name:"",
        password:"",
        email:"",
    }

//VALIDATION OF INPUT ERRORS
    const handleFormErrors = {
        name: ValidateName,
        password: ValidatePassword,
        email: ValidateEmail,
    }

//THIS FUNCTION ACTIVED WHEN SUBMIT ON THE BOUTTON 
    const handleFormSubmit = () => {
        let isErrors = false;
        for(let key of Object.keys(formValues)){
             
            if(formValues[key] === ""){
                isErrors = true;
                //IF ERRORS IN FIELDEST
                SetSubRegMassege({message: "One or more datelis is invalid"})
            }

            
            if(errorValues[key] !== ""){
                isErrors = true;
                //IF ERRORS IN FIELDEST
                SetSubRegMassege({message: "One or more datelis is invalid"})
            }
        }

        //IF NOT ERRORS 
        if(!isErrors){
            //IF EMAIL IS ALREADY EXIST IN DB_JSON 
            IfEmailExist(formValues.email).then(res=>{
                if(res){
                    //DONT LET  SAME EMAILS IN THE DB_JSON 
                    SetSubRegMassege({message: "We are Sorry,this email already exist"})
                        
                }
                else{
                    //SHOW MASSEGE TO USER
                    SetSubRegMassege({message: `Hi,${formValues.name} Your detileas submited successfully!!`} )
                    //CREAT THE NEW USER
                    CreateUser({
                        "name":formValues.name,
                        "password":formValues.password,
                        "email" : formValues.email
                    }).then(user=>localStorage.setItem("userId", user._id))
                   
                }

            })       
        }
        //IF ERRORS IN FIELDEST
        else{
            SetSubRegMassege({message: "One or more datelis is invalid"})        }
    }
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

                
                <input name="password" 
                type="password"
                placeholder="Password"
                value={formValues.password}                
                onChange={updateState}
                className="form-control badge-pill mt-3 "/>

                <span>{errorValues.password}</span>   
  
               
                <span style={{display: "block"}}>{errorValues.message}</span>
                <button className="myButton">
                Register
                </button>
                <div>{SubRegMassege.message}</div>
                
            </fieldset>
        </form>

    )




}