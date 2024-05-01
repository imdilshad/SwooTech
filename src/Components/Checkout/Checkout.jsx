import React from 'react'
import { Button } from 'react-bootstrap'
import black from '../images/Black_colour.jpg'
import lap from '../images/lap.png'
import paypal from '../images/pp.png'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='ccontainer-fluid'> 
      <div className='my-4 ms-3'>
        <b >CHECKOUT</b>
      </div>
      <div className='row px-2'>
        <div className='col-md-7  '>
          <p className='ms-3'>  Returning customer? <a className='text-danger' href='google.com'>Click here to log in</a></p>
        </div>
        <div className='col-md-4'>
          <p className='ms-3'> Have a coupon?<a className='text-danger' href='google.com'> Click here to enter your code</a></p>
        </div>


        <div><b className='my-3 ms-3'>billing date</b></div>


       <div className="row">
       <div className='col-md-7  col-12 px-4'>
          <form>
            <div class=" row mb-3 d-flex " >
              <div className='col-md-6'>

                <label for="exampleInputEmail1" class="form-label">First Name</label>
                <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='Mark' />
              </div>
              <div className='col-md-6 '>
                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='cole' />


              </div>
              <div className='my-3 '>
                <label for="exampleInputEmail1" class="form-label">Company Name<span className='te'>(optional)</span></label>
                <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='swoo@gmail.com' /></div>


              <div className='my-2'>
                <label>Country / Region *</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>India</option>
                  <option value="1">Usa</option>
                  <option value="2">englend</option>
                  <option value="3">france</option>
                </select>
              </div>

              <div className='my-3 '>
                <label for="exampleInputEmail1" class="form-label">Street address </label>
                <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='House number and street name ...' />
                <input type="text" class="my-2 form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='Apartment, suite, unit, etc (Optional)' /></div>

              <div className='my-3 '>
                <label for="exampleInputEmail1" class="form-label">Town/city</label>
                <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                /></div>

              <div className='my-2'>
                <label>State / County  *</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>delhi</option>
                  <option value="1">jaipur</option>
                  <option value="2">noida</option>
                  <option value="3">mumbai</option>
                </select>
              </div>

              <div className='my-3 '>
                <label for="exampleInputEmail1" class="form-label">Zip code * </label>
                <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='+1 0231 4554 452' /></div>

              <div className='my-3 '>
                <label for="exampleInputEmail1" class="form-label">Phone number <span className='te'>(optional)</span></label>
                <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                /></div>
              <div className='my-3 '>
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                /></div>



              <div class="form-check mx-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Create an account
                </label>
              </div>
              <div className='mx-2 my-3'>
                <b>Additional information</b><br />
                <label>Order notes  <span className='te'>(optional)</span></label>
                <textarea class="form-control " id="exampleFormControlTextarea1" rows="3"
                  placeholder='Note about your order, e.g. special note for delivery '></textarea>

              </div>

              <div className='my-4'>
                <button className='fs-6 text-white btn'>SEND MESSAGE </button>
              </div>


            </div>

          </form>
        </div>


        <div className='col-md-4 col-12 px-4 d-flex align-items-end'>

        
          <div className='row my-4  '>

            <div className='row d-flex justify-content-center '>
              <div className='col-6 '>
                Product
              </div>
              <div className='col-6 d-flex justify-content-end '>
                SUB TOTAL
              </div>
              <hr />
              <div className='col-12'>
                <img src={lap} alt='a' height={80} width={80}
                />
                <span> <b>Pinnaeple Macbook Pro 2022
                  M1/ 512GB </b></span>
              </div>
              <div className='col-8 my-3'>
                <p>Worldwide Standard Shipping Free</p>
              </div>
              <div className='col-4 my-3 d-flex justify-content-end'>
                <b className='text-danger'>+ $9.50</b>
              </div>
              <hr />
              <div className='col-8'>
                <b>order Total</b>
              </div>
              <div className='col-4 d-flex justify-content-end'>
                <b className='text-success'>$1,746.50</b>
              </div>

            </div>

            <div className='col-12 my-3 d-flex flex-column'>
              <b>Direct Bank Transfer</b>
              <p className=''>Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped
                until the funds have cleared in our account.</p>

              <div className='align-item'>
              <input class="form-check-input m-0" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                <b className='ms-2'>Cash on delivery</b>
              </label>

              </div>

               <div className='align-item'>
               <input class="form-check-input m-0" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  <b className='ms-2'>paypal </b><a href='google.com'>What’s Paypal?   </a>

                </label>
               </div>
              <div className=''>

                <button className='btn my-3 text-white'>PLACE ORDER</button>
              </div>
              

            </div>




          </div>



        </div>
       </div>


      </div>





    </div>
  )
}

export default Checkout