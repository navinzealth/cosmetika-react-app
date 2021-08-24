import React from 'react';
import {Link} from 'react-router-dom';
import '../user-profile.css';

function LeftMenu() {
    return (
        <article className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
								<div className="widget-title customer-heading">
                                    <i className="fa fa-tag"></i> My menu <i className="fa fa-list hidden-md hidden-lg open-dashboard-menu" ></i>
                                </div>
                                <div className="widget-block">
                                    <ul className="list-unstyled catalog">
                                        <li><Link to="profile-dashboard.php" className="customer-active"><i className="fa fa-dashboard"></i>Dashboard</Link></li>
                                        <li><Link to="personalisinfo.php"><i className="fa fa-info"></i>Personal information</Link></li>
                                        <li><Link to="myaddress.php"><i className="fa fa-home"></i>My addresses</Link></li>
                                        <li><Link to="myorder.php"><i className="fa fa-list"></i>My orders</Link></li>
                                        <li className="profile-active"><Link to="wishlist.php"><i className="fa fa-heart"></i>My wishlist</Link></li>
                                        <li><Link to="changepwd.php"><i className="fa fa-pencil"></i>Change password</Link></li>
                                        
                                    </ul>
                                </div>

</article>
    )
}

export default LeftMenu
