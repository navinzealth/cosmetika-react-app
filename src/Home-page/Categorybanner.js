import React from 'react'
import { Link} from "react-router-dom";

function Categorybanner(props) {
    return (
        <section className="home-second-banner">
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="home-second-banner1 effect-apollo">
        <Link to={props.link}><img src={props.img} alt="img"/><figcaption></figcaption></Link>
      </div>
    </div>
  </div>
</div>
</section>
    )
}

export default Categorybanner
