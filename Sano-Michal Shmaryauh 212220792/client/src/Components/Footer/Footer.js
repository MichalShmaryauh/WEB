/**
 THIS COMPONENT SHOW THE FOOTER WHITH LINK THAT RETURN THE USER TO THE HOME PAGE
 */
import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'



export default function Footer() {
    return (

        <footer className="fixed-bottom size">
            <div className="pas"></div>
            <div className="bg ">
                < div className="text-center p-3" >
                    <div className="col-lg-12 col-md-12 mb-0 mb-md-0 nav-item">
                        <h6 className="text-uppercase  h7"> Sano Bronos Enterprises Ltd.</h6>
                        <div>
                            <div className="h7">Deaf 11 Neve Ne'eman, Hod Hasharon</div>
                            <div className="h7">Email: service@sano.co.il___Phone: 09-7473222___Fax: 09-7473233</div>
                            <Link className="nav-link h9" to="/">  Site by: Michal Shmaryauh | Sano</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}