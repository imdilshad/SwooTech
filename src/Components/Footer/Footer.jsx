import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";
import img from '../images/en.jpg'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div   className='  px-3 text-white py-4  container-fluid  d-flex justify-content-center align-item-center flex-column' style={{backgroundColor:'#37b60e'}}>

            <div className='row w-100'>

                <div className='col-md-3 '>
                    <h6>SWOO- 1ST NYC TECH ONLINE MARKET</h6>
                    <div className=' d-flex '>  HOTLINE 24/7</div>
                    <div className=' d-flex '> <h4>(025) 3686 26 16</h4></div>

                    <div className='my-4 '><p>257 ThatchervRoad St,Brooklyn,Manhattan,<br />
                        NY 1009<br />
                        contact@Swootechmart.com</p></div>
                    <div className='col-md-12  d-flex justify-content-between'>
                        <span className='fs-3'>
                            <FaTwitter />

                        </span>
                        <span className='fs-3' >
                            <FaFacebookF />

                        </span>
                        <span className='fs-3' >
                            <FaInstagram />

                        </span>
                        <span className='fs-3'>
                            <FaYoutube />

                        </span>
                        <span className='fs-3' >
                            <TbBrandPicsart />

                        </span>



                    </div>


                    <div>
                        <div className="my-5 d-flex  gap-3" >
                            <select className='nav-select  text-white' style={{backgroundColor:'#37b60e'}} name="currency" id="currency">
                                <option value="usd"> USD</option>
                                <option value="usd"> INR</option>
                                <option value="usd"> Euro</option>
                            </select><span> <img src={img} className='rounded-circle ' alt="a" height={18} /></span>
                            <select className='nav-select  text-white' style={{backgroundColor:'#37b60e'}} name="Language" id="Language">
                                <option value="usd"> ENG</option>
                                <option value="usd"> Hin</option>
                                <option value="usd"> Fran</option></select>
                        </div>
                    </div>




                </div>

                <div className='col-md-2 col-6 mb-5 '>
                    <h5> TOP CATEGORIES</h5>
                    <div className='fs-6' >
                        <p> Laptops</p>
                        <p> Pc & Computers</p>
                        <p> Cell Phones</p>
                        <p> Tablets</p>
                        <p> Gaming and vr</p>
                        <p> Networks</p>
                        <p> Cameras</p>
                        <p> Sounds</p>
                        <p>Office</p>        </div>    </div>
                <div className='col-md-2 col-6'>
                    <div className='fs-6' >   <h5>COMPANY</h5>
                        <p> About Swoo</p>
                        <p> Contact</p>
                        <p>  Career</p>
                        <p>Blog</p>
                        <p>Sitemap</p>
                        <p>Stor locations</p>  </div>
                </div>
                <div className='col-md-2 col-6'>
                    <h5> HELP CENTER</h5>
                    <div className='fs-6'>                <p>Customer Service</p>
                        <p> Policy</p>
                        <p> Terms & Conditions</p>
                        <p>  Trach Order</p>
                        <p>FAQs</p>
                        <p>My Account</p>
                        <p>Product Support</p></div>


                </div>
                <div className='col-md-2 col-6'>
                    <h5>PARTNER</h5>
                    <div className='fs-6'>

                        <p>Become Seller


                        </p><p> Affiliate</p>
                        <p>Advertise</p>
                        <p> Partnership</p> </div>



                </div>
            </div>
               <div className="row">
               <div className='col '>
                    <h4> subscribe & get<span className='text-danger'>10% off </span> for your first order</h4>
                </div>
               </div>
         














        </div >
    )
}

export default Footer