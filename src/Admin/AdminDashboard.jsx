import React from 'react'
import { NavLink } from 'react-router-dom'


function AdminDashboard() {
  return (
    <div  className='container-fluid text-center'>
      <h2>Admin DashBoard</h2>
      <div className='text-start'>
        <span className='fw-bold '>Orders</span>
        <div  className='w-100   my-3'>
          <div className='justify-item justify-content-between w-100 px-3'>
            <th>Name</th>
            <th>Price</th>
            <th>CategoryId</th>
            <th>Order Date</th>
          </div>
          <tr className='adminTable my-2 p-2 justify-item justify-content-between text-white w-100 rounded '>
            <td>Samsung</td>
            <td>12000</td>
            <td>6657232983691</td>
            <td>4/05/2024</td>
          </tr>
          <tr className='adminTable my-2 p-2 justify-item justify-content-between text-white w-100 '>
            <td>Samsung</td>
            <td>12000</td>
            <td>6657232983691</td>
            <td>4/05/2024</td>
          </tr>
          <tr className='adminTable my-2 p-2 justify-item justify-content-between text-white w-100 '>
            <td>Samsung</td>
            <td>12000</td>
            <td>6657232983691</td>
            <td>4/05/2024</td>
          </tr>
          
        </div>
      </div>
      <div className='w-100 py-2 rounded my-2 justify-item justify-content-evenly  border'>
       <NavLink to={'/adminDashboard/products'}><button className='px-3 py-2 rounded adminTable text-white'>Product</button></NavLink>
       <NavLink><button className='px-3 py-2 rounded adminTable text-white'>Categories</button></NavLink>
      </div>
    </div>
  )
}

export default AdminDashboard
