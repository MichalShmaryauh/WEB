/**
 THIS COMPONENT SHOW THE LOGO PAGE AND CONTAIN THE HEADER COMPONENT 
 */

import React from 'react'
import Header from '../Header/Header'


export default function Logo(){
    return( 
        <>   
        <img src='https://www.sano.co.il/wp-content/themes/anova/assets/images/logo.jpg' className="float-right"  alt=""/> 
        <div className="header">
            <Header/>         
        </div> 
    </> 
    )
    
}