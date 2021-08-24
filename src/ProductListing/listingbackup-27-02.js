import React, {useEffect, useState, useContext} from 'react'
import {useParams, Link} from "react-router-dom";
import Rating from '../Home-page/Ratings'
import bannerHairCare from '../images/banner-hair-care.jpg'
import filtericon from '../images/filter-icon.png'
import CommonContext from '../CommonContext'
import $ from 'jquery';

function Listing() {
  const initVal =useContext(CommonContext)
  let { catName, subcatName } = useParams();
 const [brand, setBrand]= useState([])
 const [price, setPrice]= useState([])
 const [subcategory, setSubcategory] = useState([])
 const [loadinglist, setLoadinglist] = useState(true);
 const [data, setData]=useState(0);
 const [showlist, setShowlist]=useState([])
 const [visible, setVisible]=useState(6)
 const [showloadbtn, setShowloadbtn]=useState(true)
 /**-sorting-data-- */
 const [sortProduct, setSortProduct] = useState('popular');
  /**-sorting-data-- */

 function relaod(){setData(data + 1)}
 const showMoreItems=()=>{setVisible((prevValue)=> prevValue + 3);
  if(visible >= showlist.length){setShowloadbtn(false);}};

 const checkifmoreproduct= ()=>{
   if( showlist.length > 6){setShowloadbtn(false);}
   else{setShowloadbtn(true);}
 }

const fetchcatPro = async(e)=>{
  const fetchcatPro1 = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=productsByCategory&user_id=${initVal.userID}&cat_slug=${catName}&subcat_slug=${subcatName ? subcatName : 0}`)
  const fetchcatPro2 = await fetchcatPro1.json()
    setBrand(fetchcatPro2.filter.brandList)
    setPrice(fetchcatPro2.filter.priceFilter)
    setSubcategory(fetchcatPro2.filter.subcategoryList)
    setShowlist(fetchcatPro2.data)
    setLoadinglist(false)
} 
// console.log(sortProduct)
/*---check if prod is in wishlist */
const wishproID = initVal.wishdata.map((item2)=>{return item2.pro_id})
 /*---check if prod is in wishlist */
 /*---check if prod is in cart */
const cartproID = initVal.cartData.map((item3)=>{return item3.pro_id})
 /*---check if prod is in cart */
 /**-srot-hight and low products */
  
 /**-srot-hight and low products */
useEffect(()=>{
  fetchcatPro();initVal.fetchwishProdCount();initVal.getCartData();checkifmoreproduct();setVisible(6);
 },[catName, subcatName, data])
 console.log('showlistlength', showlist.length)
 console.log('showlist', showlist)
 
    return (
        <>


<section className="listing-bredcrumb">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <ul className="breadcrumb"><li><Link to="../">Home</Link></li><li><Link to={`../../listing/${catName}`}>{catName}</Link></li><li>{subcatName}</li></ul>
            </div>
        </div>
    </div>
</section>


<section className="listing-banner">
    <div className="container">
     <div className="row">
      <div className="col-md-12">
       <div className="listing-banner-img">
         <img src={bannerHairCare} />
       </div>
      </div>
     </div>
    </div>
</section>



{loadinglist ? (<span>Loading.....</span>) : (

<section className="listing-heading-section">
  <div className="container">
   <div className="row">

    <div className="col-md-12">
      <div className="listing-heading heading">
        ALL PRODUCTS
      </div>
	  <div className="open-filter-box hidden-md hidden-lg"><img src={filtericon} /></div>
    </div>

    <div className="col-md-12">
        <div className="row">
            {/* <!------------------------------------------filter-----------------------------------------------------------> */}
              
            <div  className="col-md-3 ps-sticky">
          <div className="listing-product-filter-box">

           <div className="close-listing-filter-box hidden-lg hidden-md"><i className="fa fa-close"></i></div>
               {/* --sort-by-value-- */}
            <div className="listing-product-by-sort">
                <div className="listing-product-by-sort-heading">SORT BY: <i className="fa fa-plus"></i></div>
                <div className="listing-product-by-sort-options">
                    <label className="con">Popularity<input type="radio" checked={sortProduct === 'popular'} name="radio" value="popular" onChange={(e)=>{setSortProduct(e.target.value);}}/><span className="checkmark"></span></label>

                    <label className="con">Price - Low to High<input type="radio" checked={sortProduct === 'low'} name="radio" value="low" onChange={(e)=>{setSortProduct(e.target.value);}}/><span className="checkmark"></span></label>

                    <label className="con">Price - High to Low<input type="radio" checked={sortProduct === 'high'} name="radio" value="high" onChange={(e)=>{setSortProduct(e.target.value);}}/><span className="checkmark"></span></label>

                    <label className="con">Newest First<input type="radio" checked={sortProduct === 'new'} name="radio" value="new" onChange={(e)=>{setSortProduct(e.target.value);}}/><span className="checkmark"></span></label>
                </div>
             </div>
                     {/* --sort-by-value-- */}


                    {/* --filter-by-price-- */}
            <div className="listin-product-filter-list">
             <div className="listing-product-filter-list-heading">PRICE <i className="fa fa-plus"></i></div>
             <div className="listing-product-filter-list-options" style={{'display':'block'}}>
               {
                 price.map((item)=>(
                  <label className="chek-1" key={item.key}><input type="checkbox"  selected={item.is_selected}/><span className="checkmark1"></span>{item.price}</label>
                 ))
               }
             </div>
            </div>
                        {/* --filter-by-price-- */}
                         {/* --filter-by-brand-- */}
            <div className="listin-product-filter-list">
             <div className="listing-product-filter-list-heading">BRAND <i className="fa fa-plus"></i></div>
             <div className="listing-product-filter-list-options" style={{'display':'block'}}>
               
               { brand ? (  brand.map((item)=>(
                 <label className="chek-1" key={item.brand_id}><input type="checkbox"  selected={item.is_selected}/><span className="checkmark1"></span> {item.brand_name}</label>
               ))) : (
                 <span></span>
               )}
             </div>
            </div>
                         {/* --filter-by-brand-- */}
                         {/* --filter-by-brand-- */}
            <div className="listin-product-filter-list">
             <div className="listing-product-filter-list-heading">CATEGORY <i className="fa fa-plus"></i></div>
             <div className="listing-product-filter-list-options" style={{'display':'block'}}>
              {
                subcategory ? (subcategory.map((item)=>(
                  <label className="chek-1" key={item.subcat_id}><input type="checkbox" selected={item.is_selected}/><span className="checkmark1"></span> {item.subcat_name}</label>
                 ))) : (<span></span>)
                }
             </div>
            </div>
                          {/* --filter-by-brand-- */}

            <div className="filter-btns">
              <a href="">CLEAR</a>
              <a href="">APPLY</a>
            </div>

          </div>
           </div>

            {/* <!-----------------------------------------filter------------------------------------------------------------> */}
            {/* <!-----------------------------------------product-------------------------------------------> */}
        <div className="col-md-9">
          <div className="row">
             {showlist.slice(0,visible).map((item, i)=>(
                         <div className="col-md-4" key={item.pro_id}>
                             <div className="listing-product-box">
                                <div className="listing-product-box-img">
                                  {
                                    subcatName ? (<Link to={`/listing/${catName}/${subcatName}/detail/${item.pro_slug}`}><img src={item.product_image} /></Link>) : (<Link to={`/listing/${catName}/detail/${item.pro_slug}`}><img src={item.product_image} /></Link>)
                                   }
                                </div>
                                <div className="listing-product-box-txt">
                                   {
                                   subcatName ? (<Link to={`/listing/${catName}/${subcatName}/detail/${item.pro_slug}`}><p>{item.pro_name}</p></Link>) : (<Link to={`/listing/${catName}/detail/${item.pro_slug}`}><p>{item.pro_name}</p></Link>)
                                    }
                                 </div>
                                <div className="product-price-label">
                                  <span className="product-new-price"><i className="fa fa-rupee"></i>{item.pro_price}</span>
                                  <span className="product-old-price"><i className="fa fa-rupee"></i><del>{item.pro_mrp}</del></span>
                                  <span className="product-discount-rate">{((item.pro_mrp - item.pro_price) / item.pro_mrp) * 100}% off</span>
                                </div>
                                <div className="listing-product-box-rating"><Rating no_of_rating={parseInt(item.rating)}/></div>
                                <div className="listing-product-box-btns">
                                   {
                                   wishproID.includes(item.pro_id) ? <div className="listing-product-box-wishlist-btn"><i className="fa fa-heart"></i>
                                   </div>
                                    : 
                                   <div className="listing-product-box-wishlist-btn">
                                     <Link to={`../../listing/${catName}/${ subcatName ? subcatName : ''}`} onClick={()=>   {initVal.addTowishlist(item.pro_id);relaod();}}><i className="fa fa-heart-o"></i></Link>
                                  </div>
                                   }
                                  {
                                    cartproID.includes(item.pro_id) ? <div className="listing-product-box-addtocart-btn">IN CART</div>
                                    :
                                    <div className="listing-product-box-addtocart-btn" onClick={()=>{initVal.addtoCartItemfromList(item.pro_id);relaod();}}>ADD TO BAG</div>
                                   }
                                </div>
                              </div>
                           </div>
                ))}                   
            </div>
          </div>
            </div>
            {/* <!--------------------------------------------------product-------------------------------------------> */}
        </div>
    </div>
               <div className="col-md-4"></div>
               <div className="col-md-4">   
                  { showloadbtn ? <buttton onClick={showMoreItems} className="loadmore">Load More</buttton> : <div></div>}
              </div>
   </div>

</section>
)}     
        </>
    )
}

export default Listing
