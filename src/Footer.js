import React from 'react'
import Payment from './images/payment.jpg';
import Footer1 from './images/footer.png';

function Footer() {
    return (
        <>
        <section className="footer1">
    <div className="container">
        <div className="row">
            <div className="col-md-3">
              <div className="footer1-box">
                  <h3>COSMETIKA</h3>
                  <ul>
                      <li><a href="about">About Us</a></li>
                      <li><a href="team">Our Team</a></li>
                      <li><a href="career">Careers</a></li>
                      <li><a href="press">Press</a></li>
                      <li><a href="sitemap">Sitemap</a></li>
                  </ul>
              </div>
            </div>
            <div className="col-md-3">
            <div className="footer1-box">
                  <h3>COSMETIKA BUSINESS</h3>
                  <ul>
                      <li><a href="seller">Sell on Cosmetika</a></li>
                      
                  </ul>
              </div>
            </div>
            <div className="col-md-3">
            <div className="footer1-box">
                  <h3>POLICY INFO</h3>
                  <ul>
                      <li><a href="policy">Privacy Policy</a></li>
                      <li><a href="terms">Terms of Use</a></li>
                      <li><a href="return">Return & Cancellation Policy</a></li>
                     
                  </ul>
              </div>
            </div>
            <div className="col-md-3">
            <div className="footer1-box">
                  <h3>NEED HELP</h3>
                  <ul>
                      <li><a href="faq">FAQ'S</a></li>
                      <li><a href="contact">Contact Us</a></li>
                      
                  </ul>
              </div>
            </div>
        </div>
    </div>
</section>


<section className="footer2">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="footer2-box" style={{'textAlign':'left'}}>
                    <span>PAYMENT</span>
                    <img src={Payment} alt="payment" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="footer2-box">
                    <span>CONNECT</span>
                    <ul>
                        <li><a href="facebook" style={{'backgroundColor': '#39579a'}}><i className="fa fa-facebook-f"></i></a></li>
                        <li><a href="twitter" style={{'backgroundColor': '#00abf0'}}><i className="fa fa-twitter-square"></i></a></li>
                        <li><a href="instagram" style={{'backgroundColor': 'rgba(233, 27, 144, 1)'}}><i className="fa fa-instagram"></i></a></li>
                        <li><a href="linkedin" style={{'backgroundColor': 'rgba(57, 125, 179, 1)'}}><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="footer-img">
    <img src={Footer1} style={{'width':'100%'}} alt="img"/>
</section>


<section className="footer3">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="footer3a">
                Copyright  © 2020 Cosmetikaa. All Rights Reserved
                </div>
            </div>
            <div className="col-md-6">
            <div className="footer3b">
                <a href="https://www.techknowten.com/" target="_blank" rel="noreferrer">Designed & Developed by TechKnowTen Technologies</a>
            </div>
            </div>
        </div>
    </div>
</section>

<div className="scrollToTop" style={{'display': 'block'}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20"><path fill="#ffffff" d="M6.667.365l-.4.382L.226 6.806a.558.558 0 0 0-.193.557c.047.206.21.37.416.417a.558.558 0 0 0 .558-.193L6.11 2.483v16.406c-.002.2.102.386.276.488.173.1.386.1.56 0a.559.559 0 0 0 .275-.488V2.483l5.104 5.104c.135.165.35.24.558.193a.559.559 0 0 0 .417-.417.558.558 0 0 0-.193-.557L7.066.746l-.4-.381z" /></svg></div>
</>
    )
}

export default Footer
