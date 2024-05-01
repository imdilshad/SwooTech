import  {React,useState} from 'react'
import loginimg from '../images/login.svg fill.png'
import '../Login/Login.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useNavigate ,Link} from 'react-router-dom';



const Registration = () => {
 const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [errors, setErrors] = useState({});
      const [isLoading, setIsLoading] = useState(false);
      const [successMessage, setSuccessMessage] = useState(null);
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
      const handlepassword=(e)=>{
        setConfirmPassword(e.target.value)
      }

    
      const handleSubmit = (event) => {
        console.log(formData)
        event.preventDefault();
        setErrors({}); // Clear previous errors
        setSuccessMessage(null);
        setIsLoading(true);
    
        const { username, email, password } = formData;
    
        let newErrors = {};
        if (!username) {
          newErrors.username = 'UserName is required';
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (!password || password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters long';
        }
         if (password !== confirmPassword) {
           newErrors.confirmPassword = 'Passwords do not match';
         }
    
        setErrors(newErrors);
        if (Object.keys(newErrors).length !== 0) {
        setIsLoading(false)
        }
        if (Object.keys(newErrors).length === 0) {
    
        (async()=>{
            try { 
              const res = await axios.post('https://ecommbackend-f6t0.onrender.com/api/v1/user/register',formData)
              console.log("res : ",res.data)
              const data = await res.data;
              navigate('/login')
              if (res) {
               
                console.log(data)
                setSuccessMessage(data.message || 'User registred Successfully');
              } else {
                throw new Error('Failed to register user');
              }
            } catch (error) {
              console.log('this is the error',error)
              console.log(error.response.data.message)
              if(error.response.data.message==`User with this username already exists.`){
                newErrors.username = "User with this username already exists.";
              }
              if(error.response.data.message==`User with this email already exists.`){
                newErrors.email = "User with this email already exists.";
              }
              
            } finally {
              setIsLoading(false);
              setFormData({
                username: '',
                email: '',
                password: '',
              })
              setConfirmPassword('')
            }
          })()
        } 
      };



    return (
        <>
 
            <div className='row my-5 container-fluid '>





                <div className='col-md-6 col-12  px-3 d-flex justify-content-center align-items-center '>
                    <img className='logimg' src={loginimg} alt='a' />

                </div>
                <div className='col-md-6 px-3 col-12'>
                    <p className='fs-1 text-color'> <b>Register</b></p>
                    <p className='te'>JOIN TO US</p>

                    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
        className="form-control "
          type="text"
          name="username"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.username && <p className="error text-danger">{errors.username}</p>}
      </div>
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
      <div className="form-group">
        <label htmlFor="confirmpassword">Confrim Password</label>
        <input
        className="form-control "
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          value={confirmPassword}
          onChange={handlepassword}
          placeholder="Enter your password"
        />
        {errors.confirmPassword && <p className="error text-danger">{errors.confirmPassword}</p>}
      </div>
      
      
      <button type="submit" className='btn button-color my-4' disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Sign Up'}
      </button>
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
                    <div className='mt-4'>
                        <span className='te mt-3'>ALREDY USER ? <Link to={'/login'} className='text-color '>LOGIN</Link></span>
                    </div>



                </div>


            </div>


        </>
    )
}

export default Registration