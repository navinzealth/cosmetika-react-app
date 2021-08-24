import React,  { useContext} from 'react'
import {Link} from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CommonContext from '../CommonContext';

import continueyoursearch from '../images/today-deal.png';


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



function Todaydeal() {
  const initVal =useContext(CommonContext);
    return (
        <section className="continue-your-search1">
        <div className="container">
       <div className="row">
           <div className="col-md-12">
             <div className="heading-img"><img src={continueyoursearch} style={{'width':'165px'}} alt="img"/></div>
        </div>	
        
        <div className="col-md-12">

              {
                initVal.loadinghomedata ?  (<span>Loading</span>) : (

                  <Slider {...settings}>

                    {
                      initVal.homeData.todaydeals.map((item, i)=>(


                        <div className="item" key={i}>
                           <div className="listing-product-box"><Link to={`./detail/`}>
                                <div className="listing-product-box-img"><img src={item.dealimage} alt="img"/></div>
                                <div className="listing-product-box-txt"><p>{item.text_name}</p></div>
                                <div className="product-price-label">
                                
                                <span className="product-discount-rate">{item.discount}</span>
                                </div>
                                
                                </Link>
                               
                            </div>
                        </div>

                      ) )
                    }
                  </Slider>

                )
              }

               {/* <Slider {...settings}>
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
                                </a><div className="listing-product-box-btns">
                                    <div className="listing-product-box-wishlist-btn"><a href="product-detail"><i className="fa fa-heart-o"></i></a></div>
                                    <div className="listing-product-box-addtocart-btn"><a href="product-detail">ADD TO BAG</a></div>
                                    </div>
                            </div>
                        </div>
                  </Slider> */}

        </div>
        
        <div className="col-md-12">
          <div className="continue-your-search1-btn"><a href="listing.php" className="explore-more">View All</a></div>  
        </div>
        
       </div>	
      </div>
  </section>
    )
}

export default Todaydeal
