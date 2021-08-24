import React, { useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import '../css/cart.css';
import wishlist from '../images/wishlist.jpg';
import CommonContext from '../CommonContext'
function Cart() {
    const initVal =useContext(CommonContext)
  

    useEffect(() => { initVal.getCartData()
    }, [])

  /*----------api-to-increase-and -decrease-cart-items---- */
const increaseCartItem =async(id, qty)=>{
    const IncItem = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=myCart&user_id=${initVal.userID}&qty=${qty}&pro_id=${id}`)
     const IncItem2 = await IncItem.json()
    initVal.getCartData();
}

/*----------api-to-increase-and -decrease-cart-items---- */
/*-------------------decrease-cart-items------ */
const decreaseCartItem =async(id, qty)=>{
    const DecItem = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=myCart&user_id=${initVal.userID}&qty=${qty}&pro_id=${id}`)
     const DecItem2 = await DecItem.json()
    initVal.getCartData();
}
 /*-------------------decrease-cart-items------ */ 
    console.log(initVal.cartDataDetail)
   
    return (
        <>
<section className="listing-bredcrumb">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <ul className="breadcrumb"><li><Link to="/">Home</Link></li><li>Cart</li></ul>
            </div>
        </div>
    </div>
</section>


{  initVal.cartDataDetail.prdCount > 0 ? 

(  
<div className="container">
 <div className="row">
<div id="primary" className="content-area">
                            <main id="main" className="site-main">
                                <div className="type-page hentry">
                                    <div className="entry-content">
                                        <div className="woocommerce">
                                            <div className="cart-wrapper">
											
                                                <form className="woocommerce-cart-form">
                                                    <table className="shop_table shop_table_responsive cart">
                                                        <thead>
                                                            <tr>
                                                                <th className="product-thumbnail">Images</th>
                                                                <th className="product-name">Product</th>
                                                                <th className="product-price">Price</th>
                                                                <th className="product-quantity">Quantity</th>
                                                                <th className="product-subtotal">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                        {initVal.cartDataDetail.data.cartData.map((item)=>(
                                                            <tr key={item.pro_id}>
                                                                
                                                                <td className="product-thumbnail">
                                                                 <Link to=""><img width="180" height="180" alt="" className="wp-post-image" src={item.pro_image} /></Link>
                                                                </td>

                                                                <td data-title="Product" className="product-name">
                                                                 <div className="media cart-item-product-detail">
                                                                    <div className="media-body align-self-center">
                                                                    <Link to="">{item.pro_name}</Link>
																		<p></p>
                                                                     </div>
                                                                    </div>
                                                                </td>

                                                                <td data-title="Price" className="product-price">
                                                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol"><i className="fa fa-rupee"></i> </span>{item.pro_price}</span>
                                                                </td>

                                                                <td className="product-quantity" data-title="Quantity">
																	<div className="quantity" style={{'border': '1px solid #999'}}>

																	    <label htmlFor="quantity-input-2">Quantity</label>
																		<input type="button" value="-" className="minus" style={{'color':'#000','width':'20px','height':'20px','lineHeight': '20px'}} onClick={()=>decreaseCartItem(item.pro_id, --item.qty)}/>

																		<input type="text" name="quantity" value={item.qty} title="Qty" className="qty" size="4" style={{'width':'25px','height': '25px','paddingLeft':'0'}} />

																		<input type="button" value="+" className="plus" style={{'color':'#000','width':'20px','height':'20px','lineHeight':'20px'}} onClick={()=>increaseCartItem(item.pro_id, ++item.qty)}/>	

																	</div>
                                                                </td>

                                                                <td data-title="Total" className="product-subtotal">
                                                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol"><i className="fa fa-rupee"></i> </span>{item.pro_price * item.qty}</span>
                                                                </td>

                                                                <td data-title="Add to Wishlist" className="product-subtotal product-quantity">
																   <div className="quantity">
                                                                   <button onClick={()=>initVal.deleteCartItem(item.pro_id)} className="cartupdatebtn" type="button">Delete from Cart</button>
																   </div>
                                                                </td>

                                                            </tr>
                                                        ))}

                                                      
															
															
                                                           </tbody>
                                                    </table>
                                                    
                                                </form>
												
                                                
                                                <div className="cart-collaterals">
                                                    <div className="cart_totals">
                                                        <h2>Cart totals</h2>
                                                        <table className="shop_table shop_table_responsive">
                                                            <tbody>
                                                                <tr className="cart-subtotal">
                                                                  <th>Subtotal</th>
                                                                   <td data-title="Subtotal">
                                                                     <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol"><i className="fa fa-rupee"></i> </span>{initVal.cartDataDetail.subtotal}</span>
                                                                    </td>
                                                                </tr>
																<tr className="cart-subtotal">
                                                                  <th>Shipping</th>
                                                                    <td data-title="Subtotal"><span className="woocommerce-Price-amount amount">{initVal.cartDataDetail.shipping_charges}</span></td>
                                                                </tr>
																<tr className="cart-subtotal green">
                                                                  <th>Discount</th>
                                                                    <td data-title="Subtotal">
                                                                      <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">- <i className="fa fa-rupee"></i> </span>
                                                                      {((initVal.cartDataDetail.final_amount - initVal.cartDataDetail.subtotal) / initVal.cartDataDetail.final_amount) * 100} %
                                                                      
                                                                      </span>
                                                                    </td>
                                                                </tr>
                                                                <tr className="order-total">
                                                                  <th>Total</th>
                                                                    <td data-title="Total">
                                                                      <strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol"><i className="fa fa-rupee"></i> </span>{initVal.cartDataDetail.final_amount}</span>
                                                                       </strong>
                                                                    </td>
                                                                </tr>
																<tr>
																   <td><div className="cart-checkout-coupon-code"><span style={{'display': 'block'}}>Apply Coupon Code..</span>
																   <span className="fa fa-close" style={{'display':'none'}}></span>
																     <div className="cart-checkout-coupon-code-box" style={{'display': 'none'}}>
																	   <input type="text" name="coupon_code" className="coupon_code" placeholder="coupon code here" value="" />
																	   <button className="applyCoupon">Apply</button>
																	 </div>
																   </div>
																   </td>
																</tr>
                                                            </tbody>
                                                        </table>
                                                        
                                                        <div className="wc-proceed-to-checkout">
                                                           
                                                        <Link to="/checkout" className="checkout-button button alt wc-forward">Proceed to checkout</Link>
                                                        <Link to="/" className="back-to-shopping">Back to Shopping</Link>
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

 )  :

 (
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="" style={{'maxWidth':'300px','margin':'0 auto','marginTop':'30px'}}>
          <Link to="/"><img src={wishlist} style={{'width':'100%'}}  alt="cart-img"/></Link>
        </div>	
      </div>  
    </div>	
  </div>

 )
}
  </>
    )
}

export default Cart
