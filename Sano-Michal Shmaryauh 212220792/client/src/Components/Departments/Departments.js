/**
    THIS COMPONENT SHOW THE DEPARTMENTS PAGE THAT HAS A GIFS TO ENTER TO THE SANO DEPARTMENT
    AND IF THE USER DIDNT CONECTED IT WORNG THE USER THAT HE CAN'T ADD ITEMS TO HIS  CART OF FAVORITE
 */

import React from 'react'
import './Departments.css'
import img1 from '../Sano/gif/6.jpg'
import img2 from '../Sano/gif/7.jpg'
import img3 from '../Sano/gif/2.jpg'
import img4 from '../Sano/gif/5.jpg'
import img5 from '../Sano/gif/1.jpg'
import img6 from '../Sano/gif/8.jpg'
import {Link}   from 'react-router-dom'



export default function Image() {

    return(
        <>
        <div className="chooseDep">
                
                <h1><b>-Our Departments- </b> </h1>
        </div>
        {!localStorage.getItem("userId") &&
                <div className="row">
                    <div className="col-4"></div>
                    <div className="errorS col-5">
                    <h3>
                    NOTICE YOU DON'T CONECTED,
                    <br />
                    SO YOU CAN'T ADD ITEM TO YOUR CART OR FAVORITE
                    </h3>
                    </div>
                    <div className="col-3"></div>
                </div>
            }
        <nav className="navbar navbar-expand-sm navbar-light"> 
           
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link" to='../Department/Laundry'><img src={img1} 
                    width="186" height="186" alt=" " /><h4>Laundry</h4></Link>
                </li>

                <li className="nav-item ">
                    <Link className="nav-link " to='../Department/CleanHome'><img src={img2} 
                    width="186" height="186" alt=" "/><h4>Clean Home</h4></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to='../Department/CookingAids'><img src={img3} 
                     width="186" height="186" alt=" " /><h4>Cooking Aids</h4></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to='../Department/CleaningTools'><img src={img4} 
                     width="186" height="186" alt=" " /><h4>Cleaning Tools</h4></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to='../Department/GantRepellents'><img src={img5} 
                     width="186" height="186"  alt=" "/><h4>Gant Repellents</h4></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to='../Department/Paper'><img src={img6} 
                     width="186" height="186"  alt=" "/><h4>Paper Products</h4></Link>
                </li>
            </ul>            
        </nav>  
        </>
      
    )
}