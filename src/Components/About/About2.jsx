import React from 'react'
import { Card, Container } from 'react-bootstrap'

import salesman_avatar from '../images/z.jpg'
import '../../App.css'
import green from '../images/green.png'

function About2() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row py-3 px-3  '>

                    <div className='col-md-3  py-2 px-0 col-12 '>
                        <img className='w-100' src={salesman_avatar} alt='a' />
                    </div>
                    <div className='col-md-8 mx-md-3  col-12 py-3 my-2  about-salesman ' >
                        <div className='d-flex align-item-center flex-column justify-content-center h-100'>
                            <div className='row-4   '>

                                <b   >We connect millions of buyers and sellers around
                                    the world, empowering people & creating economic
                                    opportunity for all.</b></div>
                            <p className='mt-4' >Within our markets, millions of people around the world connect,
                                both online and offline, to make, sell and buy unique goods. We also
                                offer a wide range of Seller Services and tools that help creative
                                entrepreneurs start, manage & scale their businesses.</p>
                            <button className='button-color btn  mt-4 ' style={{ fontSize: '15px', width: '13.5vh' }}> our showreel</button>

                        </div>
                    </div>


                </div>
            </div>

            <div className='row px-4'>
                <div className='col-md-4  col-12 mb-3   px-1 mb-1 '>
                    <div className='about-salesman py-1   px-2'>
                        <div className=' justify-content-between d-flex align-items-center'>
                            <div className=' '>   <b>100% authentic  <br />
                                products</b></div>


                            <i class="fa-solid fa-circle-dot text-success"></i>

                        </div>
                        <p className='my-3'>Swoo Tech Mart just distribute 100% authorized products &
                            guarantee quality. Nulla porta nulla nec orci vulputate, id
                            rutrum sapien varius.</p>
                    </div>

                </div>
                <div className='col-md-4  col-12 mb-3    px-1 mb-1 '>
                    <div className='about-salesman py-1   px-2'>
                        <div className=' justify-content-between d-flex align-items-center'>
                            <div className=' '>   <b>100% authentic  <br />
                                products</b></div>


                            <i class="fa-solid fa-circle-dot text-success"></i>

                        </div>
                        <p className='my-3'>Swoo Tech Mart just distribute 100% authorized products &
                            guarantee quality. Nulla porta nulla nec orci vulputate, id
                            rutrum sapien varius.</p>
                    </div>

                </div>
                <div className='col-md-4   col-12 mb-3   px-1 mb-1 '>
                    <div className='about-salesman py-1   px-2'>
                        <div className=' justify-content-between d-flex align-items-center'>
                            <div className=' w-100'>   <b>100% authentic  <br />
                                products</b></div>


                            <i class="fa-solid fa-circle-dot text-success"></i>

                        </div>
                        <p className='my-3'>Swoo Tech Mart just distribute 100% authorized products &
                            guarantee quality. Nulla porta nulla nec orci vulputate, id
                            rutrum sapien varius.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About2
