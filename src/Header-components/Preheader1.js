import React from 'react';
import one from '../images/1.png';


function Preheader1() {
    return (
        
<section className="pre-header1">
  <div className="container">
    <div className="row">

      <div className="col-md-9 col-xs-7">
          <div className="pre-header1a"><img src={one} alt="img"/></div>
          <div className="pre-header1b hidden-xs">Flat <i className="fa fa-rupee"></i> 80 OFF on First App Order | Min Order <i className="fa fa-rupee"> 999</i></div>
          <div className="pre-header1c">
              <span className="pre-header1ca">Use Code:</span>
              <span className="pre-header1cb">APPFIRSST</span>
          </div>
      </div>

      <div className="col-md-3 col-xs-5">
          <div className="pre-header1d"><a href="listing.php">DOWNLOAD APP</a></div>
          <div className="pre-header1e"><span className="fa fa-close"></span></div>
      </div>


    </div>
  </div>
</section>
        
    )
}

export default Preheader1;
