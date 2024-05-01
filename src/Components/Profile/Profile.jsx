import React from 'react'
import avatar from '../images/profile.png'
import { Button } from 'react-bootstrap'
import './Profile.css'
import { useEffect } from 'react'
import GetData from '../Login/Login'
import axios from 'axios'
import {useSelector} from 'react-redux'

const Profile = () => {
  const userData=useSelector((state)=>state.User)
 
  const  [User] =userData
  console.log(User)
  return (
    <>
    <div className='row my-2 container-fluid
     px-3  '>

<div className='col-md-3 col-12  '>
 <div className='d-flex justify-content-center my-4 '> 
   <img className=' rounded-3'  src={avatar} alt='a' />
</div>

   <div className='my-2 '><span className='fw-bold text-Black'> {User?.username} </span>
   </div>
   <div className='text-white'>swoo@gmail.com</div>
   
<div  className=''>
<div className='my-4 d-flex flex-wrap'>
   <button className=' me-1 mb-1 fs-6  btn button-color' >Account info</button>
    <button className='me-1 mb-1 fs-6  btn button-color'>My order</button>
   <button className=' me-1 mb-1 fs-6  btn button-color'>My address</button>
  <button className='fs-6 btn button-color'  >change password</button> 
  </div>
  </div>
</div>

<div className='col-md-8 col-12 px-3' >
    <div><h2><b>Account info</b></h2></div>


<div>

<form>
  <div className=" row mb-3 d-flex " >
    <div className='col-6'>
    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
    <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder={User?.username}/>
    </div>
 <div className='col-6'>
 <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
    <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder=''/>
    

 </div>
 <div className='my-3 '>
 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder={User?.email}/></div>
    <div className='my-3 '>
 <label htmlFor="exampleInputEmail1" className="form-label">Phone numbe <span className='te'>(optional)</span></label>
    <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder='+91 0231 4554 452'/></div>

    <div>
        <button className='button-color btn'> Save</button>
    </div>
 
 
  </div>
 
</form>


</div>



</div>


    </div>
    
    
    
    </>
  )
}

export default Profile