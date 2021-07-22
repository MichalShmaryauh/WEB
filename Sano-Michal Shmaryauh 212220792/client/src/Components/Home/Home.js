/**
 THIS COMPONENT SHOW THE HOME PAGE AND CONTAIN THE FORMS OF LOGIN AND REGISTER 
 */

import React from 'react'
import Register from '../Form/ToRegister'
import Login from '../Form/ToLogin'
import '../Home/Home.css'


export default function Home(){
    return(  
        <div className="body"> 
            <div className="imeges">   
            </div>      
            <div className="container">
                <div className="row body">
                    <div className="col-4 ">
                        <p className="titel">Register</p>
                        <Register/> 
                    </div>
                    
                    <div className="col-4">
                    <div className="col-4sm cut">    
                    </div>   

                    </div>
                    <div className="col-4 ">
                        <p className="titel">Login</p>
                        <Login/>
                    </div>
                </div>
               
            </div>
      
        </div> 
    
    )
    
}