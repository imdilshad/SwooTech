import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbBorderRadius, TbBrandPicsart } from "react-icons/tb";

import { Button } from 'react-bootstrap'
import img from '../images/imgg.png'
import Map from './Map';

const Contact = () => {


  return (
    <>

      <div className='row container-fluid'>
        <div className='col-md-8 mx-3 px-3'>
          <div>  <h2>Redy to work with us</h2></div>
          <form>
            <div class=" row mb-3 d-flex " >
              <div className='col-md-6'>

                <label for="exampleInputEmail1" class="form-label">First Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='Mark' />
              </div>
              <div className='col-md-6 '>
                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='cole' />


              </div>
              <div className='my-3 '>
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='swoo@gmail.com' /></div>
              <div className='my-3 '>
                <label for="exampleInputEmail1" class="form-label">Phone numbe <span className='te'>(optional)</span></label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder='+1 0231 4554 452' /></div>
              <div className='my-2'>
                <select class="form-select" aria-label="Default select example">
                  <option selected>India</option>
                  <option value="1">Usa</option>
                  <option value="2">englend</option>
                  <option value="3">france</option>
                </select>
              </div>
              <div className='my-3 '>
                <label for="exampleInputEmail1" class="form-label">Subject <span className='te'>(optional)</span></label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                /></div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                  placeholder='Note about your order, e.g. special note for delivery '></textarea>
              </div>

              <div class="form-check mx-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  I want to receive news and updates once in a while. By submitting, I’m agreed to the Terms & Conditons
                </label>
              </div>

              <div className='my-4'>
                <button className='button-color btn  btn-sm' style={{fontSize:'12px'}}> <span className='font'>SEND MESSAGE</span> </button>
              </div>
            </div>

          </form>


        </div>

        <div className='col-md-3 mx-3 my-3 d-flex flex-column align-item-center justify-content-start bg-warning rounded  '>

          <div className='my-4   '>
            <p className=' px-3 '>united states (head quater)</p>
            <p className='px-3'>152 Thatcher Road St, Mahattan, 10463, US
              (+025) 3886 25 16<br />
              <a href='google.com'>hello@swattechmart.com</a></p>


            <p className='my-4  ms-3 '>united kingdom (branch)</p>

            <p className='ms-3'>12 Buckingham Rd, Thornthwaite, HG3 4TY, UK
              (+718) 895-5350<br />
              <a href='google.com'>contact@swattechmart.co.uk </a></p>

            <div className='col-12 gap-2 px-3  d-flex align-item-center justify-content-between ' >
              <span className=' mb-3'>
                <FaTwitter />

              </span>
              <span className='' >
                <FaFacebookF />

              </span>
              <span className='' >
                <FaInstagram />

              </span>
              <span className=''>
                <FaYoutube />

              </span>
              <span className='' >
                <TbBrandPicsart />

              </span>

            </div>
          </div>

          <div className='col-md-12 '>
            <img className='w-100 rounded' src={img} alt='a'  />
          </div>


        </div>


      </div>
      <div>

        <Map /></div>



    </>
  )
}

export default Contact