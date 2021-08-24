import React, {useState, useEffect, useContext} from 'react'
import {Link} from "react-router-dom";
import Rating from './Ratings';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CommonContext from '../CommonContext';

import continueyoursearch from '../images/you-may-like.png';
import listingproduct1 from '../images/listing-product1.jpg';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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



function Youmaylike() {
  const initVal =useContext(CommonContext);
  const [data, setData]=useState(0);
  function relaod(){
   setData(data + 1)
  }
/*---check if prod is in wishlist */

const wishproID = initVal.wishdata.map((item2)=>{
  return item2.pro_id
})
 /*---check if prod is in wishlist */
 /*---check if prod is in cart */
const cartproID = initVal.cartData.map((item3)=>{
  return item3.pro_id
})
 /*---check if prod is in cart */

  useEffect(()=>{
  
    initVal.fetchwishProdCount();
    initVal.getCartData();
   
  },[data])
    return (
        <section className="continue-your-search1">
        <div className="container">
       <div className="row">
           <div className="col-md-12">
             <div className="heading-img"><img src={continueyoursearch} style={{'width':'350px'}} alt="img"/></div>
        </div>	
        
        <div className="col-md-12">

        {
                initVal.loadinghomedata ?  (<span>Loading</span>) : (
<>
                  <Slider {...settings}>

                    {
                      initVal.homeData.youmaylike.map((item, i)=>(


                        <div className="item" key={i}>
                           <div className="listing-product-box"><Link to={`./detail/${item.pro_slug}`}>
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
                                </Link>
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
                    <div className="item">
                           <div className="listing-product-box"><a href="product-detail.php">
                                <div className="listing-product-box-img"><img src={listingproduct1} alt="img"/></div>
                                <div className="listing-product-box-txt"><p>The Face Shop Rice &amp; Ceramide Moisturizing Emulsion</p></div>
                                <div className="product-price-label">
                                <span className="product-new-price"><i className="fa fa-rupee"></i>3000</span>
                                <span className="product-old-price"><i className="fa fa-rupee"></i><del>4556</del></span>
                                <span className="product-discount-rate">34% off</span>
                                </div>
                                <div className="listing-product-box-rating">
                                <Rating />
                                </div>
                                </a>
                                <div className="listing-product-box-btns">
                                    <div className="listing-product-box-wishlist-btn"><a href="product-detail"><i className="fa fa-heart-o"></i></a></div>
                                    <div className="listing-product-box-addtocart-btn"><a href="product-detail">ADD TO BAG</a></div>
                                    </div>
                            </div>
                        </div>
                  </Slider>

<div className="col-md-12">
          <div className="continue-your-search1-btn"><Link to={`/listing/${initVal.homeData.youmaylikeAll.cat_slug}/${initVal.homeData.youmaylikeAll.subcat_slug}`} className="explore-more">View All</Link></div>  
        </div>
</>
                )
              }

                  

        </div>
        
       
        
       </div>	
      </div>
  </section>
    )
}

export default Youmaylike
