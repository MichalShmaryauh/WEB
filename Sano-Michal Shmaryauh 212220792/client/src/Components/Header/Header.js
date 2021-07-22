/**
 THIS COMPONENT  DETERMINS WHICH PAGE TO SWITE TO BY ROUTING
 */
import React from 'react'
import {Link} from 'react-router-dom'
import '../Header/HeaderStyle.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header(){

    return(
        <div className="bg ">
        <nav className="navbar navbar-expand-sm  navbar-light"> 
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link" to="/"><h3 className="p">    HOME    </h3></Link>
                </li>

                <li className="nav-item ">
                    <Link className="nav-link " to="/Departments"><h3 className="p">    SHOPPING    </h3></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/Blog"><h3 className="p">    BLOG    </h3></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/About"><h3 className="p">    ABOUT    </h3></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/ToExit"><h3 className="p">    EXIT    </h3></Link>
                </li>

                <li className="nav-item">
                    <p className="space"></p>
                </li>

                <li className="nav-item">
                    <Link className="nav-link " to="/ContactUs"><PermPhoneMsgIcon fontSize="large" className="icons"/></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/ShoppingBag"><ShoppingCartIcon fontSize="large"className="icons"/></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/FavoriteBag"><FavoriteBorderIcon fontSize="large" className="icons"/></Link>
                </li>

            </ul>              
        </nav>
        <div className="pas">
        </div>
        </div>
               
    )
 }