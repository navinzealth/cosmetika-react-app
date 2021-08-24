import React from 'react'
import Featuredbrandcomponent from './Featuredbrandcomponent'

import featuredbrands from '../images/featured-brands.png'
import featuredbrands1 from '../images/featured-brands1.jpg'
import featuredbrands2 from '../images/featured-brands2.jpg'
import featuredbrands3 from '../images/featured-brands3.jpg'
import featuredbrands4 from '../images/featured-brands4.jpg'


function Featuredbrand() {
    return (
        <section className="featured-brands">
  <div className="container">
    <div className="row">
            <div className="col-md-12">
                <div className="heading-img">
                <img src={featuredbrands} alt="img"/>
                </div>
            </div>


      <Featuredbrandcomponent img={featuredbrands2} h4={`Flat 15% Off on Moisturizers`} p={`+ Buy 5 Get 5 on Masksheets`} alt="img"/>
      <Featuredbrandcomponent img={featuredbrands1} h4={`Flat 15% Off on Moisturizers`} p={`+ Buy 5 Get 5 on Masksheets`} alt="img"/>
      <Featuredbrandcomponent img={featuredbrands3} h4={`Flat 15% Off on Moisturizers`} p={`+ Buy 5 Get 5 on Masksheets`} alt="img"/>
      <Featuredbrandcomponent img={featuredbrands4} h4={`Flat 15% Off on Moisturizers`} p={`+ Buy 5 Get 5 on Masksheets`} alt="img"/>
      <Featuredbrandcomponent img={featuredbrands4} h4={`Flat 15% Off on Moisturizers`} p={`+ Buy 5 Get 5 on Masksheets`} alt="img"/>
      <Featuredbrandcomponent img={featuredbrands2} h4={`Flat 15% Off on Moisturizers`} p={`+ Buy 5 Get 5 on Masksheets`} alt="img"/>
      <Featuredbrandcomponent img={featuredbrands3} h4={`Flat 15% Off on Moisturizers`} p={`+ Buy 5 Get 5 on Masksheets`} alt="img"/>
      <Featuredbrandcomponent img={featuredbrands1} h4={`Flat 15% Off on Moisturizers`} p={`+ Buy 5 Get 5 on Masksheets`} alt="img"/>
      
    </div>
      
      
      
  </div>
</section>
    )
}

export default Featuredbrand
