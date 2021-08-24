import React, {useEffect, useState, useContext} from 'react'
import {useParams, Link} from "react-router-dom";
import CommonContext from '../CommonContext'
import Rating from '../Home-page/Ratings'
import rightimg from '../images/right-img.png';
import genuine from '../images/genuine_product.png';
import returnimg from '../images/return_product.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import $ from 'jquery';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
      speed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };


function Product_detail() {
    const initVal =useContext(CommonContext)
    let { catName, subcatName, pro_slug } = useParams();

    const [proDetail, setProDetail] = useState({});
    const [otherimages, setOtherimages] = useState([])
    const [rating, setRating]= useState()
    const [loading, setLoading] = useState(true);
    const [proCount, setProCount] = useState(1)
    const [data, setData]=useState(0);
    function relaod(){
     setData(data + 1)
    }

  $('.open-description-box').on('click', function(){
     $(this).addClass('active');$('.open-ingredient-box, .open-howuse-box').removeClass('active');
     $('.description-box').css({'display':'block'});$('.ingredient-box , .howuse-box').css({'display':'none'})
  })
  $('.open-ingredient-box').on('click', function(){
    $(this).addClass('active');$('.open-description-box, .open-howuse-box').removeClass('active');
    $('.ingredient-box').css({'display':'block'});$('.description-box , .howuse-box').css({'display':'none'})
 })
 $('.open-howuse-box').on('click', function(){
  $(this).addClass('active');$('.open-description-box, .open-ingredient-box').removeClass('active');
  $('.howuse-box').css({'display':'block'});$('.ingredient-box , .description-box').css({'display':'none'})
})
    
/**-----fetch-product-detail--- */
    const fetchproDetail =async(e)=>{
        const fetchproDetail1 = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=productDetail2&pro_slug=${pro_slug}&user_id=${initVal.userID}`)
        const fetchproDetail2 = await fetchproDetail1.json();
        setProDetail(fetchproDetail2.data)
        setOtherimages(fetchproDetail2.data.proImages)
        setRating(parseInt(fetchproDetail2.data.rating))
        setLoading(false);
    }
/**-----fetch-product-detail--- */
/**-----add to wishlist--- */ 
const addTowishlist = async(id)=>{
    const result = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=addtoWishlist&user_id=${initVal.userID}&pro_id=${id}&qty=1`)
    const result2 = await result.json()
    alert('Product added to wishlist')
  }
/**-----add to wishlist--- */ 
/**-----add to cart--- */ 
const addtoCartItemfromList = async(id)=>{
    const addCartItem = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=addtoCart&user_id=${initVal.userID}&pro_id=${id}&qty=${proCount}`)
    const addCartItem2 = await addCartItem.json();
    alert('Product added in Cart Successfully');
  }
/**-----add to cart--- */ 
/*---check if prod is in wishlist */

const wishproID = initVal.wishdata.map((item2)=>{
  return item2.pro_id
})
console.log('wishproID',wishproID)

 /*---check if prod is in wishlist */
 /*---check if prod is in cart */
const cartproID = initVal.cartData.map((item3)=>{
  return item3.pro_id
})
 /*---check if prod is in cart */
useEffect(()=>{
    fetchproDetail();
    initVal.fetchwishProdCount();
    initVal.getCartData();
},[data])

const proInc =()=>{setProCount(proCount + 1)}
const proDec =()=>{setProCount( (proCount == 1) ? proCount :  proCount -1 )}

    return (

        <>
<section className="listing-bredcrumb">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <ul className="breadcrumb"><li><a href="#">Home</a></li><li><a href="#">Brand</a></li><li>The Face shop Kit</li></ul>
            </div>
        </div>
    </div>
</section>

{loading ? <span>loading....</span> : 
            
            
(          
<>
<section className="product-detail-container">
    <div className="container">
        <div className="row">

            <div className="col-md-5">
                <div className="product-detail-product-img">
                   <div className="show" href="images/listing-product1.jpg">
                     <img src={proDetail.pro_img} id="show-img" />
                   </div>
                    <div className="small-img">
                        <img src={ rightimg} className="icon-left" alt="" id="prev-img" />
                        <div className="small-container">
                        <div id="small-img-roll">
                            {
                                otherimages.map((item, i)=>(
                                    <img src={item.other_image} className="show-small-img" alt="other images" key={i}/>
                                ))
                            }
                            
                        </div>
                        </div>
                        <img src={ rightimg} className="icon-right" alt="" id="next-img" />
                    </div>
               </div>
            </div>
            

            <div className="col-md-7">
             <div className="product-detail-product-content">

               <div className="product-detail-product-heading">Herbal Essences Argan Oil Shampoo & Conditioner For Frizz - No Parabens, No Colourants</div>
               <div className="product-detail-product-quantity">( 150ml )</div>
               <div className="product-detail-product-rating">
                     <Rating no_of_rating={rating}/>
                    
                     <span>( {proDetail.no_of_view} )</span>
                </div>
                <div className="product-detail-product-review-count"><a href="#rating-box">1217 Rating  & 480 Review </a></div>
                <div className="product-detail-product-price-box"><span>MRP:</span> <i className="fa fa-rupee"></i>{proDetail.pro_price} 
				    <span style={{'textDecoration':'line-through','fontSize':'19px'}}><i className="fa fa-rupee"></i> {proDetail.pro_mrp}</span>
                 <p>inclusive of all taxes</p>
                </div>
				
				<div className="cart_extra">									
					<div className="cart-product-quantity prd-quantity-txt">Set Quantity:</div>									
					<div className="cart-product-quantity">										
						<div className="quantity">
							<input type="button" value="-" className="minus"  style={{'color':'#000'}} onClick={()=>proDec()}/>
							<input type="text" name="quantity" value={proCount} title="Qty" className="qty" size="4" />											
							<input type="button" value="+" className="plus" style={{'color':'#000'}} onClick={()=>proInc()}/>											
						</div>										
					</div>																						
				</div>

                <div className="product-detail-product-btn-info">

                    <div className="product-detail-product-btn">

                        {
                             wishproID.includes(proDetail.pro_id) ? <div className="add-to-wishlist"><i className="fa fa-heart"></i> IN WISHLIST</div> 
                             :

                             <div className="add-to-wishlist" onClick={()=>{addTowishlist(proDetail.pro_id);relaod();}}><i className="fa fa-heart"></i> ADD TO WISHLIST</div>
                        }
					  

                        {
                            cartproID.includes(proDetail.pro_id) ? <div className="add-to-bag-product"><i className="fa fa-shopping-cart"></i> IN BAG</div> 
                            :
                            <div className="add-to-bag-product" onClick={()=>{addtoCartItemfromList(proDetail.pro_id);relaod();}}><i className="fa fa-shopping-cart"></i> ADD TO BAG</div>
                        }

						
					</div>


                    <div className="product-detail-product-delivery-info">
                        <div className="product-detail-product-delivery-info1">
                            <p><i className="fa fa-map-marker"></i> DELIVERY OPTIONS FOR <span className="main-color">110081</span><a href="javascript:void(0)" className="changepincode">CHANGE</a></p>
                            <p>Shipping To: <b>New Delhi, India</b></p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18.35">
                               <path d="M21.13 0L8.48 12.65 2.87 7.04 0 9.91l7.53 7.53 1 .91.95-.91L24 2.87z" fill="#d36db3"></path></svg> Delivered by 27th Nov</p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18.35"><path d="M21.13 0L8.48 12.65 2.87 7.04 0 9.91l7.53 7.53 1 .91.95-.91L24 2.87z" fill="#d36db3"></path></svg> Cash on Delivery available on orders above ₹700</p>
                        </div>
                       <form>
                            <div className="product-detail-product-check-pincode">
                            <p><i className="fa fa-map-marker"></i> DELIVERY OPTIONS</p>
                            <div className="product-detail-product-check-pincode1">
                                <input type="text" placeholder="Enter Pincode" maxLength="6" />
                                <button>CHECK</button>
                            </div>
                            </div>
                       </form>
                    </div>
                </div>

                <div className="product-detail-product-3-steps">
                    <div className="product-detail-product-3-steps1"><img src={genuine} /><span>100% GENUINE PRODUCTS</span></div>
                    <div className="product-detail-product-3-steps1"><img src={returnimg} /><span>EASY RETURN POLICY</span></div>
                    <div className="product-detail-product-3-steps1"><span>SOLD BY :COSMETIKAA</span></div>
                </div>

             </div>
            </div>

        </div>
    </div>
</section>




<section className="product-detail-2">
    <div className="container">
        <div className="row">

             <div className="col-md-9">

              <div className="heading2">PRODUCT DESCRIPTION</div>
              <div className="product-detail-product-description-container">
                  <ul className="product-detail-product-description-container-tabs">
                    <li className="active open-description-box">DESCRIPTION</li>
                    <li className=" open-ingredient-box">SPECIFICATIONS</li>
                    <li className= " open-howuse-box">MORE</li>
                  </ul>
                  <div className="product-detail-product-description-container-box description-box">
                      <div className="product-detail-product-description-container-box1">
                         {/* <p>{proDetail.pro_description}</p> */}
                         <div dangerouslySetInnerHTML={{__html:proDetail["pro_description"]}}></div>
                        </div>
                  </div>
                  
                  <div className="product-detail-product-description-container-box ingredient-box">
                      <div className="product-detail-product-description-container-box1">
					               <p><b>Key Features</b></p>
						          
						            <div dangerouslySetInnerHTML={{__html:proDetail["pro_key_features"]}}></div>
						          
						         <p><b>General</b></p>
						            <table className="product-detail-table">
						            <tbody>
                      <tr><td>Manufacturer</td><td>{proDetail.pro_manufacture}</td></tr>
                      <tr><td>Brand Name</td><td>{proDetail.brand_name}</td></tr>
                      <tr><td>Quantity</td><td>1</td></tr>
                      <tr><td>Shelf life</td><td>{proDetail.life_in_month}</td></tr>
                      <tr><td>Pack of</td><td>{proDetail.pro_pack_of}</td></tr>
							         </tbody>	 
						            </table>
                      </div>
                    </div>

                  <div className="product-detail-product-description-container-box howuse-box">
                      <div className="product-detail-product-description-container-box1">
                        <table className="product-detail-table">
						  <tbody>
							<tr><td>Mfd Date</td><td>{proDetail.mfg_date}</td></tr>
              <tr><td>Expiry Date</td><td>{proDetail.expiry_date}</td></tr>
							<tr><td>Country of Origin</td><td>{proDetail.country_of_origin}</td></tr>
						  </tbody>	 
						 </table>
                      </div>
                      
                  </div>


              </div>

              <div className="heading2">CUSTOMERS ALSO VIEWED</div>
              <div className="product-detail-other-product-slider">

<Slider {...settings}>
{
  proDetail.similar.map((item, i)=>(

    <div className="item" key={i}>
       <div className="listing-product-box"><a href="product-detail.php">
            <div className="listing-product-box-img"><img src={item.product_image} alt="img"/></div>
            <div className="listing-product-box-txt"><p>{item.pro_name}</p></div>
            <div className="product-price-label">
            <span className="product-new-price"><i className="fa fa-rupee"></i>{item.pro_price}</span>
            <span className="product-old-price"><i className="fa fa-rupee"></i><del>{item.pro_mrp}</del></span>
            <span className="product-discount-rate">{(((item.pro_mrp - item.pro_price)/item.pro_mrp)*100 ).toFixed(0)} %</span>
            </div>
            <div className="listing-product-box-rating">
            <Rating />
            </div>
            </a>
            <div className="listing-product-box-btns">
                                {
                                   wishproID.includes(item.pro_id) ? <div className="listing-product-box-wishlist-btn"><i className="fa fa-heart"></i>
                                   </div>
                                    : 
                                   <div className="listing-product-box-wishlist-btn"
                                      onClick={()=>{initVal.addTowishlist(item.pro_id);
                                    relaod();
                                    }}>
                                        <i className="fa fa-heart-o"></i>
                                    
                                  </div>
                                 }
                                  
                                  {
                                    cartproID.includes(item.pro_id) ? <div className="listing-product-box-addtocart-btn">IN CART</div>
                                    :
                                    <div className="listing-product-box-addtocart-btn" onClick={()=>{initVal.addtoCartItemfromList(item.pro_id);relaod();}}>ADD TO BAG</div>
                                  }
            </div>
        </div>
    </div>

  ) )
}

</Slider>





              </div>

              <div className="heading2">REVIEW & RATINGS</div>
              <div className="product-detail-rating-review-box" id="rating-box">
                  <div className="product-detail-overall-review-box">

                      <div className="product-detail-overall-review-box1">
                          <div className="product-detail-overall-review-box1a">
                             <strong>4.3</strong><span>/5</span>
                          </div>
                          <div className="product-detail-overall-review-box1b">
                             <strong>Overall Rating</strong>
                             <span>1217 verified ratings</span>
                          </div>
                      </div>

                      <div className="product-detail-overall-review-box2">
                          <a href="">Write Review</a>
                      </div>

                  </div>

                <div className="product-detail-review-box">
                    <div className="product-detail-review-img"><img src="images/user.jpg" /></div><div className="product-detail-review-box-user-name">User Name</div>
                    <div>
                    <div className="product-detail-review-box-star-rating"><span>5</span><i className="fa fa-star"></i></div>
                    <div className="product-detail-total-rating-2"><h5>Review Heading</h5></div>
                    </div>
                    <div className="product-detail-review-box-review-date">29 days ago</div>
                    <div className="product-detail-review-box-review-txt">Nice colour value for money quality is also good 👍🏻 from my side...</div>
                    </div>

                    <div className="product-detail-review-box">
                    <div className="product-detail-review-img"><img src="images/user.jpg" /></div><div className="product-detail-review-box-user-name">User Name</div>
                    <div>
                    <div className="product-detail-review-box-star-rating"><span>5</span><i className="fa fa-star"></i></div>
                    <div className="product-detail-total-rating-2"><h5>Review Heading</h5></div>
                    </div>
                    <div className="product-detail-review-box-review-date">29 days ago</div>
                    <div className="product-detail-review-box-review-txt">Nice colour value for money quality is also good 👍🏻 from my side...</div>
                    </div>
                   </div>
                </div> 
                
            
             <div className="col-md-3">
            <div className="listing-product-box" style={{'position':'sticky','top':'20px','marginTop':'85px'}}>
                   
                    <div className="listing-product-box-img"><img src={proDetail.pro_img} /></div>
                    <div className="listing-product-box-txt"><p>The Face Shop Rice &amp; Ceramide Moisturizing Emulsion</p></div>
                    
					<div className="product-price-label">
					  <span className="product-new-price"><i className="fa fa-rupee"></i>{proDetail.pro_price} </span>
					  <span className="product-old-price"><i className="fa fa-rupee"></i><del>{proDetail.pro_mrp}</del></span>
					  <span className="product-discount-rate">{((proDetail.pro_mrp - proDetail.pro_price) / proDetail.pro_mrp) * 100}% off</span>
				    </div>
                    <div className="listing-product-box-rating">
                      <Rating no_of_rating={rating}/>
                      <span>( {proDetail.no_of_view} )</span>
                     
                    </div>
                    <div className="listing-product-box-btns">
                    {
                                   wishproID.includes(proDetail.pro_id) ? <div className="listing-product-box-wishlist-btn"><i className="fa fa-heart"></i>
                                   </div>
                                    : 
                                   <div className="listing-product-box-wishlist-btn">
                                     <Link to={`/listing/${catName}/${subcatName}`} onClick={()=>{initVal.addTowishlist(proDetail.pro_id);
                                    relaod();
                                    }}>
                                        <i className="fa fa-heart-o"></i>
                                    </Link>
                                  </div>
                                 }
                                  
                                  {
                                    cartproID.includes(proDetail.pro_id) ? <div className="listing-product-box-addtocart-btn">IN CART</div>
                                    :
                                    <div className="listing-product-box-addtocart-btn" onClick={()=>{initVal.addtoCartItemfromList(proDetail.pro_id);relaod();}}>ADD TO BAG</div>
                                  }
                    </div>
                 </div>
            </div> 

        </div>
    </div>
</section> 

</>
)

                        }
        </>
    )
}

export default Product_detail
