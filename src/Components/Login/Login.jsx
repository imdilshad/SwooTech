import  {React,useState} from 'react'
import loginimg from '../images/login.svg fill.png'
// import './Login.css'
import Button from 'react-bootstrap/Button';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { add } from '../../Store/tokenSlice';
import { addUser } from '../../Store/UserSlice';


 const Login = () => {
  const dispatch=useDispatch();
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      console.log(formData)
      event.preventDefault();
      setErrors({}); // Clear previous errors
      setSuccessMessage(null);
      setIsLoading(true);
  
      const { email, password } = formData;
  
      let newErrors = {};
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!password || password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
  
      setErrors(newErrors);
      if (Object.keys(newErrors).length !== 0) {
      setIsLoading(false)
      }
      if (Object.keys(newErrors).length === 0) {
  
      (async()=>{
          try { 
            const res = await axios.post('https://ecommbackend-f6t0.onrender.com/api/v1/user/login',formData)
            console.log("res : ",res.data)
            const data = await res.data;
            if (res) {
              console.log(data)
              setSuccessMessage(data.message || 'User logged in Successfully');
            } else {
              throw new Error('Failed to register user');
            }
            dispatch(add(data.data.accessToken));
            dispatch(addUser(data.data.user));
            if(data.message=='User logged in Successfully'){
              if(data.data.user.role=='ADMIN'){
                navigate('/admin')
              }
              else{
                navigate('/')
              }
           
            }
          } catch (error) {
            console.log('this is the error',error)
            if(error.response.data.message==`User with this email doesn't exits.`){
              newErrors.email = "User with this email doesn't exits.";
            }
            if(error.response.data.message==`Invalid user password!!!`){
              newErrors.password = "Please Enter Correct Password.";
            }
            setErrors(newErrors)
            
          } finally {
              
            setIsLoading(false);

           
          }
        })()
      } 
    };
  return (
    <>

    <div className='row my-5  container-fluid'>





<div className='col-md-6 col-12 my-2 px-4 d-flex justify-content-center align-items-center '>
  <img className='' src={loginimg} alt='a'/>
    
</div>
<div className='col-md-6 col-12 my-2 px-4 form container-fluid'>
    <p className='fs-1 text-color'> welcome back </p>
    <p className=''>LOG IN TO CONTINUE</p>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
        className="form-control "
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p className="error text-danger">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
        className="form-control "
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <p className="error text-danger">{errors.password}</p>}
      </div>
      
      <button type="submit" className='btn button-color my-4' disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Log In'}
      </button>
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
<p className='te mt-3'>NEW USER ? <Link to={'/signup'} className='text-color'>SIGN UP</Link></p>



</div>


    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Login