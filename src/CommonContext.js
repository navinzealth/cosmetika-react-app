import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
const CommonContext = React.createContext();
export default CommonContext;
export const CommonData =(props)=>{
    let history = useHistory();
    const [loggedin, setLoggedin]=useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState(null);
    const [otp, setOtp] = useState('');
    const [otpsentsignup, setOtpsentsignup] = useState(false);
    const [checked, setChecked] = useState(true);
    const fillName=(e)=>{setName(e.target.value)}
    const fillEmail=(e)=>{setEmail(e.target.value)}
    const fillMobile=(e)=>{setMobile(e.target.value)}
    const fillOtp=(e)=>{setOtp(e.target.value)}
    const checkPolicy=(e)=>{setChecked(!checked)}
    const [userID, setUserID]= useState(10);
    const [homeData, setHomeData] = useState([]);
    const [loadinghomedata, setLoadinghomedata]=useState(true);
    const [PrdCount, setPrdCount] = useState(0);
    const [wishqty, setWishqty]=useState(0);
    const [wishdata, setWishdata]= useState([]);
    const [cartData, setCartData]= useState([]);
    const [cartDataDetail, setCartDataDetail]= useState({});
    /*-----signup-const----- */
    /**--login-const- */
    const [otpstatuslogin, setOTPstatuslogin] = useState(false)
    const [userreferral, setUserreferral] =useState(false)
    /**--login-const- */    
    const userdetailfromLocalStore = async(e)=>{
     const userDetails = await JSON.parse(localStorage.getItem('login-user-details'));
     if(userDetails){
       setName(userDetails.data.name);setEmail(userDetails.data.email);setMobile(userDetails.data.phone);
       setUserID(userDetails.data.user_id);setPrdCount(userDetails.prdCount);
      //  console.log(userDetails.data);
      //  console.log(name)
      //  console.log(userDetails)
   }
   else{ return false}
   }
/**----------------------fetch-home-data---------- */
const fetchHomeData =async(e)=>{
  const fetchHomeData1 = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=homeData&user_id=${userID}`)
  const fetchHomeData2 = await fetchHomeData1.json()
  setHomeData(fetchHomeData2.data)
  setLoadinghomedata(false);
  setPrdCount(fetchHomeData2.data.prdCount)
} 


/**----------------------fetch-home-data---------- */
    useEffect(()=>{
      userdetailfromLocalStore();
      fetchHomeData();
      getCartData();
      },[])

      
    //  console.log(userID)
     /*-----signup-const----- */


/*-------------------------------------wishlist-------------------------------------------- */
     
/*----------------------------------------------------sign-up-------------------------------------------- */
     /*sent OTP */
     const sentOtpforSignup =async (e)=>{
      e.preventDefault();
    let result= await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=login&phone=${mobile}`)
    result = await result.json()
    if(result.status === 1){setOtpsentsignup(true);}
    else if(result.status === 0){setOtpsentsignup(false); alert('Required parameter missing')}
    else if(result.status === 2){setOtpsentsignup(false); alert('Something went wrong!!');}
    alert('OTP sent successfully');
  }
  /*sent OTP */
  /*submit-form */
  const submitFormforsignup=async (e)=>{
    e.preventDefault();
    let result2 = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=otpVerification&otp=${otp}&mobile=${mobile}&name=${name}&email=${email}`)
    result2 = await result2.json()
     if(result2.status === 1){
   //    localStorage.setItem('user-signup-info', JSON.stringify(result2));
       setName(name);
       setEmail(email);
       setMobile(mobile);
        alert('account created successfully please login using your phone');
        history.push("/login");
    }
    else {alert('info in wrong')} 
}
/*submit-form */
/*----------------------------------------------------sign-up-------------------------------------------- */
/*----------------------------------------------------Login-------------------------------------------- */
/*request OTP */
const reQOTPforLogin = async (e)=>{
	e.preventDefault();
	  let mob = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=login&phone=${mobile}`)
	  mob = await mob.json()
	  if(mob.status === 1){
		  alert('otp sent successfully')
		  console.log('user-login', mob.data)
      setName(mob.data.name);
      setEmail(mob.data.email);
		  setMobile(mob.data.mobile);
		  setUserreferral(mob.data.is_referral_used);
		  setOTPstatuslogin(true);
		}
		  else{
			  alert('wrong mobile number')
		  }
	}
/*request OTP*/
/*submit form or otp */
const submitOTPforLogin =async (e)=>{
	e.preventDefault();
	let veryOtp = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=otpVerification&otp=${otp}&mobile=${mobile}&name=${name}&email=${email}&referral_code=`)
	veryOtp = await veryOtp.json()
	if(veryOtp.status === 1){
    alert('otp verified successfully');
       setUserID(veryOtp.data.user_id)
       setPrdCount(veryOtp.prdCount);
       setLoggedin(true);
		history.push("/");
		localStorage.setItem('login-user-details', JSON.stringify(veryOtp));
	}
  else{alert('otp didnt match')}
}
/*submit form or otp */

/*----------------------------------------------------Login-------------------------------------------- */
/*----------------------------------------------------logout------------------------------------------- */
const logout =(e)=>{
  e.preventDefault();localStorage.removeItem('login-user-details');
 setName();setEmail();setMobile();setUserID();setPrdCount(0);
 history.push("/");
}
/*-----------------------------------------------------logout------------------------------------------- */
     /*--------------------------------------wishlist-------------------------------------------- */
    //addto wishlist  https://cosmetikaa.com/manager/api/logic.php?action=addtoWishlist&user_id=10&pro_id=710&qty=1

     const fetchwishProdCount = async(e)=>{
      const result = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=myWishlist&user_id=${userID}`)
      const result2 = await result.json()
      setWishqty(result2.tottalWishlist);
      setWishdata(result2.data.wishlistData);
      // console.log('wishlistqty', wishqty)
      // console.log('wishlistData',wishdata)
    }
    /*------------------add-to-wishlist--------------------------------- */
     const addTowishlist = async(id)=>{
       const result = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=addtoWishlist&user_id=${userID}&pro_id=${id}&qty=1`)
       const result2 = await result.json()
       alert('Product added to wishlist')
     }
    /*------------------delete-from -wishlist----------------------- */
    const deleteFromWish=async (id)=>{
        const delWishPro = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=myWishlist&user_id=${userID}&pro_id=${id}`)
        const delWishPro2 = await delWishPro.json();
        fetchwishProdCount();
         alert('Product removed from Wishlist Successfully');
    }
    /*----api-to-add-in-cart-from-wishlist---- */
    const addtoCartItem = async(id)=>{
      const addCartItem = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=addtoCart&user_id=${userID}&pro_id=${id}&qty=1`)
      
      const addCartItem2 = await addCartItem.json();
      deleteFromWish(id)
      alert('Product added in Cart Successfully');
      setPrdCount(PrdCount + 1)
    }
    /*--------------------------------------wishlist-------------------------------------------- */
    /*-----------------------------------------------------cartData------------------------------------------ */
    /*----api-to-fetch-cart-data---- */

const getCartData=async (e)=>{
     const cartDataa = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=myCart&user_id=${userID}`)
  const cartData2 =await cartDataa.json()
  // setCartData(cartData2);
  setCartData(cartData2.data.cartData);
  setCartDataDetail(cartData2)
  // console.log('cartData',cartData )
  // console.log('cartData2',cartData2 )
}

  /*----api-to-fetch-cart-data---- */

  /*----api-to-add-in-cart-from-listing---- */
  const addtoCartItemfromList = async(id)=>{
    const addCartItem = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=addtoCart&user_id=${userID}&pro_id=${id}&qty=1`)
    
    const addCartItem2 = await addCartItem.json();
    // deleteFromWish(id)
    alert('Product added in Cart Successfully');
   // setCartData(cartData2);
    setPrdCount(PrdCount + 1)
  }
 /*----api-to-add-in-cart-from-listing---- */
    /*----api-to-delete-cart-item---- */
    const deleteCartItem = async(id)=>{
      const delCartItem = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=myCart&user_id=${userID}&qty=0&pro_id=${id}`)
      const delCartItem2 = await delCartItem.json();
      getCartData();
      alert('Product removed from Cart Successfully');
      setPrdCount(PrdCount - 1)
    }
/*----api-to-delete-cart-item---- */




/*-----------------------------------------------------cartData------------------------------------------ */

  //--------------------------------------------------------04-------------------06-------------08-------09----------10
return(
  <CommonContext.Provider value={{name:name, fillName:fillName, email:email, fillEmail:fillEmail, mobile:mobile, fillMobile:fillMobile,otpsentsignup:otpsentsignup, sentOtpforSignup:sentOtpforSignup, otp:otp, fillOtp:fillOtp, checked:checked, checkPolicy:checkPolicy, submitFormforsignup:submitFormforsignup, userID:userID,PrdCount:PrdCount, otpstatuslogin:otpstatuslogin, userreferral:userreferral,reQOTPforLogin:reQOTPforLogin, submitOTPforLogin:submitOTPforLogin, logout:logout, 
    wishqty:wishqty,  wishdata:wishdata, fetchwishProdCount:fetchwishProdCount, deleteFromWish:deleteFromWish,
   getCartData:getCartData,cartData:cartData,cartDataDetail:cartDataDetail,deleteCartItem:deleteCartItem, addtoCartItem:addtoCartItem, fetchHomeData:fetchHomeData, homeData:homeData, loadinghomedata:loadinghomedata, addTowishlist:addTowishlist, addtoCartItemfromList:addtoCartItemfromList}}>
    {props.children}
  </CommonContext.Provider>
)
}

