import {React ,useState}from 'react'
import { Button } from 'react-bootstrap'
import grey from '../images/grey.webp'
import '../../App.css'
import p1 from '../images/popularimages/7 → Link → prod11.png.png'
import p2 from '../images/popularimages/7 → Link → prod12.png.png'
import p3 from '../images/popularimages/7 → Link → prod13.png.png'
import p4 from '../images/popularimages/7 → Link → prod10.png@2x.png'
import product from './product'
import axios from 'axios'
import { useEffect } from 'react'



const Popular = () => {

    const[products,setProducts]=useState([])
    
    useEffect(()=>{
       const fetch= async()=>{
        try {
            let response=await axios.get('/api/v1/product/?page=1&limit=10').then(res=>res.data)
            
             setProducts(response.data.products)
             
            } catch (error) {
                console.log('this is error',error)
            }
        }
        fetch()
    } ,[])
        console.log(products)
    return (
        <>
            <h5 className='mt-3'>BEST IN SELLER CATAGORY</h5>

            <div className='row mt-5'>

           


            {  products.map((product)=>{
                return  (
                    <div className='col-md-3 col-6 mb-3' key={product._id}>

                    <div className='justify-item align-items-start flex-column text-start'>

                        <div className='row'>
                        <div className='  '>
                            <button className='btn text-white bg-success w-100 px-3'>save $59.00</button>

                        </div>
                        
                        </div>

                        <div className='w-100' key={product.mainImage.public_id}>
                            <img className='product-image w-100 rounded py-2' src={product.mainImage.url} alt='a' />
                        </div>

                        <div className='text-center'>
                            <span className='text-secondary'>({product.stock})</span>
                        </div>
                            <h4>{product.name}</h4>
                            <h5 className='text-danger py-2'>${product.price}</h5>
                        
                            <span className=' text-success'>FREE SHIPPING</span>
                            <span>❌ out of stock</span>
                        





                    </div>




                </div>
                )
             })}
   





             </div>

{/* 
                <div className='col-md-3 col-6'>

                    <div className='row '>
                        <div className='col-6  '>


                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image mt-5' src={p2} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>

                        </div>
                        <div className='row'>
                            <b>Opplo Watch Series 8 GPS
                                + Cellular Stainless Steel
                                Case with Milanese Loop</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-danger mt-4'>$979.00 - $1,259.00 </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success mt-5'>2.98 SHIPPING</p>
                        </div>
                        <div className='row'>
                            <p>PRE-ORDER</p>
                        </div>





                    </div>




                </div>



                <div className='col-md-3 col-6'>

                    <div className='row '>
                        <div className='col-6  '>
                            <Button className='bg-success'>save <br />$3.00</Button>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image mt-5' src={p3} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(9)</p>
                        </div>
                        <div className='row'>
                            <b>iSmart 24V Charger</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-danger mt-4'>$9.00  <span className='te'>  $12.00</span> </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success mt-5'>3.98 SHIPPING</p>
                        </div>
                        <div className='row'>
                            <p>Contact</p>
                        </div>





                    </div>




                </div>
                <div className='col-md-3 col-6'>

                    <div className='row '>
                        <div className='col-6  '>
                            <Button className='bg-success'>save <br />$59.00</Button>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image mt-5' src={p4} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(153)</p>
                        </div>
                        <div className='row'>
                            <b>OPod Pro 12.9 Inch M1
                                2023, 64GB + Wifi, GPS</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-danger mt-4'>$569.00 <span className='te'>  $759.00</span> </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success mt-5'>FREE SHIPPING</p>
                        </div>
                        <div className='row'>
                            <p>❌ out of stock</p>
                        </div>





                    </div>




                </div> */}
                <hr />
            

















        </>
    )
}

export default Popular