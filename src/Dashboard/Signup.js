import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import CommonContext from '../CommonContext'

function Signup() {
    const initVal =useContext(CommonContext)
    // /*submit-form */
    return (
        <section className="signup-sec">
  <div className="container">
	<div className="row">
	 <div className="col-md-12">
	  <form onSubmit={initVal.submitFormforsignup}>
		  <div className="signup-sec1">
			<div className="row">
			 <div className="col-md-12"><div className="signup-sec-logo"><img src={logo} style={{'width':'150px'}} alt="logo"/></div></div>
			 <div className="col-md-12"><div className="signup-sec-heading">Sign Up</div></div>	
			 <div className="col-md-12"><div className="signup-form-field"><input type="text" placeholder="Name" value={initVal.name} onChange={initVal.fillName}
             name="Name"/></div>
        </div>
			 <div className="col-md-12"><div className="signup-form-field"><input type="text" placeholder="Email" value={initVal.email} onChange={initVal.fillEmail} name="email"/></div>
       </div>
			 <div className="col-md-12"><div className="signup-form-field"><input type="text" placeholder="Mobile" value={initVal.mobile} onChange={initVal.fillMobile} name="mobile"/></div>
       </div>
             { initVal.otpsentsignup ? 
                  (
                    <div className="col-md-12">
                    <div className="signup-form-field">
                     <div className="">OTP</div>
                     <input type="password" placeholder="----" value={initVal.otp} onChange={initVal.fillOtp} name="otp"/>
                     <span style={{'color':'green','marginTop':'10px','display':'inherit'}}>OTP sent successfully</span>
                     <p><Link to="/signup" style={{'display':'inline-block','backgroundColor':'#a3247b','borderRadius':'5px','color':'#fff','padding':'5px 11px','marginTop':'10px'}} onClick={initVal.sentOtpforSignup}>Resend OTP</Link></p>
                    </div>
               </div>
                  ) :
                    (
                        <div className="col-md-12">
                        <div className="signup-form-field">
                        <p><Link to="" style={{'display':'inline-block','backgroundColor':'#a3247b','borderRadius':'5px','color':'#fff','padding':'5px 11px','marginTop':'10px'}} onClick={initVal.sentOtpforSignup}>Send OTP</Link></p>
                        </div>
                      </div>
                    )
                    }
			 
			
			 <div className="col-md-12">
			     <div className="signup-form-field"><input type="checkbox" checked={initVal.checked} style={{'display':'inline','width':'5%'}} 
                 onChange={initVal.checkPolicy}/> 
				  <span>By clicking Create an Account, you agree to the Cosmetikaa.com User agreement, <Link to="/">Privacy policy,</Link> Cookies policy.</span>
				 </div>
			 </div>
			 <div className="col-md-12"><div className="signup-form-field"><input type="submit" value="Create Account"/></div></div>
             
			 <div className="col-md-12">
			   <div className="signup-form-field"><p>Already Have an Account? <Link to="/login" style={{'color':'#a3247b'}}>Log In</Link></p></div>
			 </div>
			</div>  
		  </div>
		 </form>
	 </div>	
	</div>  
  </div>
</section>
    )
}

export default Signup
