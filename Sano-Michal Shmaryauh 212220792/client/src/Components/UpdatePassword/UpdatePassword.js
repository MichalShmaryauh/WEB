/**
 THIS COMPONENT SHOW THE I FORGOT PASSWORD PAGE AND CALL TO ForgotPassword COMPONENT
 */
import React from 'react'
import  ForgotPassword from '../Form/ForgotPassword'
import './UpdatePassword.css'





export default function UpPassword(){
    return(
        <div>     
        <div className="UpPasswordHeader" >Updete Password</div>
            <div className="container ">
                <h2><b>Forgot your password?</b></h2>
                <h4>
                <br/>
                 Enter the username or email address.
                <br/> 
                You will receive a link to reset your password via email.
                </h4>
                </div>
                <div className="row ">
                    <div className="col-4"
                    ></div>
                 <div className=" col-4">
                       <ForgotPassword/>
                    </div>
                    <div className="col-3"
                    ></div>
                </div>
            </div>      
    )
    
}