import { useState } from "react";
import img1 from "../Cart/cart1.png";
import img2 from "../Cart/cart2.png";
import img3 from "../Cart/cart3.png";
import Symbol from "../Cart/Symbol.png";
import "./Cart.css";
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { removeCart } from "../../Store/CartSlice";


export default function AppCart() {
  const [quantity, setQuantity] = useState(1);
  const dispatch=useDispatch()
  const handleRemove=(productId)=>{
    dispatch(removeCart(productId))
   }
  const products=useSelector((state)=>state.Cart)
  return (
    <>
      <div className="row container-fluid">
  
      <div className='container-fluid  text-white col-md-8   py-4'>
      <h1 className='mb-md-3 text-dark'>Shopping Cart</h1>
      <div className="row gap-1 d-md-flex justify-content-evenly px-2 " >
        {products.map(product=>{
           return <div className="col-md-5 mb-3 text-white  rounded py-3 px-3" style={{border:'1px solid #37b60e'}} key={product._id} >
           <div className='d-flex justify-content-between'>
             <h5>orders</h5>
             <button className='text-black btn' onClick={()=>{
              dispatch(removeCart(product._id))}}>
            <i className="fa-solid fa-xmark"></i>
            </button>
           </div>
           <div className='d-flex '>
             <div className="col-5"><img src={product.mainImage.url} className='rounded w-100 mb-2 cart-image' alt="" /></div>
             <div className="col-7   px-3">
               <div className='w-100 mb-3 text-start'>
               {/* <h5 className=''>Steel Dumble</h5> */}
               <h4 className=' w-100 checkout text-black' >{product.name}</h4>
               </div>
              <div className='d-flex flex-column justify-content-start align-items-start'>
              <div className='d-flex justify-content-between px-2 w-100 text-black'>
                 <span >
                   Items price:
                 </span>
                 <span className='text-end'>
                 ₹ {product.price}
                 </span>
               </div>
               <div className='d-flex  border my-2'  key={product._id}>
               <button className='border px-2 fa-solid fa-minus' onClick={()=>{
                 if(quantity>1){
                  setQuantity(quantity-1)
                }
                }}></button>
                 <button className='border px-2'>{quantity}</button>
                <button className='border px-2 fa-solid fa-plus' onClick={()=>{
                 setQuantity(quantity+1)
                }}>
                </button>
                
               </div>
              </div>
             </div>
           </div>
         </div>
        })}
      </div>
    </div>
    

        <div className="row mb-3  col-md-4 border border-2 border-success rounded justify-item  contaiber-fluid ">
         <div className="container justify-item flex-column text-start  gap-5">
          <h6 className="text-start w-100">Order Summary</h6>
          <div className="px-3 d-flex justify-content-between text-start w-100 align-item-center">
            <span className="text-secondary">Sub Total:</span>
            <span>$1002</span>
          </div>
          <div className="px-3 d-flex justify-content-between text-start w-100 align-item-center">
            <span className="text-secondary">Shopping Estimate:</span>
            <span>$1002</span>
          </div>
          <div className="px-3 d-flex justify-content-between text-start w-100 align-item-center">
            <span className="text-secondary">tax Estimate:</span>
            <span>$1002</span>
          </div>
          <div className="px-3 d-flex justify-content-between text-start w-100 align-item-center">
            <span className="fw-bold">Order Total</span>
            <span>$1002</span>
          </div>
         </div>
        
          
          
        </div>
      </div>
    </>
  );
}
