// import  {React,useState} from 'react'
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {useSelector} from 'react-redux'



// function CreateProduct() {
//   const [isLogged,setIsLogged]=useState(false)
//   const [category,setCategory]=useState([])
//   const userData=useSelector((state)=>state.User)
//   const  [User] =userData
//   const navigate=useNavigate()

//   const handleCategory= async()=>{
//     try {
//       let response=(await axios.get('/api/v1/category/?page=1&limit=10')).data
//       setCategory(response?.data?.categories)
//       console.log(category)
//     } catch (error) {
//       console.log('this is the error',error.response.data.message)
//     }
//     }
// useEffect(()=>{
//   if(User?.role=='ADMIN'){
//     setIsLogged(true)
//     handleCategory()
//   }
//   else{
//     navigate('/login')
//   }
// },[])

// const [name, setName] = useState('');
// const [description, setDescription] = useState('');
// const [stock, setStock] = useState(0);
// const [price, setPrice] = useState(0);
// const [mainImage, setMainImage] = useState(null);


// const handleChange = (e) => {
//   const selectedFile = e.target.files[0];
//   setMainImage(selectedFile);
// };

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(null);

//   // const handleChange = (event) => {
//   //   const { name, value, files } = event.target;
//   //   setFormDaata((prevData) => ({
//   //     ...prevData,
//   //     [name]: files ? files[0] : value, // Handle file uploads and other input types
//   //   }));
//   // };

  
//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     setErrors({}); // Clear previous errors
//     setSuccessMessage(null);
//     setIsLoading(true);
    
//     const { email, password } = formData;
    
//     let newErrors = {};
    
    
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length !== 0) {
//       setIsLoading(false)
//     }
//     if (Object.keys(newErrors).length === 0) {
      
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('category', category);
//       formData.append('description', description);
//       formData.append('stock', stock);
//       formData.append('price', price);
//       formData.append('mainImage', mainImage);
//       console.log(formData)

  
    
//         try { 
//           const res = await axios.post('/api/v1/product/',formData)
//           console.log("res : ",res.data)
//           const data = await res.data;
//           if (res) {
//             console.log(data)
//             setSuccessMessage(data.message || 'Product Uploaded successfully');
//           } else {
//             throw new Error('Failed to upload');
//           }
//           if(data.message=='User logged in Successfully'){
//          navigate('admin')
//           }
//         } catch (error) {
//           console.log('this is the error',error)
//           console.log('this is the error',error.response.data.message)
//           if(error.response.data.message==`User with this email doesn't exits.`){
//             newErrors.email = "User with this email doesn't exits.";
//           }
//           if(error.response.data.message==`Invalid user password!!!`){
//             newErrors.password = "Please Enter Correct Password.";
//           }
//           setErrors(newErrors)
          
//         } finally {
            
//           setIsLoading(false);

         
//         }
      
//     } 
//   };
//   return (
//     <div className='container-fluid py-3'>
//       <form className="row g-3  px-4" onSubmit={handleSubmit}>
//   <div className="col-md-6">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" 
//     className="form-control  "
//      id="name"
//      name='name'
//      onChange={handleChange}
     
//      />
//   </div>
//   <div className="col-md-6">
//     <label htmlFor="description" className="form-label">Description</label>
//     <input type="text" 
//     className="form-control "
//      id="description"
//      name='description'
//      onChange={handleChange}
     
//      />
//   </div>
 
//   <div className="col-4">
//     <label htmlFor="category" className="form-label">Category</label>
//     <input type="text"
//      className="form-control "
//       id="category"
//        placeholder="category"
//        onChange={handleChange}
//        name='category'
       
//        />
//        {/* <select className="form-select" name='category' value={formData.category} onChange={handleChange} aria-label="Default select example">
//   {category.map((cate)=>{
//     return(
//       <option value={cate._id}
//        key={cate._id}
//        onChange={handleChange}
//        >{cate.name}
      
//       </option>
//     )
//   })}
  
  
// </select> */}
//   </div>
//   <div className="col-4">
//     <label htmlFor="price" className="form-label">Price</label>
//     <input type="Number" 
//     className="form-control "
//      id="price" 
//      placeholder="Price"
//      onChange={handleChange}
//      name='price'
     
//      />
//   </div>
//   <div className="col-4">
//     <label htmlFor="stock" className="form-label">Stock</label>
//     <input type="number"
//      className="form-control "
//       id="stock"
//       onChange={handleChange}
      
//       name='stock'
//       />
//   </div>
//   <div className="col-md-4">
//     <label htmlFor="mainImage" className="form-label">Main Image</label>
//     <input type="file"
//      className="form-control "
//       id="mainImage"
//       name='mainImage'
//       accept="image/*"
//       // value={formData.mainImage}
//       onChange={handleChange}
//       />
//   </div>
//   {/* <div className="col-md-2">
//     <label htmlFor="subImage" className="form-label">Sub Images</label>
//     <input type="file"
//      className="form-control "
//       id="subImage"
//       name='subImage'
//       onChange={handleChange}
//       // value={formData.subImage}
//       />
//   </div> */}
//   <div className="col-12">
//   <button type="submit" className='btn button-color fw-semibold my-4' disabled={isLoading}>
//         {isLoading ? 'Loading...' : 'Upload'}
//       </button>
//   </div>
// </form>
//     </div>
//   )
// }

// export default CreateProduct

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const createProduct = () => {

  const handleCategory= async()=>{
         try {
           let response=(await axios.get('/api/v1/category/?page=1&limit=10')).data
           console.log(response?.data?.categories)
           
         } catch (error) {
           console.log('this is the error',error.response.data.message)
         }
         }
useEffect(()=>{
handleCategory();
},[])
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [mainImage, setMainImage] = useState(null);
  const [subImages, setSubImages] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setMainImage(selectedFile);
  };

  const handleSubImagesChange = (e) => {
    const files = e.target.files;
    setSubImages([...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('stock', stock);
    formData.append('price', price);
    formData.append('mainImage', mainImage);

    // subImages.forEach((image, index) => {
    //   formData.append(`subImages[${index}]`, image);
    // });

    try {
      const response = await axios.post('/api/v1/product/', formData, {
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      });
      console.log('Upload successful:', response.data);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error('Error uploading data:', error);
      console.log(error.response.data.message)

      // Handle error, e.g., show an error message to the user
    }
  };

  return (
   <div className="container-fluid py-3">
     <form onSubmit={handleSubmit} className='row'>
     <div className="col-md-6">
     <label htmlFor="name" className="form-label">Name</label>
      <input className='form-control' type="text" placeholder="Name" id='name' value={name} onChange={(e) => setName(e.target.value)} />
     </div>
     <div className="col-md-6">
     <label htmlFor="description" className="form-label">Description</label>
     <input className='form-control' type="text" placeholder="Description" id='decription' value={description} onChange={(e) => setDescription(e.target.value)} />
     </div>
     <div className="col-4">
     <label htmlFor="category" className="form-label">category</label>
     <input className='form-control' type="text" placeholder="Category" id='category' value={category} onChange={(e) => setCategory(e.target.value)} />
     </div>
     <div className="col-4">
     <label htmlFor="stock" className="form-label">stock</label>
     <input className='form-control' type="number" placeholder="Stock" id='stock' value={stock} onChange={(e) => setStock(parseInt(e.target.value))} />
     </div>
     <div className="col-4">
     <label htmlFor="price" className="form-label">Price</label>
     <input className='form-control' type="number" placeholder="Price" id='price' value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
     </div>
      
      <div className="col-md-4">
      <label htmlFor="mainImage" className="form-label">Main Image</label>
      <input className='form-control' type="file" accept="image/*"id='mainImage' onChange={handleFileChange} />
      </div>
      
      
      
      {/* <input type="file" accept="image/*" multiple onChange={handleSubImagesChange} /> */}
   <div className="col-12 my-2">
   <button type="submit" className='adminTable rounded px-3 py-2'>Upload</button>
   </div>
    </form>
   </div>
  );
};

export default createProduct;
