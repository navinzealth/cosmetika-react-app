import React, { useContext} from 'react'
import Like from '../images/like.png';
import Smile from '../images/smile.png';
import Cart from '../images/cart.png';
import {Link} from 'react-router-dom'
import CommonContext from '../CommonContext'
function User(){
    const initVal =useContext(CommonContext)
    return (
        <div className="col-md-4 col-xs-5">
                <div className="pre-header3c">
                   <ul>
                       <li><Link to="/wishlist"><img src={Like} alt="img"/></Link></li>
                       <li><Link to="/dashboard"><img src={Smile} alt="img"/></Link>
                         <ul>
                             <li>
                                 <div className="pre-header3ca">
                                  {initVal.name ? <Link to="/dashboard" className="pre-header3caa">Welcome {initVal.name}</Link> :  <> <Link to="/login" className="pre-header3caa">Log In</Link> 
                                     <span>New Customer ? </span><Link to="/signup" style={{color:'#a3247b',display: 'inline-block'}}>Sign Up</Link> </> 
                                  }
                                 </div>
                             </li>
                             <li><Link to="orders"> ORDERS</Link></li>
                             <li><Link to="offers">OFFERS</Link></li>
                             <li><Link to="faq">FAQ</Link></li>
                             <li><Link to="contact">CONTACT US</Link></li>
                             { initVal.name ? <li><Link to="/" onClick={initVal.logout}>LOGOUT</Link></li> : '' }
                         </ul>
                       </li>
                       <li>
                        <Link to="/cart"><img src={Cart} alt="img"/>
                                <span className="bag-label">{initVal.PrdCount }</span>
						 </Link></li>
                   </ul>
                </div>
            </div>
    )
}
export default User
