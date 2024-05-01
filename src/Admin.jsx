import  {React,useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'



function Admin() {
  const [isLogged,setIsLogged]=useState(false)
  const userData=useSelector((state)=>state.User)
  const  [User] =userData
  const navigate=useNavigate()
useEffect(()=>{
  if(User?.role=='ADMIN'){
    setIsLogged(true)
  }
  else{
    navigate('/login')
  }
},[])

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    mainImage: '',
    subImages: '',
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
   

    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) {
    setIsLoading(false)
    }
    if (Object.keys(newErrors).length === 0) {

    (async()=>{
        try { 
          const res = await axios.post('/api/v1/product/',formData)
          console.log("res : ",res.data)
          const data = await res.data;
          if (res) {
            console.log(data)
            setSuccessMessage(data.message || 'Product Uploaded successfully');
          } else {
            throw new Error('Failed to upload');
          }
          if(data.message=='User logged in Successfully'){
         navigate('admin')
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
    <div className='container-fluid py-3'>
      <form className="row g-3  px-4" onSubmit={handleSubmit}>
  <div className="col-md-6">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" 
    className="form-control  "
     id="name"
     name='name'
     onChange={handleChange}
     value={formData.name}
     />
  </div>
  <div className="col-md-6">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" 
    className="form-control "
     id="description"
     name='description'
     onChange={handleChange}
     value={formData.description}
     />
  </div>
 
  <div className="col-4">
    <label htmlFor="category" className="form-label">Category</label>
    <input type="text"
     className="form-control "
      id="category"
       placeholder="category"
       onChange={handleChange}
       name='category'
       value={formData.category}
       />
  </div>
  <div className="col-4">
    <label htmlFor="price" className="form-label">Price</label>
    <input type="Number" 
    className="form-control "
     id="price" 
     placeholder="Price"
     onChange={handleChange}
     name='price'
     value={formData.price}
     />
  </div>
  <div className="col-4">
    <label htmlFor="stock" className="form-label">Stock</label>
    <input type="number"
     className="form-control "
      id="stock"
      onChange={handleChange}
      value={formData.stock}
      name='stock'
      />
  </div>
  <div className="col-md-4">
    <label htmlFor="mainImage" className="form-label">Main Image</label>
    <input type="file"
     className="form-control "
      id="mainImage"
      name='mainImage'
      value={formData.mainImage}
      onChange={handleChange}
      />
  </div>
  <div className="col-md-2">
    <label htmlFor="subImage" className="form-label">Sub Images</label>
    <input type="file"
     className="form-control "
      id="subImage"
      name='subImage'
      onChange={handleChange}
      value={formData.subImage}
      />
  </div>
  <div className="col-12">
    <button type="submit" className="btn button-color fw-semibold">upload</button>
  </div>
</form>
    </div>
  )
}

export default Admin
