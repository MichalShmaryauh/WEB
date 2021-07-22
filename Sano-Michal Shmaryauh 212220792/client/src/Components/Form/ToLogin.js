import React , {useState} from 'react';
import useFormState from './From-Hook'
import { ValidateEmail, ValidatePassword} from '../Validation/Validation'
import {Link}   from 'react-router-dom'
import './Form.css'
import GetUser from '../../Services/LoginService'
import {IfEmailExist} from '../../Services/RegisterService'
import {checkPassword} from '../../Services/LoginService'


export default function Form(){
    //IT STATE OF MASSAGES ON SUBMIT  THAT SHOW THE MASSEGE UNDER THE BOUTTON  
    const [SubLogMassege,SetSubLogMassege] = useState({message:" "});

//INITIAL THE INPUT VALUES
    const initialFormValues = {
        email:"",
        password:"",
         
    }
//INITIAL THE ERRORS VALUES
    const initialErrorsValues = {
        email:"",
        password:"",
       
    }

//VALIDATION OF INPUT ERRORS
    const handleFormErrors = {
        email: ValidateEmail,
        password: ValidatePassword,
    }

//THIS FUNCTION ACTIVED WHEN SUBMIT ON THE BOUTTON 
    const handleFormSubmit = () => {
        let isErrors = false;
        for(let key of Object.keys(formValues)){
            if(formValues[key] === ""){
                isErrors = true;
                //IF ERRORS IN FIELDEST
                SetSubLogMassege({message: "One or more datelis is invalid"})
            }
            if(errorValues[key] !== ""){
                isErrors = true;
                //IF ERRORS IN FIELDEST
                SetSubLogMassege({message: "One or more datelis is invalid"})
            }
        }

        //IF NOT ERRORS 
        if(!isErrors){
            //IF EMAIL IS EXIST IN DB_JSON 
            IfEmailExist(formValues.email).then(res=>{
            if(res){
                //CHECK IF THE PASSWORD INPUT IS THE SAME OF THE PASSWORD IN THE DB_JSON
                if(checkPassword(formValues.password, res.password)){
                    //SHOW MASSEGE TO USER
                    SetSubLogMassege({message: `Hi ,we are happy to meet you again`})
                    //UPDATE THE LOCAL_STORAGE
                    localStorage.setItem("userId", res._id)
                    //GET THE DETELIES OF THE USER BY THE EMAIL
                    GetUser(formValues)
                }
                else{
                    //IF THE PASSWORD INPUT ISN'T  SAME OF THE PASSWORD IN THE DB_JSON
                    SetSubLogMassege({message:"Worng password"})

                }
            }
            else{
                //IF EMAIL ISN'T  EXIST IN DB_JSON 
                SetSubLogMassege({message: "You didnt register ,please  register now"})
            }
        })
    }
}

//STATE OF FORM 
    const [handleSubmit, updateState, formValues, errorValues] = useFormState(initialFormValues, initialErrorsValues, handleFormSubmit, handleFormErrors);

    return(
        //THE FIELDSET OF FORM AND SPANS IF WHERE ERORRS
        <form onSubmit={ handleSubmit } noValidate className="form-group">
            <fieldset>
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
                Login
                </button>
                <div>{SubLogMassege.message}</div>
                <div className="nav-item">
                    <Link className="nav-link " to='../Home/ForgotPassword'>
                    <h6>I Forgot The Password</h6></Link>
                    </div>     
            </fieldset>
        </form>

    )




}