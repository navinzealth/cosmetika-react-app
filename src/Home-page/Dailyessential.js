import React,  {useEffect, useContext} from 'react'
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CommonContext from '../CommonContext';

import dailyessentials from '../images/daily-essentials.png';



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

function Dailyessential() {
  const initVal =useContext(CommonContext);
  
  useEffect(() => {
      initVal.fetchHomeData();
  }, [])
    return (
        <section className="daily-essential11">
  <div className="container">
    <div className="row">
      <div className="col-md-12"><div className="heading-img">
                <img src={dailyessentials} alt="img"/>
              </div>
      </div>
      <div className="col-md-12">
        <div className="daily-essential11">
        
              {
                 initVal.loadinghomedata ? (<span>Loading</span>) : (
                  <Slider {...settings}>
                  { initVal.homeData.category.map((item, i)=>(
                    <li key={i}><div className="daily-essential1aa"><Link to={`./listing/${item.cat_slug}`}><img src={item.cat_banner} alt="img" /></Link></div>
                    </li>
                  ))
                  
                  }

                  </Slider>
                 )

              }

         
        

        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Dailyessential
