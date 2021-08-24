import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png';

function Preheader4() {
    useEffect(()=>{fetchsubcategoryList()},[])
const [subcatlist, setsubcatlist] = useState([])
const fetchsubcategoryList = async (e)=>{
    let subresult = await fetch('https://cosmetikaa.com/manager/api/logic.php?action=catSubcategoryList')
    const subresult2 = await subresult.json()
    setsubcatlist(subresult2.data)
}

    return (
        <section className="pre-header4">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="pre-header4b">
                        <ul>
                            <li className="d-md-none d-lg-none" style={{'textAlign':'center'}}><img src={Logo} alt="img"/>  <i className="fa fa-close close-sidebar"></i></li>

                            {subcatlist.map((item, i)=>{
                               var buttons = item.subcat.map((list, j)=> {
                                return (
                                    <li key={j}><Link to={`/listing/${item.cat_slug}/${list.subcat_slug}`}>{list.subcat_name}</Link></li>
                                )
                            });
                                return (
                                <li key={i}><Link to={`/listing/${item.cat_slug}`}><span>{item.cat_name} <i className="fa fa-angle-down hidden-sm hidden-xs"></i></span><i className="fa fa-plus d-md-none d-lg-none"></i></Link>
                                <ul>
                                    {buttons}
                                </ul>
                               </li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Preheader4
