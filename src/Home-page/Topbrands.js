import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import continueyoursearch from '../images/topbrand.png';




function Topbrands() {
    const [data1, setData] = useState([]);

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
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
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    };

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://cosmetikaa.com/manager/api/logic.php?action=brandListLogo');
            const {data} = await response.json();
             setData(data);
            console.log("data", data)
        }
       
        fetchData();
    },[]);
    console.log(data1)
    console.log('type', typeof(data1))
return (
    <section className="sixth-sec">
     <div className="container-fluid">
         <div className="row">
             <div className="col-md-12">
             <div className="heading-img"><img src={continueyoursearch} alt="img"/></div>
             </div>
             <div className="col-md-1"></div>
             <div className="col-md-10">
                 <div className="sixth-seca">


                 <Slider {...settings}>
                       {data1.map((item, i) => {
                        return <div>
                                 <div><img src={item.brand_banner} alt={item.brand_name}/></div>
                               </div>
                        })}
                 </Slider>

                 
                
                 </div>
             </div>
         </div>
     </div>
    </section>
)
}


export default Topbrands
