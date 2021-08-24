import React, {useEffect, useState, useContext} from 'react'
import {useParams, Link, useLocation} from "react-router-dom";
import CommonContext from '../CommonContext'
import search from '../images/search.png'

function SearchBar() {
    const initVal =useContext(CommonContext)
  const [searchkey, setSearchkey]=useState("");
  const [searchlist, setSearchlist]=useState([]);
  const[showlist, setShowlist]=useState(false);
  const[data, setData]=useState(1);
//   const location = useLocation();
//   console.log(location);
   const fetchsearchData = async()=>{
    const fetchsearchData1 = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=globalSearch&user_id=${initVal.userID}&q=${searchkey}`)
    const fetchsearchData2 = await fetchsearchData1.json()
    setSearchlist(fetchsearchData2.data)
    setShowlist(true);
    }


useEffect(()=>{
    
}, [data])

    return (
        <>
        <div className="col-md-4">
                <div className="pre-header3a">
                    <form>
                      <input type="text" placeholder="What are you looking for ?" onChange={(e)=>{fetchsearchData();setSearchkey(e.target.value);setData(data + 1)}} value={searchkey}/>
                      <button><img src={search} alt="img"/></button>
                      {
                          searchkey ? (
                            <div className="pre-header3a1">
                            <ul>
                                {searchlist.map((item, i)=>(
                                    <li key={i}><Link to={`../../../listing/${item.cat_slug}`} onClick={()=>{setSearchkey("")}}>{item.name}</Link></li>
                                ))}
                            </ul>
                            </div>
                          ) : <span></span>
                      }
                      

                    </form>
                </div>
            </div>

            <div className="col-xs-3 d-md-none d-lg-none">
                <div className="pre-header3c">
                    <ul>
                        <li className="open-sidebar"><a href="product-detail"><i className="fa fa-bars"></i></a></li>
                        <li className="open-searchbar"><a href="product-detail"><img src={search} alt="img"/></a></li>
                    </ul>
                </div>
            </div>
</>
    )
}

export default SearchBar
