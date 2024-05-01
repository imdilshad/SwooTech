import React from 'react'
import './Homelast.css'
import i1 from '../images/Homelast/i1.jpeg'
import i2 from '../images/Homelast/i2.jpeg'
import i3 from '../images/Homelast/i3.jpeg'
import i4 from '../images/Homelast/i4.jpeg'
import i5 from '../images/Homelast/i5.jpeg'
import i6 from '../images/Homelast/i6.jpeg'
import i7 from '../images/Homelast/i7.jpeg'
import i8 from '../images/Homelast/i8.jpeg'
import a1 from '../images/Homelast/a1.jpeg'
import a2 from '../images/Homelast/a2.jpeg'
import a3 from '../images/Homelast/a3.jpeg'
import a4 from '../images/Homelast/a4.jpeg'
import { LuSend } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";





export const Homelast = () => {
    return (
        < div className='container-fluid'>

            <div className='row d-flex justify-content-evenly  gap-5 '>
                <div className='col-md-5  row backgroundforhomelast'>
                    <p className='fs-2 col-6'><span className='text'>Bedroom</span> Essentials


                    </p>
                    <span className='te fs-4 d-flex justify-content-end col-6 '> view all</span>

                    <div className='row d-flex justify-content-center mb-3'>
                        <div className='col-3'>

                            <img className='mixhomelast' src={i1} alt='a' />
                            <b>Beach & Water</b>

                        </div>
                        <div className='col-3'>

                            <img className='mixhomelast' src={i2} alt='a' />
                            <b>Trampolines</b>

                        </div>
                        <div className='col-3'>

                            <img className='mixhomelast' src={i3} alt='a' />
                            <b>Ride ons</b>

                        </div>
                        <div className='col-3'>

                            <img className='mixhomelast' src={i4} alt='a' />
                            <b>Outdoor Games</b>

                        </div>
                    </div>
                    <div className='row  mb-4 d-flex justify-content-evenly '>

                        <div className='col-5 backforhomelast'>
                            <b className='text-light fs-2'><b>OKO</b> Beeze
                                Baby Carrier</b>

                            <b className='text-light fs-3'>price
                                just <span className='fs-1'> $169</span></b>
                        </div>

                        <div className='col-5 backforhomelast2'>
                            <b className='text-light fs-3 d-flex justify-content-end'>Kindergo
                                Uniq Balance
                                Bike</b>
                            <a href='google.com' className='text-light  '>SHOP NOW</a>

                        </div>



                    </div>




                </div>


                <div className='col-md-5 row background'>
                    <p className='fs-2 col-6'><span className='text'>Feeding </span> Essentials


                    </p>
                    <span className='te fs-4 d-flex justify-content-end col-6 '> view all</span>

                    <div className='row text-center '>
                        <div className='col-3'>

                            <img className='image-control' src={i5} alt='a' />
                            <b>samsung folding </b>

                        </div>
                        <div className='col-3'>

                            <img className='image-control' src={i6} alt='a' />
                            <b>iphone</b>

                        </div>
                        <div className='col-3'>

                            <img className='image-control' src={i7} alt='a' />
                            <b>honor</b>

                        </div>
                        <div className='col-3'>

                            <img className='image-control' src={i8} alt='a' />
                            <b>vivo</b>

                        </div>
                    </div>
                    <div className='row  mb-4 d-flex justify-content-evenly'>

                        <div className='col-md-5 backforhomelast3'>



                            <p className='text-light fs-2 d-flex justify-content-end'>Baby High<br />
                                Chair</p>


                        </div>

                        <div className='col-5 backforhomelast4'>
                            <p className='text-light fs-3 '><b>    MEALTIME </b>essentials</p>

                        </div>



                    </div>




                </div>




            </div>



            <div className='row d-flex justify-content-evenly ' >
                <p className='fs-2'><span className='text'>What’s New</span> Today</p>

                <div className='col-md-4 backforhomelast3'>
                    <p className='text-light fs-4'>Babies in Winter: How to protect your
                        newborn in cold weather</p>

                    <p className='text-light mt-5'>45 Minutes ago in Experience</p>

                </div>


                <div className='col-md-4 row'>
                    <img className='col-md-6 im' src={a1} alt='a' style={{borderRadius:20}} />
                    <p className='col-md-6 text-center '><b> Omicron in Kids: Here’s
                        what parents should know
                    </b>
                        <p className='row mt-3'>45 Minutes ago in Experience</p>
                    </p>

                    <hr />
                    <div className='row '>
                        <img className='col-md-6 im' src={a2} alt='a' />
                        <p className='col-md-6'><b>Fun facts about ios
                        </b>
                            <p className='row mt-3'>1 Day ago in Life Style</p>
                        </p>

                    </div>

                </div>
                <div className='col-md-4 row'>
                    <img className='col-6 im' src={a3} alt='a' />
                    <p className='col-md-6 text-center '><b> Insight into dadliness
                    </b>
                        <p className='row mt-3 mb-5'>2 Days ago in inventory</p>
                    </p>

                    <hr />
                    <div className='row '>
                        <img className='col-md-6 im' src={a4} alt='a' />
                        <p className='col-md-6'><b>best technology product
                        </b>
                            <p className='row mt-3'>2 Days ago in Stock</p>
                        </p>

                    </div>

                </div>









            </div>


            <div className='row   btn-color  rounded-4 d-md-block d-none my-4 '>
             <p className='fs-4 d-flex justify-content-evenly align-items-center'> 
             
             
             <span className='pt-2'>  <LuSend  /></span>


<span className="pt-2">Free Shipping over $99</span>
<span className="pt-2">30 Days money back</span>

<span className="pt-2">100% Authentic Products</span>
<span className="pt-2"><IoWalletOutline/></span>
<span className="pt-2">Flexiable payment options</span>
             </p>
            </div>



        </ div>
    )
}
