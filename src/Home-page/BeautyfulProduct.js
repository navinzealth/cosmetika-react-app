import React from 'react';
import three from '../images/3.jpg' ;

function BeautyfulProduct() {
    return (
<section className="third-sec">
  <div className="container">
    <div className="row">
        <div className="col-md-6"><div className="third-seca"><img src={three} alt="img"/></div></div>
         <div className="col-md-6">
            <div className="third-secb">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="56.344px" height="9.438px" viewBox="0 0 56.344 9.438" enableBackground="new 0 0 56.344 9.438" >
              <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M0.364,0.375 8.715,8.726 16.716,0.726 24.716,8.726 32.439,1.005 40.16,8.726 48.161,0.726 55.998,8.563 " />
                </svg>
                <h2>Beautiful products <br />for beautiful skin</h2>
                <p>Lorem ipsum dolor sit amet, consectetuerum adipiscing elit, sed diam no nummy nibh euis mod tincidunt ut laoreet dolore magna.</p>
                <a href="listing.php"><span>LEARN MORE</span> | <i className="fa fa-long-arrow-right"></i></a>
            </div>
         </div>
    </div>
  </div>
</section>
    )
}

export default BeautyfulProduct
