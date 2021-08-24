import React from 'react';
import './App.css';
import './responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {CommonData} from  './CommonContext'
import Nav from './Nav';
import Index from './Home-page/Index';
import Footer from './Footer';
import Signup from './Dashboard/Signup'
import Login from './Dashboard/Login';
import Cart from './Dashboard/Cart';
import Wishlist from './Dashboard/Wishlist';
import Listing from './ProductListing/Listing'
import Product_detail from './Product_detail/Product_detail'
import Checkout from './Checkout/Checkout';





function App() {
  
  return (
    <>
    <Router>
    <CommonData>
    
       <Nav />
       <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/products">
                 <Listing />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/wishlist">
                < Wishlist />
              </Route>
              <Route path="/listing/:catName/:subcatName" exact>
              {/* children={<Listing />} */}
                < Listing />
              </Route>
              <Route path="/listing/:catName" exact>
                < Listing />
              </Route>

              


              <Route path="/listing/:catName/detail/:pro_slug" exact>
                <Product_detail />
              </Route>
              
              <Route path="/listing/:catName/:subcatName/detail/:pro_slug" exact> 
                <Product_detail />
              </Route>

              <Route path="/detail/:pro_slug" exact> 
                <Product_detail />
              </Route>
              
              <Route path="/checkout">
                < Checkout />
              </Route>
              
          
       </Switch>
       <Footer />
     
     </CommonData>
     </Router>
    </>
  );
}

export default App;
