import React from 'react'
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';


function Logo() {
    return (
        <div className="col-md-4 col-xs-4">
                <div className="pre-header3b"><Link to="/">
                    <img src={logo} alt="logo"/></Link>
                </div>
            </div>
    )
}

export default Logo
