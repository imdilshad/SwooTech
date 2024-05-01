import React from 'react'
import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import grey from '../images/grey.webp'
import laptop from '../images/3 → prod8.jpg.png'
import side1 from '../images/3 → prod10.jpg.png'
import side2 from '../images/3 → prod9.jpg.png'
import greentick from '../images/greentick.webp'
import { FaHeart, FaTruckPickup } from 'react-icons/fa'
import pay from '../images/pay.png.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";
import brand from '../images/brand6.png.png'
import './Com.css'
const Topcell = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <Container fluid>

            <div className='row'>

                <div className='col-md-4'>
                    <div className=' row my-3'>
                        <div className='col-md-3'>
                            <Button className='  bg-dark'> new</Button></div>

                        <div className='col-md-9 d-flex justify-content-end'>
                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>



                    </div>



                    <div className='col-md-12 d-flex justify-content-center'>
                        <img className='image-topcell'  src={laptop} alt='a' />
                    </div>
                    <div className='row  '>
                        <div className=' w-25 col-md-3'>
                            <img src={laptop} alt='a' height={60} width={60} />
                        </div>
                        <div className='w-25 col-md-3'>
                            <img src={side1} alt='a' height={60} width={60} />
                        </div>
                        <div className='w-25 col-md-3'>
                            <img src={side2} alt='a' height={60} width={60} />
                        </div>

                    </div>


                </div>

                <div className='col-md-4 '>
                    <p className='te mt-3 d-flex justify-content-center'>(5)</p>
                    <b>Pinnapple Macbook Pro 2022 M1 / 512GB
                        Dark Grey</b>
                    <h2 className='mt-3'>$579.00</h2>


                    <ul>

                        <li className='te'> Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                        <li className='te'> DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                        <li className='te'> Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                        <div className='my-3'>
                            <b className='text-success  bgg '>FREE SHIPPING</b></div>
                        <hr />


                    </ul>

                    <div className='ms-5'>
                        <p className=' d-flex gap-4'> <img src={greentick} alt='a' height={25} width={25} />         in stock</p>
                    </div>

                    <div className='ms-5'>
                        <b>qty</b>



                    </div>


                    <div className='row ms-4 my-3 gap-4'>

                        <div className='col-md-3 d-flex justify-content-center gap-4 bgg'>
                            <button className='bordernone ' onClick={decrement}> <b>- </b></button>

                            <b className='d-flex align-items-center'>  {count} </b>
                            <button className='bordernone ' onClick={increment}><b> + </b></button>
                        </div>
                        <div className='col-md-3'>
                            <Button className='bg-success row'>ADD TO CART</Button>
                        </div>
                        <div className='col-md-3  d-flex  align-items-center justify-content-center  '>

                            <FaHeart className='heart' />

                        </div>



                    </div>


                    <p className='ms-3'> Guaranteed Safe Checkout</p>
                    <img className='ms-3' src={pay} alt='a' />

                    <hr />

                    <div className='my-5' >
                        <p><b>SKU: </b> ABC025168</p>
                        <p><b>Category: </b> Cell Phones & Tablets</p>
                        <p><b>Tags: </b> Laptop, Macbook, Computer, M1</p>


                    </div>

                    <div className='col-md-12 gap-2 mt-5 d-flex'>
                        <span className='back d-flex align-items-center justify-content-center'>
                            <FaTwitter />

                        </span>
                        <span className='back d-flex align-items-center justify-content-center' >
                            <FaFacebookF />

                        </span>
                        <span className='back d-flex align-items-center justify-content-center' >
                            <FaInstagram />

                        </span>
                        <span className='back d-flex align-items-center justify-content-center'>
                            <FaYoutube />

                        </span>
                        <span className='back d-flex align-items-center justify-content-center' >
                            <TbBrandPicsart />

                        </span>



                    </div>



                </div>


                <div className='col-md-3 '>

                    <div className='row mt-4 '>

                        <div className='col-md-12 h-100  bgg'>
                            <div>
                                <p className='te my-3 ms-3 '>Brand: <b>Sonex</b></p>
                            </div>
                            <div className='d-flex justify-content-center mb-5'>
                                <img className='image3' src={brand} alt='a' /></div>
                        </div>
                    </div>

                    <div className='row mt-3 bd'>
                        <h3>Your Cart</h3>

                        <div className='col-md-4'>
                            <img className='d-flex align-items-center justify-content-center' src={laptop} alt='a' height={100} width={100} />
                        </div>
                        <div className='col-md-7'>
                            <b>Pinnaeple Macbook
                                Pro 2022 M1/ 512GB</b>
                            <p className='te'>3 x $579.00</p>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-md-6'>
                                <p className='te'> Sub total:</p>
                            </div>
                            <div className='col-md-6 d-flex justify-content-end'>
                                <b>$1,737.00</b>
                            </div>


                        </div>
                        <hr />
                        <div className='row gap-3 mb-3'>


                            <div className='col-md-6 row ms-2'>
                                <Button className='bg-dark'>VIEW CART</Button>
                            </div>
                            <div className='col-md-6 row'>
                                <Button className='bg-success '>CHECKOUT</Button>
                            </div>


                        </div>









                    </div>

                    <div className='row  d-flex gap-2 mt-3' >

                        <span>
                            <FaTruckPickup />
                            _Ships from <b> United States</b>
                        </span>




                    </div>





                </div>






            </div>













        </Container>
    )
}

export default Topcell