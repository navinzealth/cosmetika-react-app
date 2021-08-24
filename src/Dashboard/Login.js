import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import CommonContext from '../CommonContext'
function Login() {
	const initVal =useContext(CommonContext)
// /*submit form or otp */
    return (
        <section className="signup-sec">
  <div className="container">
	<div className="row">
	 <div className="col-md-12">
		  <div className="signup-sec1">
			  <form onSubmit={initVal.submitOTPforLogin}>
			<div className="row">
			 <div className="col-md-12"><div className="signup-sec-logo"><img src={logo} style={{'width':'150px'}} alt="logo"/></div></div>
			 <div className="col-md-12"><div className="signup-sec-heading">Log In</div></div>	
			
			 <div className="col-md-12"><div className="signup-form-field"><input type="text" placeholder="Mobile" onChange={initVal.fillMobile} value={initVal.mobile}/></div></div>
              { initVal.otpstatuslogin ? (<div className="col-md-12">
                    <div className="signup-form-field">
                     <input type="password" placeholder="----" value={initVal.otp} onChange={initVal.fillOtp}/>
                     <span style={{'color':'green','marginTop':'10px','display':'inherit'}}>OTP sent successfully</span>
                     <p><Link to="" style={{'display':'inline-block','backgroundColor':'#a3247b','borderRadius':'5px','color':'#fff','padding':'5px 11px','marginTop':'10px'}} onClick={initVal.reQOTPforLogin}>Resend OTP ?</Link></p>
                    </div>
               </div>) : (<div className="col-md-12">
                        <div className="signup-form-field">
                        <p><Link to="" style={{'display':'inline-block','backgroundColor':'#a3247b','borderRadius':'5px','color':'#fff','padding':'5px 11px','marginTop':'10px'}} onClick={initVal.reQOTPforLogin}>Request OTP</Link></p>
                        </div>
                    </div>)
			 }
			 <div className="col-md-12"><div className="signup-form-field"><input type="Submit" placeholder="Login" style={{'color':'#000','border': '1px solid #e2e2e2'}}/></div></div>
			 
			 <div className="col-md-12">
			   <div className="signup-form-field"><p>Don't Have an Account? <Link to="/signup" style={{'color':'#a3247b'}}>Sign Up</Link></p></div>
			 </div>
			</div>
			</form>
		  </div>
	 </div>	
	</div>  
  </div>
</section>
    )
}

export default Login
