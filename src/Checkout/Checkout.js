import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom';
import CommonContext from '../CommonContext'
import '../css/cart.css';

function Checkout() {
    let history = useHistory();
    const initVal =useContext(CommonContext)
    const [addresslist, setAddressList]=useState([])
    const [addnewadress, setAddnewadress] = useState(false);
    /**new-address */
    const [name, setName]= useState()
    const [mobile, setMobile]=useState()
    const [house, setHouse]=useState()
    const [colony, setColony]=useState()
    const [landmark, setLandmark]=useState()
    const [city, setCity]=useState()
    const [state, setState]=useState()
    const [pincode, setPincode]=useState()
    const [adrestype, setAdrestype] =useState()
    const [data, setData]=useState(0)
    const [selectAdd, setSelectAdd]=useState();

    /**new-address */

console.log(selectAdd)
    
const fetchAdressList = async()=>{
    const fetchAdressList2 = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=myAddresslist&user_id=${initVal.userID}`)
    const fetchAddressList3 = await fetchAdressList2.json()
    setAddressList(fetchAddressList3.data.addressList)
}

const adneadres=(e)=>{setAddnewadress(true)}
const closeneadres=()=>{setAddnewadress(false)}

const setNewAddress=async()=>{
    const setNewAddress2 = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=addAddress&name=${name}&mobile=${mobile}&address_type=${adrestype}&city=${city}&state=${state}&landmark=${landmark}&road_name=${colony}&house_no=${house}&user_id=${initVal.userID}&pincode=${pincode}alternate_mobile=0`)
    const setNewAddress3 = await setNewAddress2.json()
    history.push("/checkout");
    setData(data + 1)
    setAddnewadress(false)
}

useEffect(()=>{
    fetchAdressList()
},[data])

    return (
        <div>
            

            <div id="page" class="hfeed site" style={{'marginTop':'100px'}}>

           
<div id="content" class="site-content">
    <div class="col-full">
        <div class="row">
            
            
            <div id="primary" class="content-area" style={{'maxWwidth': '100%','flex':'0 0 100%'}}>
                <main id="main" class="site-main">
                    <div class="type-page hentry">
                        <div class="entry-content">
                            <div class="woocommerce">
                                <div class="cart-wrapper row">
                                    


                                    <div class="col-md-2"></div>
                                    <div class="col-md-4">
                                    
                                    
                                    <div class="cart2b">
                                            <div class="cart2ba">Select Delivery Address</div>

                                       {
                                           addresslist.filter(addCheck => addCheck.is_checked == true).map((checkedAdd)=>(
                                               <div key={checkedAdd.address_id}>
                                            <div class="cart2bb">DEFAULT ADDRESS</div>
                                            <label class="con5"><input type="radio" checked={checkedAdd.is_checked} name="address" onChange={()=>{ setSelectAdd(checkedAdd.address_id)}}/><span class="checkmark5"></span>
                                              <div class="cart2bc">
                                                  <div class="cart2bca">{checkedAdd.name}</div><div class="cart2bcb">{checkedAdd.address_type}</div>
                                                  <div class="cart2bcd">{checkedAdd.house_no}, {checkedAdd.road_name}</div>
                                                  <div class="cart2bcd">{checkedAdd.city}, {checkedAdd.state} - {checkedAdd.pincode}</div>
                                                  
                                                </div>
                                            </label>
                                            </div>
                                            ))
                                       }
                                           <div class="cart2bb">OTHER ADDRESS</div>
                                       {
                                           addresslist.filter(addCheck => addCheck.is_checked == false).map((checkedAdd)=>(
                                            <div key={checkedAdd.address_id}>
                                            
                                            <label class="con5"><input type="radio" checked={checkedAdd.is_checked} name="address" onChange={()=>{ setSelectAdd(checkedAdd.address_id)}}/><span class="checkmark5"></span>
                                              <div class="cart2bc">
                                                  <div class="cart2bca">{checkedAdd.name}</div><div class="cart2bcb">{checkedAdd.address_type}</div>
                                                  <div class="cart2bcd">{checkedAdd.house_no}, {checkedAdd.road_name}</div>
                                                  <div class="cart2bcd">{checkedAdd.city}, {checkedAdd.state} - {checkedAdd.pincode}</div>
                                                
                                                </div>
                                            </label>
                                            </div>
                                            ))
                                       }

                                            

                                           
                                            
                                            <div class="cart2bd"><Link to="./checkout" onClick={()=>{adneadres()}}>ADD NEW ADDRESS</Link></div>

                                        </div>
                                    {/* ----address-popup--- */}
                                    
                                    <div class="add-popupadress" style={ addnewadress ? {display:'block'} : {display : 'none'} }>
                                        <div class="cart2a">
                                            <div class="row">
                                                  <div class="close-add-popupadress" onClick={()=>{closeneadres()}}><i class="fa fa-close"></i></div>
                                                 <div class="col-md-12">
                                                     <div class="cart2aa">CONTACT DETAILS</div>
                                                     <div class="cart2ab">
                                                         <input type="text" placeholder="Name*" value={name} onChange={(e)=>setName(e.target.value)}/>
                                                         <input type="tel" placeholder="Mobile No." value={mobile} onChange={(e)=>setMobile(e.target.value)} maxLength="10"/>
                                                     </div>
                                                 </div>

                                                 <div class="col-md-12">
                                                     <div class="cart2aa">ADDRESS</div>
                                                     <div class="cart2ab">
                                                         <input type="text" placeholder="House No, Building, Street*" value={house} onChange={(e)=>setHouse(e.target.value)}/>
                                                         <input type="text" placeholder="colony, road name" value={colony} onChange={(e)=>setColony(e.target.value)}/>
                                                         <input type="text" placeholder="Landmark*" value={landmark} onChange={(e)=>setLandmark(e.target.value)}/>
                                                          <input type="text" placeholder="City*" value={city} onChange={(e)=>setCity(e.target.value)}/>
                                                          <input type="text" placeholder="Pincode*" value={pincode} onChange={(e)=>setPincode(e.target.value)} maxLength="6"/>
                                                          <input type="text" placeholder="State*" value={state} onChange={(e)=>setState(e.target.value)}/>
                                                     </div>
                                                 </div>

                                                  <div class="col-md-12">
                                                     <div class="cart2aa">SAVE ADDRESS AS</div>
                                                     <div class="cart2ac">
                                                         <label style={{'display':'inlineBlock','minWidth':'100px'}}><input type="radio" checked="checked" name="address-type" value="home" onChange={(e)=>{setAdrestype(e.target.value)}}/>Home</label>
                                                         <label style={{'display':'inlineBlock','minWidth':'100px'}}><input type="radio"  name="address-type" value="office"  onChange={(e)=>{setAdrestype(e.target.value)}}/>office</label>
                                                     </div>
                                                     
                                                     
                                                 </div>

                                                 <div class="col-md-12">
                                                     <input type="submit" value="ADD ADDRESS" class="cart2ae" onClick={()=>{setNewAddress()}}/>
                                                 </div>

                                            </div>
                                        </div>
                                     </div>
                                  {/* ---address-popup--- */}
                                        




                                    </div>



                                      <div class="col-md-1"></div>
                                   
                                    <div class="cart-collaterals col-md-4">
                                        <div class="cart_totals">
                                            <h2>Cart totals</h2>
                                            <table class="shop_table shop_table_responsive">
                                                <tbody>
                                                    <tr class="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td data-title="Subtotal">
                                                            <span class="woocommerce-Price-amount amount">
                                                                <span class="woocommerce-Price-currencySymbol"><i class="fa fa-rupee"></i> </span>{initVal.cartDataDetail.subtotal}</span>
                                                        </td>
                                                    </tr>
                                                    <tr class="cart-subtotal">
                                                        <th>Shipping</th>
                                                        <td data-title="Shipping">
                                                        <span class="woocommerce-Price-amount amount">
                                                                <span class="woocommerce-Price-currencySymbol"><i class="fa fa-rupee"></i> </span>{initVal.cartDataDetail.shipping_charges}</span>
                                                        </td>
                                                    </tr>
                                                    <tr class="order-total">
                                                        <th>Total</th>
                                                        <td data-title="Total">
                                                            <strong>
                                                                <span class="woocommerce-Price-amount amount">
                                                                    <span class="woocommerce-Price-currencySymbol"><i class="fa fa-rupee"></i> </span>{initVal.cartDataDetail.final_amount}</span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                           
                                            <div class="wc-proceed-to-checkout">
                                                <form class="woocommerce-shipping-calculator" method="post" action="#">
                                                    <p>
                                                        <a class="shipping-calculator-button" data-toggle="collapse" href="#shipping-form" aria-expanded="false" aria-controls="shipping-form">Calculate shipping</a>
                                                    </p>
                                                    
                                                </form>
                                                
                                                <Link class="checkout-button button alt wc-forward" to="./">
                                                    Proceed to checkout</Link>
                                                <Link class="back-to-shopping" to="./">Back to Shopping</Link>
                                            </div>
                                            
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                               
                            </div>
                          
                        </div>
                        
                    </div>
                    
                </main>
               
            </div>
            
        </div>
       
    </div>
  
</div>



</div>


        </div>
    )
}

export default Checkout
