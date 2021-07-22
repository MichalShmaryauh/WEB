/**
 THIS  IS THE MAIN COMPONENT THAT SHOW THE LOGO AND FOOTER AND ALSO ROUTING THE 
 PAGES TO THE CORECT ROUTE BY THE REACT ROUTER DOM
 */
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import Error from './Components/Error/Error'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import ContactUs from './Components/ContactUs/ContactUs'
import ToExit from './Components/ToExit/ToExit'
import ShoppingBag from './Components/ShoppinBag/ShoppinBag'
import Logo from './Components/Logo/Logo'
import UpdetePassword from './Components/UpdatePassword/UpdatePassword'
import Footer from './Components/Footer/Footer'
import Products from './Components/Departments/Products'
import Departments from './Components/Departments/Departments'


function App() {
  
  return (
    <div className="App">
      <Logo />
      
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Departments} path="/Departments" />
        <Route component={About} path="/About" />
        <Route component={Blog} path="/Blog" />
        <Route component={ContactUs} path="/ContactUs" />
        <Route component={ToExit} path="/ToExit" />
        <Route component={() =><ShoppingBag user={localStorage.getItem("userId")} categoryId={1} header={"Your Cart"}  isPay={true}/>} path="/ShoppingBag" />
        <Route component={()=><ShoppingBag user={localStorage.getItem("userId")} categoryId={2} header={"Your Favorites"}  isPay={false}/>} path="/FavoriteBag" />
        <Route component={UpdetePassword} path="/Home/ForgotPassword" />
        <Route component={()=><Products categoryId={1} header={"Clean Home Product"}  />} path="/Department/CleanHome" />
        <Route component={()=><Products categoryId={3} header={"Landry Products"} />} path="/Department/Laundry" />
        <Route component={()=><Products categoryId={5} header={"Cooking Aids Products"}  />} path="/Department/CookingAids" />
        <Route component={()=><Products categoryId={4} header={"Cleaning Tools Products"} />} path="/Department/CleaningTools" />
        <Route component={()=><Products categoryId={2} header={"Gant Repellents Products"} />} path="/Department/GantRepellents" />
        <Route component={()=><Products categoryId={6} header={"Paper Products"} />} path="/Department/Paper" />
        <Route component={Error} />

      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;