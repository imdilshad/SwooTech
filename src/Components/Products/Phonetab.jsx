import React from 'react'
import { Button, Container } from 'react-bootstrap'
import i1 from '../images/popularimages/Link → prod20.png.png'
import i2 from '../images/popularimages/Link → prod21.png.png'
import i3 from '../images/popularimages/Link → prod22.png.png'
import i4 from '../images/popularimages/Link → prod23.png.png'
import i5 from '../images/popularimages/Link → prod24.png.png'
import i6 from '../images/popularimages/Link → prod25.png.png'
import i7 from '../images/popularimages/Link → prod27.png.png'
import i8 from '../images/popularimages/Link → prod62.png.png'
import i9 from '../images/popularimages/Link → prod63.png.png'
import i10 from '../images/popularimages/Link → prod64.png.png'
import Dropdown from 'react-bootstrap/Dropdown';
import b1 from '../images/img/brand1.png.png'
import b2 from '../images/img/brand2.png.png'
import b3 from '../images/img/brand3.png.png'
import b4 from '../images/img/brand4.png.png'
import b5 from '../images/img/brand5.png.png'
import b6 from '../images/img/addimg.png.png'

import './Phonetab.css'
import Popular from './Popular'
import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Last from './Last'


const Phonetab = () => {

  const [value, setValue] = useState(50); // Initial value

  // Function to handle slider value change
  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className='container-fluid'>
        <h5>TOP CELL PHONES & TABLETS
        </h5>

        <div className='row   m-0   d-md-flex justify-content-evenly   '>
          <div className='col-md-7  col-12  mx-1 mb-1 product-hero1 rounded'>
            <h2 className='text-light ms-3 my-3'>
              <b>   Noise Cancelling</b><br />
              Headphone
            </h2>
            <p className='ms-5 mt-3 text-light'>Boso Over-Ear Headphone<br />
              Wifi, Voice Assistant,<br />
              Low latency game mde</p>
            <Button className='bg-light abhi2 text-dark ms-3 my-3'>BUY NOW</Button>


          </div>
          <div className='col-md-4 col-12   mx-1 mb-1 product-hero2 rounded'>

            <div className='row '>

              <div className='col-8 mt-4 '>
                <h3>redmi note 12
                  Pro+ 5g <br /></h3>

                <p className='mt-2'>Rise to the challenge</p>
              </div>
              <div className='col-4'>
                <Button className='bg-dark abhi3 text-light mt-5 rounded btn-sm'>SHOP NOW</Button>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div className='my-3 container-fluid  '>

        <h3 className=''>POPULAR CATAGORIES</h3>

        <div className='row  px-3   '>
          <div className='col-md-2 col-4   '>

            <div className='row '>
              <div className='col-6 p-0  '>
                <img src={i1} alt='a' height={35} width={35} />
              </div>
              <div className='col-6 p-0 '>
                <b>iphone(ios)</b>
                <p className='m-0'>74 items</p>
              </div>

            </div>
          </div>
          <div className="col-md-2 col-4  ">
            <div className='row '>
              <div className='col-6 p-0  '>
                <img src={i2} alt='a' height={35} width={35} />
              </div>
              <div className='col-6 p-0 '>
                <b>android</b>
                <p className='m-0'>35 items</p>
              </div>

            </div>
          </div>


          <div className='col-md-2 col-4   '>

            <div className='row  '>
              <div className='col-6 p-0   '>
                <img src={i3} alt='a' height={35} width={35} />
              </div>
              <div className='col-6 p-0 '>
                <b>5G Support</b>
                <p className='m-0'>12 items</p>
              </div>

            </div>
          </div>


          <div className='col-md-2 col-4   '>

            <div className='row'>
              <div className='col-6 p-0  '>
                <img src={i8} alt='a' height={35} width={35} />

              </div>
              <div className='col-6 p-0 '>
                <b>Apple Tablets</b>
                <p className='m-0'>22 items</p>
              </div>

            </div>
          </div>


          <div className='col-md-2 col-4   '>

            <div className='row'>
              <div className='col-6 p-0  '>
                <img src={i9} alt='a' height={35} width={35} />
              </div>
              <div className='col-6 p-0 '>
                <b>Smartphone
                  Chargers</b>
                <p className='m-0'>33 items</p>
              </div>

            </div>
          </div>
          <div className='col-md-2 col-4   '>

            <div className='row'>
              <div className='col-6 p-0'>
                <img src={i3} alt='a' height={35} width={35} />
              </div>
              <div className='col-6 p-0'>
                <b>gaming</b>
                <p className='m-0'>9 items</p>
              </div>

            </div>
          </div>




        </div>




        <div className='row  px-3'>
          <div className='col-md-2 col-4   '>

            <div className='row '>
              <div className='col-6 p-0  '>
                <img src={i7} alt='a' height={35} width={35} />
              </div>
              <div className='col-6 p-0 '>
                <b>Xiaomi</b>
                <p className='m-0'>52 items</p>
              </div>

            </div>
          </div>


          <div className='col-md-2 col-4   '>

            <div className='row '>
              <div className='col-6 p-0  '>
                <img src={i4} alt='a' height={35} width={35} />
              </div>
              <div className='col-6 p-0 '>
                <b>Accessories</b>
                <p className='m-0'>29 items</p>
              </div>

            </div>
          </div>


          <div className='col-md-2 col-4   '>

            <div className='row'>
              <div className='col-6 p-0  '>
                <img src={i5} alt='a' height={35} width={35} />
              </div>
              <div className='col-6 p-0 '>
                <b>Samsung Tablets</b>
                <p className='m-0'>26 items</p>
              </div>

            </div>
          </div>








        </div>


      </div>





      < div className='container-fluid'>

        <div className='row' >

          <div className='col-md-3 col-12 about-salesman'>
            <div className='mt-4'>
              <b >CATAGRIOUS</b></div>
            <Dropdown className='my-3'>
              <Dropdown.Toggle className='text-white' variant="light" id="dropdown-basic">
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>


            <b>Cell Phones & Tablets</b>


            <p className=' ms-5'>ALL</p>
            <p className=' ms-5'>Iphone</p>
            <p className=' ms-5'>Samsung</p>
            <p className=' ms-5'>Xiaomi</p>
            <p className=' ms-5'>asus</p>
            <p className=' ms-5'>oppo</p>
            <p className=' ms-5'>Gaming Smartphone</p>
            <p className=' ms-5'>ipad</p>
            <p className=' ms-5'>Window Tablets</p>
            <p className=' ms-5'>eReader</p>
            <p className=' ms-5'>Smartphone Chargers</p>
            <p className=' ms-5'>5G Support Smartphone</p>
            <p className=' ms-5'>Smartphone Accessories</p>
            <p className=' ms-5'>Tablets Accessories</p>
            <p className=' ms-5'>Cell Phones  $200</p>





          </div>




          <div className='col-md-9 col-12 px-4'>



            <Popular />
          </div>






          <div className="row ">
            <div className='Bycategory col-md-3 col-12 about-salesman mt-1 '>

              <div className='row'>
                <div className='col-6'>
                  <h5>CATEGORIES</h5>
                </div>
                <div className='col-5'>
                  <p className=''>RESET ALL</p>
                </div>






              </div>




              <div className='row gap-1'>
                <div className='col-6 bg-white rounded ms-2'>
                  <h5>Min: $45.00 </h5>
                </div>
                <div className='col-5 bg-white rounded'>
                  <p className=''>10.9 inch </p>
                </div>






              </div>

              <div className='row gap-1 mt-1'>
                <div className='col-5 bg-white rounded ms-2'>
                  <h5>Color: Red  </h5>
                </div>
                <div className='col-4 bg-white rounded'>
                  <p className=''>128GB </p>
                </div>






              </div>

              <div className='mt-5' >

                <b >BY BRANDS</b>

              </div>
              <div className='my-3'>
                <input type="email" className="form-control m-0 py-4" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div className='mt-3 row d-flex align-item-center'  >
                <div className='w-100 d-flex align-item-center justify-content-evenly'>
                  <input className="form-check-input m-0" type="checkbox" value="" id="defaultCheck1"></input>

                  <img src={b1} alt='a' width={100} />

                  <p className='m-0 '>(14)</p>
                </div>


              </div>
              <div className='mt-3 row d-flex align-items-center'  >
                <div className='w-100 d-flex align-items-center justify-content-evenly'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></div>
                <div className='col-5'>
                  <img src={b2} alt='a' width={100} /></div>
                <div className='col-2  '>
                  <p className='te '>(6)</p></div>



              </div>
              <div className='mt-3 row d-flex align-items-center'  >
                <div className='col-2 d-flex align-items-center justify-content-center'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></div>
                <div className='col-5'>
                  <img src={b3} alt='a' width={100} /></div>
                <div className='col-2  '>
                  <p className='te '>(6)</p></div>



              </div>
              <div className='mt-3 row d-flex align-items-center'  >
                <div className='col-2 d-flex align-items-center justify-content-center'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></div>
                <div className='col-5'>
                  <img src={b4} alt='a' width={100} /></div>
                <div className='col-2  '>
                  <p className='te '>(18)</p></div>



              </div>
              <div className='mt-3 row d-flex align-items-center'  >
                <div className='col-2 d-flex align-items-center justify-content-center'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></div>
                <div className='col-5'>
                  <img src={b5} alt='a' width={100} /></div>
                <div className='col-2  '>
                  <p className='te  '>(1)</p></div>



              </div>



              <hr />

              <div >
                <b>BY PRICE</b>
              </div>

              <div>
                <div style={{ margin: '20px', width: '50%' }}>

                  <Slider
                    min={0} // Minimum value
                    max={10000} // Maximum value
                    value={value} // Current value
                    onChange={handleSliderChange} // Callback function for value change
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-4 text-center'>
                  <p className='bg-white rounded'>$ {value}</p>
                </div>
                -
                <div className='col-4 text-center'>
                  <p className='bg-white rounded'>$ 10000</p>
                </div>
                <div className='col-2'>
                  <Button className='bg-success'>go</Button>
                </div>
              </div>
              <hr />
              <div>
                <b>BY RATING</b>
              </div>


              <div className='row mt-4'>

                <div className='col-6'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></div>
                <div className='col-3'>
                  <p>(52)</p>
                </div>
                <div className='col-6'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></div>
                <div className='col-3'>
                  <p>(24)</p>
                </div>
                <div className='col-6'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></div>
                <div className='col-3'>
                  <p>(5)</p>
                </div>
                <div className='col-6'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></div>
                <div className='col-3 mb-4'>
                  <p>(1)</p>
                </div>
                <hr />



              </div>

              <b>
                BY SCRINING
              </b>
              <div className='row gap-3'>

                <div className='col-3 bg-white rounded'>
                  <p>7” & Under</p>
                </div>
                <div className='col-3 bg-white rounded'>
                  <p>7.1” - 8.9”</p>
                </div>
                <div className='col-3 bg-white rounded'>
                  <p>9” - 10.9”</p>
                </div>
                <div className='col-4 bg-white rounded mb-4'>
                  <p>11” & Greater</p>
                </div>

              </div>

              <b className='my-4' >BY COLOUR

              </b>
              <div className='row mt-4 ms-3 gap-4'>

                <div className='col-1 bg-danger rounded text-danger  '>
                  A

                </div>
                <div className='col-1 bg-success rounded text-success   '>
                  A

                </div>
                <div className='col-1 bg-dark rounded text-dark   '>
                  A

                </div>
                <div className='col-1 bg-light rounded text-light  '>
                  A

                </div>
                <div className='col-1 bg-warning rounded text-warning   '>
                  A

                </div>






              </div>
              <div className='row gap-4 ms-3 mt-2'>
                <div className='col-1 ss2 rounded    '>
                  A

                </div>
                <div className='col-1 ss1 rounded  '>
                  A

                </div>   <div className='col-1 ss rounded text-ss    '>
                  A

                </div>




              </div>
              <hr />

              <b>BY MEMORY</b>


              <div className='row'>
                <div className='col-6'>
                  <div className='row'>
                    <div className='col-4'>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    </div>
                    <div className='col-6'>
                      <p> 12GB(1)</p></div>
                  </div>
                  <div className='row'>
                    <div className='col-4'>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    </div>
                    <div className='col-6'>
                      <p>8GB(1)</p></div>
                  </div>
                  <div className='row'>
                    <div className='col-4'>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    </div>
                    <div className='col-6'>
                      <p> 6GB(1)</p></div>
                  </div>
                  <div className='row'>
                    <div className='col-4'>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    </div>
                    <div className='col-6'>
                      <p>4GB(1)</p></div>
                  </div>
                  <div className='row'>
                    <div className='col-4'>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    </div>
                    <div className='col-6'>
                      <p>3GB(1)</p></div>
                  </div>


                </div>

                <div className='col-6'>
                  <div className='row'>
                    <div className='col-4'>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    </div>
                    <div className='col-6'>
                      <p>1.5GB(1)</p></div>
                  </div>

                  <div className='row'>
                    <div className='col-4'>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    </div>
                    <div className='col-6'>
                      <p>1GB(1)</p></div>
                  </div>
                  <div className='row'>
                    <div className='col-4'>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    </div>
                    <div className='col-6 mb-4'>
                      <p>512MB(1)</p></div>
                  </div>

                </div>

              </div>
              <hr />

              <b>BY CONDITIONS</b>
              <div className='row'>
                <div className='col-1'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                </div>
                <div className='col-6 '>
                  <p>New</p></div>
              </div>
              <div className='row'>
                <div className='col-1'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                </div>
                <div className='col-6 '>
                  <p>Like New</p></div>
              </div><div className='row'>
                <div className='col-1'>
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                </div>
                <div className='col-6 '>
                  <p>Open Box</p></div>
              </div>


              <img className='ss3' src={b6} alt='a' />

              {/* col-3 div */}
            </div>


            <div className='col-md-9 col-12 px-4'>
              <Last />


            </div>

          </div>





        </div>










      </div>


    </>
  )
}

export default Phonetab