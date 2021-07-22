/**
 THIS COMPONENT SHOW THE FOOTER WHITH LINK THAT RETURN THE USER THE THE HOME PAGE
 */
import React from 'react';
import {useState} from 'react'
import useFormState from './From-Hook'
import { ValidateName,ValidateMessage,ValidateEmail,ValidateTelepon } from '../Validation/Validation'
import emailjs from 'emailjs-com'
import './Form.css'



export default function ContactUs(){
//IT STATE OF MASSAGES ON SUBMIT  THAT SHOW THE MASSEGE UNDER THE BOUTTON  
    const [SubContactMassege,SetSubContactMassege] = useState({message:" "});
  
//INITIAL THE INPUT VALUES
    const initialFormValues = {
        name:"",
        phone:"",
        email:"",
        message:""   
    }
//INITIAL THE ERRORS VALUES
    const initialErrorsValues = {
        name:"",
        phone:"",
        email:"",
        message:""  
    }
//VALIDATION OF INPUT ERRORS
    const handleFormErrors = {
        name: ValidateName,
        phone: ValidateTelepon,
        email: ValidateEmail,
        message: ValidateMessage
    }
//THIS FUNCTION ACTIVED WHEN SUBMIT ON THE BOUTTON 
    const handleFormSubmit = () => {
        let isErrors = false;
        for(let key of Object.keys(formValues)){
            if(formValues[key] === ""){
                isErrors = true;
                //IF ERRORS IN FIELDEST
                SetSubContactMassege({message: "One or more datelis is invalid"})
            }
            if(errorValues[key] !== ""){
                isErrors = true;
                 //IF ERRORS IN FIELDEST
                SetSubContactMassege({message: "One or more datelis is invalid"})
            }
        }
        //IF NOT ERRORS 
        if(!isErrors){
            //SEND THE EMAIL TO SANO EMAIL AND SHOW MASSAGE TO USER THAT THE EMAIL SENDED
            emailjs.send('service_39ofofs', 'template_0et6218', {
                userName: formValues.name,
                userPhone:formValues.phone,
                userMessage:formValues.message ,
                userEmail: formValues.email
            }
        , 'user_3L87A1QNMgvwGQmTeo4m9').then((result) => {
        }, (error) => {
        });
        //MASSAGE TO THE USER
        SetSubContactMassege({message: `Thank  you ${formValues.name} about your massage`})

        }
        //IF WHERE ERRORS
        else{
            SetSubContactMassege({message: "One or more datelis is invalid"})
        }
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

               

                <input name="phone" 
                type="tel"
                placeholder="Phone Number"
                value={formValues.phone}                
                onChange={updateState}
                className="form-control badge-pill mt-3"/>

                <span>{errorValues.phone}</span>

                <input name="email" 
                type="email"
                placeholder="Email"
                value={formValues.email}
                onChange={updateState}
                className="form-control badge-pill mt-3"/>

                <span>{errorValues.email}</span>
                    
                <textarea name="message" 
                type="string"
                placeholder="Message"
                value={formValues.message}
                onChange={updateState}
                className="form-control badge-pill mt-3"/>

                <span style={{display: "block"}}>{errorValues.message}</span>

                <button className="myButton">
                    Send
                </button>
                <div>{SubContactMassege.message}</div>
                
            </fieldset>
        </form>

    )




}