import React, { useEffect, useContext} from 'react'
import LeftMenu from './LeftMenu';
import {Link} from 'react-router-dom';
import wishlist from '../images/wishlist.jpg';
import CommonContext from '../CommonContext';

function Wishlist() {
    const initVal =useContext(CommonContext);

useEffect(() => {
    initVal.fetchwishProdCount();
    console.log(initVal.wishqty);
    console.log(initVal.wishdata);
}, [])





   

    return (
        <section className="seller__registration__page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="seller__registration__heading heading">My Wishlist</div>
                    </div>
                </div>

                <div className="row">
                    <LeftMenu />
                                                
<article className="col-xs-12 col-sm-12 col-md-9 col-lg-9 panel-table margin-top-30">

       
          {
                initVal.wishqty > 0 ? (
 
<main id="main" className="site-main">
                                <div className="type-page hentry">
                                   
                                   
                                    <div className="entry-content">
                                        <form className="woocommerce" method="post" action="#">
                                             <div className="">
                                                    
                                             </div>
                                            <table className="shop_table cart wishlist_table">
                                                <thead>
                                                    <tr>
                                                        <th className="product-remove"></th>
                                                        <th className="product-thumbnail"><span className="nobr">Product Image</span></th>
                                                        <th className="product-name"><span className="nobr">Product Name</span></th>
                                                        <th className="product-price"><span className="nobr">Unit Price</span></th>
                                                        <th className="product-stock-status"><span className="nobr">Stock Status</span></th>
                                                        <th className="product-add-to-cart"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                   
                                                 {
                                                   initVal.wishdata.map((item, i)=>(
                                                    <tr key={item.pro_id}>
                                                        <td className="product-remove">
                                                        <div>
                                                                <Link to="/wishlist" title="Remove this product" className="remove remove_from_wishlist fa fa-close" onClick={()=>initVal.deleteFromWish(item.pro_id)}></Link>
                                                            </div>
                                                        </td>
                                                        <td className="product-thumbnail">
                                                            <Link to="/">
                                                                <img width="180" height="180" alt="" className="wp-post-image" src={item.pro_image} />
																</Link>
                                                        </td>
                                                        <td className="product-name">
                                                            <Link to="/">{item.pro_name}</Link>
                                                        </td>
                                                        <td className="product-price">
                                                            <ins>
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <span className="woocommerce-Price-currencySymbol"><i className="fa fa-rupee"></i> </span>{item.pro_price}</span>
                                                            </ins>
                                                            <del>
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <span className="woocommerce-Price-currencySymbol"><i className="fa fa-rupee"></i> </span>{item.pro_mrp}</span>
                                                            </del>
                                                        </td>
                                                        <td className="product-add-to-cart">
                                                            <Link className="button add_to_cart_button button alt" to="/wishlist" onClick={()=>initVal.addtoCartItem(item.pro_id)}> Add to Cart</Link>
                                                        </td>
                                                    </tr>
                                                   ))

                                                 }



                                                    
                                                </tbody>
                                            </table>
                                         </form>
                                      </div>
                                   </div>
                                
        </main>


             ) 

             :

             (

                <div className="row">
		<div className="col-md-12">
		  <div className="" style={{'maxWidth':'300px','margin':'0 auto','marginTtop':'30px'}}>
          <Link to="/"><img src={wishlist} style={{'width':'100%'}}  alt="cart-img"/></Link>
		  </div>	
		</div>  
	   </div>

             )

          }
		  
		  
		

        
                           
		  
		  
		  
</article>

</div>
	
	
	

	
  </div>
</section>
    )
}

export default Wishlist
