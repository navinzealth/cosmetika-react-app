import React, {useEffect, useState, useContext} from 'react'
import Mainbanner from './Mainbanner';
import Categorybanner from './Categorybanner';
import Dailyessential from './Dailyessential';
import Featuredbrand from './Featuredbrand';
import BeautyfulProduct from './BeautyfulProduct';
import ContinueYourSearch from './ContinueYourSearch';
import Recentsearches from './Recentsearches';
import Referfriend from '../images/referafriend.jpg';
import Todaydeal from './Todaydeal';
import Youmaylike from './Youmaylike';
import Subscribe from './Subscribe';
import Moreexplore from './Moreexplore';
import CommonContext from '../CommonContext';
import Topbrands from './Topbrands'

function Index() {
   const initVal =useContext(CommonContext);
   const[banslider, setBanslider]=useState([]);
   const [loading, setLoading] = useState(true);

   const fetchHomeData =async(e)=>{
    const fetchHomeData1 = await fetch(`https://cosmetikaa.com/manager/api/logic.php?action=homeData&user_id=${initVal.userID}`)
    const fetchHomeData2 = await fetchHomeData1.json()
    setBanslider(fetchHomeData2.data)
    setLoading(false)
  }
  
  useEffect(() => {
    
     fetchHomeData();
  }, [])
  
return (
<>
        {
          loading ? (<span>loading..</span>) : (

          <span>
            <Mainbanner />
            <Categorybanner img={banslider.threecatbanner2.cat_banner} link={`./listing/${banslider.threecatbanner2.cat_slug}`}/>
            <Dailyessential />
            <Categorybanner img={banslider.threecatbanner3.cat_banner} link={`./listing/${banslider.threecatbanner3.cat_slug}`}/>
            <Featuredbrand />
            <BeautyfulProduct />
            <ContinueYourSearch />
            <Categorybanner img={banslider.threecatbanner1.cat_banner} link={`./listing/${banslider.threecatbanner1.cat_slug}`}/>
            <Recentsearches />
            <Categorybanner img={Referfriend} />
            <Todaydeal />
            <Categorybanner img={banslider.threecatbanner5.cat_banner} link={`./listing/${banslider.threecatbanner5.cat_slug}`}/>
            <Youmaylike />
            <Categorybanner img={banslider.threecatbanner4.cat_banner} link={`./listing/${banslider.threecatbanner4.cat_slug}`}/>
            <Subscribe />
            <Moreexplore />
            <Topbrands />

          </span>
          )
        }
         

         
         

</>
)            
    
}

export default Index
