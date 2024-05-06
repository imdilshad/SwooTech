import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom'

function AllProducts() {  
  const[products,setProducts]=useState([])
    
    useEffect(()=>{
       const fetch= async()=>{
        try {
            let response=await axios.get('/api/v1/product/?page=1&limit=10').then(res=>res.data)
            
             setProducts(response.data.products)
             
            } catch (error) {
                console.log('this is error',error)
            }
        }
        fetch()
    } ,[])
   const handleDelete=async(productId)=>{
     try {
      let response=await axios.delete(`/api/v1/product/${productId}`).then(res=>res.data)
      console.log(response)
     } catch (error) {
      console.log(error.response.data.message)
     }
    }
    console.log(products)
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-between px-3 my-2'>
      <span className='fw-bold fs-3'>All products</span>
      <NavLink to={'/adminDashboard/products/createProduct'}><button className='px-3 py-2 rounded adminTable text-white'>Create Product</button></NavLink>
      </div>
      <div  className='w-100   my-3'>
          <div className='justify-item justify-content-between w-100 px-3'>
            <span>Name</span>
            <span>Price</span>
            <span>CategoryId</span>
            <span>Description</span>
            <span>mainImage</span>
            <span>Status</span>
          </div>
          {products.map((product)=>{
            return (
              <div className='adminTable my-2 p-2 justify-item justify-content-between text-white w-100 rounded ' key={product._id}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>{product.category}</span>
            <span>{product.description}</span>
            <span className=''><img src={product.mainImage.url} className='' height={40} alt="" /></span>
            <button className='btn-warning btn text-light' onClick={()=>{
              handleDelete(product._id)
            }}>Delete</button>
          </div>
            )
          })}
    </div>
    </div>
  )
}

export default AllProducts
