import React from 'react'

function Featuredbrandcomponent(props) {
    return (
        <div className="col-md-3">
	     <a href="listing.php">
          <div className="featured-brands-box">
            <div className="featured-brands-box-img"><img src={props.img} alt="img"/></div>
            <div className="featured-brands-box-txt">
            <h4>{props.h4} </h4>
            <p>{props.p} </p>
            </div>
        </div>
		</a>
      </div>
    )
}

export default Featuredbrandcomponent
