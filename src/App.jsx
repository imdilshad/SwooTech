import { BrowserRouter,Routes, Route,Navigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux'


import Profile from './Components/Profile/Profile';

import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/SignUp/Registration';
import CartMain from './Components/Cart/CartMain';
import SingleProductMain from './Components/sumsung/SingleProductMain';
import HeaderMain from './Components/Header/HeaderMain';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Phonetab from './Components/Products/Phonetab';
import Footer from './Components/Footer/Footer';
import Multipage from './Components/Products/Multipage';
import CreateProduct from './Admin/AdminProduct/CreateProduct';
import { useEffect } from 'react';
import axios from 'axios';
import AdminDashboard from './Admin/AdminDashboard';
import AllProducts from './Admin/AdminProduct/AllProducts';


function App() {
  const tokenData=useSelector((state)=>state.token)
  const [token]=tokenData
  
  let localToken = localStorage.getItem('acessToken');

(async()=>{

try {
  let response=await axios.get('/api/v1/healthCheck').then(res=>res.data)
} catch (error) {
  console.log(error.response.data.message)
}
})()

  return (
   <>  
    <BrowserRouter>
    <HeaderMain/>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>}  />
          <Route path="/profile" element={localToken? <Profile/>:<Navigate to={'/login'} />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={localToken ? <CartMain/>:<Navigate to={'/login'} />} />
          <Route path="/products" element={<Phonetab/>} />
          <Route path="/products/:id" element={<SingleProductMain/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/signup" element={<Registration/>} />
          <Route path="/Multipage" element={<Multipage/>} />
          <Route path="/adminDashboard/products/createProduct" element={<CreateProduct/>} />
          <Route path="/adminDashboard" element={<AdminDashboard/>} />
          <Route path="/adminDashboard/products" element={<AllProducts/>} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
        <Footer/>
    
    </BrowserRouter>


   
 
   </>
  );
}

export default App;
