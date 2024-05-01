import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import aboutimg from '../images/div.about-banner.png'
import '../../App.css'

function About1() {
  return (
    <div className='container-fluid '>
       <div className='' >
                <img className='w-100 about-image' src={aboutimg} alt='a' />
            </div>
            <div className='row  d-flex about px-3 my-3 '>
                <div className=' fs-4 col-md-4  bg-warning col-12 d-flex justify-content-center my-2    '>
                    <span className='w-100 fw-bold text-start' >
                        OUR PURPOSE IS TO<span className='text-success '> ENRICH<br />
                            AND ENHANCE LIVES </span>THROUGH<br />
                        TECHNOLOGY
                    </span>
                </div>
                <div className='col-md-3  col-4 fs-6  py-4 '>
                    <h2 className='fs-4'>$12,5M</h2>
                    <p className='' style={{fontSize:'14px'}}>total revenue from
                        2001 - 2023</p>
                </div>
                <div className='col-md-3  col-4 fs-6 py-4' >
                    <h2 className='fs-4'>12K+</h2>
                    <p className='' style={{fontSize:'14px'}} >orders delivered<br />
                        successful on everyday</p>
                </div>
                <div className='col-md-2  col-4 fs-6 py-4' >
                    <h2 className='fs-4'>725+</h2>
                    <p className=''style={{fontSize:'14px'}} >store and office in U.S
                        and worldwide</p>
                </div>
            </div>
    </div>
  )
}

export default About1
