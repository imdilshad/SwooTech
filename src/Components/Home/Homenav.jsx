import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import topnav from './images/top_nav1.png.png'
import { Button } from 'react-bootstrap';


const Homenav = () => {
  return (
    <>
    
    <div className=' row header1 '>

      <div className='col-3   d-flex align-items-center justify-content-center '>
      <p > <b>Convertible Cribs</b>
      <p >Otto 3-in-1 Full-Size</p>
      </p>
      
      </div>

      <div className='col-3 '>

      <Container  className=' my-2 row bg-white rounded  '>
     
           <span className='col-5   '><span className='text-danger fs-4  '> 10% </span>SALE <br/>OFF</span>
         <span className='col-7'><span className='te'> Enter promotion code</span> <b>SWAT10OFF</b></span> 



      </Container>
      </div>
      <div className='col-3 d-flex align-items-end'>
        <img  src={topnav} alt='a'/>
      </div>

      <div className='col-3 d-flex align-items-center justify-content-center'>
        <Button className='bg'>SHOP NOW</Button>
        
      </div>
 



    </div>
    
    
    
    
    
    
    
    
    
    
    </>
    )}

export default Homenav