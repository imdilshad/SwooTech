import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/Screenshot 2024-04-01 123837.png'
import { IoIosHeartEmpty } from "react-icons/io";
import './Header2.css'
import { IoBag } from "react-icons/io5";
import{Navigate, NavLink, useNavigate} from 'react-router-dom' 
import {useSelector,useDispatch} from 'react-redux'
import { remove } from '../../Store/tokenSlice';
import { removeUser } from '../../Store/UserSlice';






function Header2() {
  const token =localStorage.getItem('acessToken')
  // console.log(token)
  const userData=useSelector((state)=>state.User)
 
  const  [User] =userData
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogout=()=>{
    localStorage.removeItem('acessToken');
    dispatch(remove(token))
    dispatch(removeUser(User))
    navigate('/login')
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <div className='container-fluid '>
       <div className='nav-mobile'>
       <NavLink to={"/"}><img className='main-logo' src={logo} alt='a' /></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-5  align-item" >

            <NavDropdown title="HOMES" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">
              <NavLink className='nav-link' to={'/profile'}>Profile</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink className='nav-link' to={'/about'}>About</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="/checkout">
                <NavLink className='nav-link' to={'/checkout'}>Checkout</NavLink>
                </NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="PAGES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <NavLink className='nav-link' to={'/about'}>About</NavLink>
                </NavDropdown.Item>
              <NavDropdown.Item href="/phonetab">
              <NavLink className='nav-link' to={'/about'}>New</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="/cart">
              <NavLink className='nav-link' to={'/cart'}>Cart</NavLink>
                </NavDropdown.Item>
             
            </NavDropdown>

            <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/phonetab">
              <NavLink className='nav-link' to={'/products'}>mobile</NavLink>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
              <NavLink className='nav-link' to={'/single'}>single page</NavLink>
              </NavDropdown.Item>
             
            </NavDropdown>

            <NavLink  className='nav-link' to={"/Contact"}>CONTACT</NavLink>
            {User?.role=="ADMIN"?<NavLink  className='nav-link' to={"/adminDashboard"}>Admin</NavLink> :''}
            {token?<button className='d-md-none nav-link' onClick={handleLogout}>Log Out</button>:<div>
              <NavLink className='d-md-none nav-link' to={"/login"}>Login</NavLink>
            <NavLink className='d-md-none nav-link' to={"/signup"}>Sign UP</NavLink>
            </div> }






          </Nav>
          
        </Navbar.Collapse>
       <div className='d-flex gap-4 justify-content-evenly align-items-center'>
       <div className=' Navbar-topLine' >
          <NavLink className='nav-link' href="/">
            <IoIosHeartEmpty className='fs-1 rounded-circle p-1' style={{backgroundColor:'rgb(234, 227, 227)'}} />
             </NavLink>
        </div>
        
        {token?<button className='btn button-color Navbar-topLine' onClick={handleLogout}>Log Out</button>:
        <div className='mx-2 Navbar-topLine '>
        <span className='text-start fw-bold'>welcome  
        <div className='d-flex'>
        <NavLink   to={"/login"} className='nav-link' >
          <h6>LOG IN</h6> </NavLink>
        <NavLink className='nav-link' to={"/signup"}>
          <h6>/REGISTER</h6> </NavLink>
        </div>
          </span>
      </div> }

       

        <div className='d-flex   align-items-center  Navbar-topLine '>
         
        <NavLink to={'/cart'} className='d-none d-md-block'> <button className="btn text-dark  ">
            <i className="fa-solid fs-3 fa-cart-shopping"></i>
            <span className="badge bg-dark rounded-pill ">0</span>
            </button></NavLink>
          <span className='mx-2  Navbar-topLine'>
            <p>cart <br />
              <b>$1689.00</b></p>
          </span>
        </div>
       </div>
      </div>
    </Navbar>
  );
}

export default Header2;