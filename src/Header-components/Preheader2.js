import React from 'react'
import christmas from '../images/christmas.png'

function Preheader2() {
    return (
        <section className="pre-header2">
    <img src={christmas} className="" style={{width:'100%',position:'absolute',top:0}} alt="img"/>
    <div className="container">
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <div className="pre-header2a">
                    <ul>
                        <li><a href="listing.php"><i className="fa fa-mobile-phone"></i> DOWNLOAD APP |</a></li>
                        <li><a href="listing.php">SUPPORT |</a></li>
                        <li><a href="listing.php">TRACK ORDER</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Preheader2
