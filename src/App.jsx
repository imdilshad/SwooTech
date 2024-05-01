import { BrowserRouter,Routes, Route,useNavigate} from 'react-router-dom';
import './App.css';
// import { Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


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
import Admin from './Admin';


function App() {

  return (
   <>  
    <BrowserRouter>
    <HeaderMain/>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>}  />
          <Route path="/phonetab" element={<Phonetab/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<CartMain/>} />
          <Route path="/Product" element={<SingleProductMain/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/signup" element={<Registration/>} />
          <Route path="/Multipage" element={<Multipage/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
        <Footer/>
    
    </BrowserRouter>


   
 
   </>
  );
}

export default App;
