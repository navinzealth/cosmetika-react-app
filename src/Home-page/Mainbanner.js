import React, {useEffect, useState, useContext} from 'react'
import { Link} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CommonContext from '../CommonContext';


function Mainbanner() {
  const initVal =useContext(CommonContext);
  const fetchHomeData =async(e)=>{
    const fetchHomeData1 = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=homeData&user_id=${initVal.userID}`)
    const fetchHomeData2 = await fetchHomeData1.json()
   setBanslider(fetchHomeData2.data.slider)
  }

  useEffect(() => {
     fetchHomeData();
    
  }, [])
  
  const[banslider, setBanslider]=useState([])


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: true,
          speed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
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

    return (
        <section className="home-banner-slider">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12" style={{'padding':'0'}}>
                    <Slider {...settings}>
                       {banslider.map((item, i)=>{
                         return(
                           <div className="home-banner1" key={i}><Link to={`./listing/${item.cat_slug}`}><img src={item.cat_banner} alt={item.slide_name}/></Link></div>
                        ) })}
                     </Slider>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Mainbanner
