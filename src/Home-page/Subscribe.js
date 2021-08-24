import React from 'react'
import seven from '../images/7.jpg';

function Subscribe() {
    return (
        <section className="fifth-sec" style={{background: `url(${seven})`, backgroundSize: 'cover',backgroundPosition: 'center'}}> 
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="fifth-seca">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="56.344px" height="9.438px" viewBox="0 0 56.344 9.438" enableBackground="new 0 0 56.344 9.438" >
              <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M0.364,0.375 8.715,8.726 16.716,0.726 24.716,8.726 32.439,1.005 40.16,8.726 48.161,0.726 55.998,8.563 " />
                </svg>
                    <h2>Visitors can easily <br /> subscribe.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuerum adipiscing elit, sed diam no nummy nibh euis mod tincidunt ut laoreet dolore magnaa</p>
                    <div className="fifth-secb">
                       <input type="email" placeholder="Your E-Mail" /><input type="submit" value="SUBSCRIBE" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Subscribe
