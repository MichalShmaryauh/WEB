/**
 THIS COMPONENT SHOW THE 404 ERROR IF THE USER ENTERED TO WORNG  PATH 
 */

import React from 'react'
import '../Error/ErrorStyle.css'
import img from './sano404.jpg'


export default function Error(){ 
    return(
       <div className="errorS">
        <img src={img}  alt=""/>
       </div>     
    )    
}