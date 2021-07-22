/**
    THIS COMPONENT SHOW THE CONTACT US PAGE THAT USE WHITH CONTACT_USE_FROM  COMPONENT 
    THAT SHOW THE FORM OF DETELIES TO SEND EMAIL TO SANO COMPANY  BY COUSTOMER SERVICE
 */

import React from 'react' 
import ContactUsFrom from '../Form/ContactUs'
import './ContactUs.css'



export default function Contact(){
    return(
        <div>     
        <div className="ContactHeader" >Contact Us</div>
            <div className="body ">
            <div className="container">
                <div className="SecHeader">
                    <br/>
                    <br/>
                <h2>
                    If you are unsure of how to use any product, 
                    <br/>
                    or if a particular product is not performing its function properly,
                    <br/>
                    Snow's Training Department will be happy to assist you until the house shines!
                    <br/>
                    <br/>
                </h2> 
                <div className="SecHeader">
                <b>Snow's customer relations department is available to you from anywhere at any time, 
                <br/>
                with a variety of professional tips, surfers' tips and detailed instructional videos.
                <br/>
                <br/>
                <br/>
                </b>
                </div>
                </div>
                <div className="row">
                    <div className="col-4 red">
                    <h4><b>
                    <b>Sano Bronos Enterprises Ltd.</b>
                    <br/>
                    Email: service@sano.co.il 
                    <br/>
                    Deaf 11 Neve Ne'eman, Hod Hasharon
                    <br/>
                    Phone: 09-7473222
                    <br/>
                    Fax: 09-7473233
                    <br/>
                    Sano International
                    <br/>
                    Export Department
                    <br/>
                    International Sales Manager
                    <br/>
                    Phone for export department only:
                    <br/>
                    972-3-9227952 +
                    <br/>
                    Export Department Email Only:
                    <br/>
                    info1@sanoint.com  
                    <br/> </b></h4>
                    </div>
                    <div className="col-4">    
                    </div>
                    <div className="col-4 ">
                       <ContactUsFrom/>
                    </div>
                </div>
            </div>
             </div>  
            </div>     
    )
    
}