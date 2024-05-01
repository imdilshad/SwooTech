import React from 'react'
import header from '../images/hero.jpg'
import Button from 'react-bootstrap/Button'
import im1 from '../images/header/10 → Link.png'
import im2 from '../images/header/a.png'
import im3 from '../images/header/b.png'
import im4 from '../images/header/c.png'
import im5 from '../images/header/d.png'
import im6 from '../images/header/e.png'
import im7 from '../images/header/f.png'
import im8 from '../images/header/g.png'
import im9 from '../images/header/h.png'
import im10 from '../images/header/i.png'
import ProductCard from './Card'
import Card from 'react-bootstrap/Card'
import i1 from '../images/header/2 → prod4_1.jpg.jpeg'
import i2 from '../images/header/3 → prod1_3.jpg.jpeg'
import i3 from '../images/header//6.jpeg'
import i4 from '../images/header/7.jpeg'
import i5 from '../images/header/8.jpeg'

import gift from '../images/header/gift.png.png'

import { FaHeart } from 'react-icons/fa'
import { Homelast } from './Homelast'
import i6 from '../images/header/15.jpg'
import i7 from '../images/header/12.jpeg'
import i8 from '../images/header//11.jpeg'
import i9 from '../images/header/10.jpeg'
import i10 from '../images/header/9.jpeg'
import Homemilestone from './Homemilestone'


const Home = () => {
    const ne = <span className='bg-dark text-white rounded'> new a</span>
    return (
        <div className='container-fluid'>
            <div className="container-fluid hero-background">
                <div className='home-hero row '>
                    <div className="justify-item align-item flex-column px-4 h-100 text-start col-md-6 ">
                        <span className='text-start w-100'>BobOlax</span>
                        <h2 className='text-start w-100'>Hp Laptop 13th generating Touch</h2>
                        <span className='text-start w-100'>$199</span>
                        <div className='w-100 my-2'>
                        <button className='btn-color  text-white '>Shop Now</button>
                        </div>
                    </div>
                    <div className='col-md-6 justify-item'>
                        <img className='hero-image' src={header} alt='a'/>
                    </div>
                </div>
            </div>



            <span className='d-flex justify-content-center  '><span className='text-color me-1'> Most popular categories</span > for baby products</span>

            <div className=' row container-fluid my-3 '>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im1} alt="" />
                    <span>New Arrival</span>
                </div>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im2} alt="" />
                    <span>Laptops</span>
                </div>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im3} alt="" />
                    <span>I phone</span>
                </div>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im4} alt="" />
                    <span>samsung</span>
                </div>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im5} alt="" />
                    <span>One plus</span>
                </div>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im6} alt="" />
                    <span>vivo</span>
                </div>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im7} alt="" />
                    <span>oppo</span>
                </div>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im8} alt="" />
                    <span>redmi</span>
                </div>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im9} alt="" />
                    <span>realme</span>
                </div>
                <div className="col-md-2 col-3 justify-item flex-column">
                    <img src={im10} alt="" />
                    <span>MotoRolla</span>
                </div>
            </div>


            <div className='row d-flex justify-content-evenly m-0 w-100 container-fluid  my-4 '>



                <div className='col-md-5 col-12 mb-2 hpimage-background text-white'>
                    <div className='row col-md-7 '>
                        <div className='col-3 fs-3 text-end '>
                            <b>BEST PRICE</b>
                        </div>
                        <div className='col-3 fs-1  d-flex align-items-center'>
                            <b>$69</b>
                        </div>
                    </div>
                    <div className='row ms-4'>
                        <p> i7 processor with 8 core </p>

                    </div>
                    <div>
                        <Button className='text-lightgreen bg-white text-dark mb-3 ms-4'>SHOP NOW</Button>
                    </div>

                </div>
                <div className='col-md-5 col-12 mb-2 dellimage-background '>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-6 d-flex justify-content-center'>
                            <div className='row'>
                                <div className='col-12 mt-3'>
                                    <b className='bg-light fs-1  rounded'>10% OFF</b><br /></div>
                                <div className='col-12'>
                                    <b className='fs-2 text-light'>for now</b>

                                </div>
                                <div className='col-12 '>
                                    <p className='text-grey'>Earn 10% Cash back on
                                        Swatbabymall. <a className='text-danger' href='google.com '> Expore Now!</a></p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>







            </div>


            <div className='text-center my-2'>
                <span>Recommended </span>
            <span className='text'>By Swoo Tech</span>
            </div>

            <div className=' container-fluid  d-md-block d-none'>

             <div className="list d-flex justify-content-center gap-3 flex-wrap ">
                <li>
                    <button className='btn-color  text-white'>Best Seller</button>
                </li>
                <li>
                    <button className='btn-color  text-white'>
                    Popular
                    </button>
                </li>
                <li>
                    <button className='btn-color  text-white'>Top rated</button>
                </li>
                <li>
                   <button className='btn-color  text-white'> Electrinics</button>
                </li>
                <li>
                   <button className='btn-color  text-white'> Phone &Tabs</button>
                </li>
                <li>
                   <button className='btn-color  text-white'> Desktop &Laptop</button>
                </li>
                <li>
                   <button className='btn-color  text-white'> charger</button>
                </li>
             </div>


            </div>

            <div className='container-fluid row d-flex justify-content-evenly mt-3 p'>
                <div className='col-md-2 col-12 mb-3'>
                    <Card className=''>
                        <ProductCard className="  bg-warning"
                            productName="ipads "
                            rating={'⭐⭐⭐⭐⭐'}
                            imageSrc={i2}
                            price={19.99}
                            price2={159}
                            off={15}
                            me={909}
                            // purchaseCount={1030}

                        />

                    </Card>

                </div>

                <div className='col-md-2 col-12 mb-3'>
                    <Card>
                        <ProductCard
                            productName="headphone&Mobile"
                            rating={'⭐⭐⭐⭐'}
                            imageSrc={i3}
                            price={1259.00}

                            purchaseCount={300}
                        />

                    </Card>

                </div>

                <div className='col-md-2 col-12 mb-3'>
                    <Card>
                        <ProductCard
                            productName="Descktops"
                            rating={ne}
                            imageSrc={i4}
                            price={19.99}
                            purchaseCount={500}
                        />

                    </Card>

                </div>
                <div className='col-md-2  col-12 mb-3'>
                    <Card>
                        <ProductCard
                            productName="Headphone"
                            rating={'⭐⭐⭐ '}

                            imageSrc={i1}
                            price={79.00}
                            price2={99.00}
                            off={20}


                            purchaseCount={1320}
                        />

                    </Card>

                </div>

                <div className='col-md-2 col-12 mb-3'>
                    <Card>
                        <ProductCard
                            productName="Mobiles and laptops"
                            rating={'⭐⭐⭐'}
                            imageSrc={i5}
                            price={19.99}
                            purchaseCount={130}
                        />

                    </Card>

                </div>


            </div>



            <Homemilestone />
{/* mobile me na dikhe */}
            <div className='dell-banner row my-2 Bycategory'>

                <div className='col-2 d-flex align-items-center justify-content-center '>
                    <p className='fs-2 text-white'>Dell & Hp</p>
                </div>
                <div className='col-3'>


                    <img className='imageadjust' src={i8} alt='a' />
                </div>
                <div className='col-4 text-white text-center'>
                    <p>Pay with 4 installment, 0% interest</p>
                    <p className='fs-3'><b>Buy Now,</b> Pay Later</p>
                </div>
                <div className='col-3 d-flex align-items-center'>
                    <Button className='bg-white bg text-dark '> DISCOVER NOW</Button>
                </div>
            </div>



            <div className='row d-flex justify-content-evenly container-fluid mt-3'>

                <p className='fs-3'><span className='text-lightgreen'>Clearance Sale </span>| Up to 70% OFF</p>
                <div className='col-md-2 mb-2 col-12'>
                    <Card>
                        <ProductCard
                            productName="iphone 15 pro max "
                            rating={'⭐⭐⭐⭐⭐'}
                            imageSrc={i6}
                            price={19.99}
                            price2={159}
                            off={15}
                            purchaseCount={100}
                        />

                    </Card>

                </div>

                <div className='col-md-2 mb-2 col-12'>
                    <Card>
                        <ProductCard
                            productName="samsung lcd tv"
                            rating={'⭐⭐⭐⭐'}
                            imageSrc={i7}
                            price={1259.00}

                            purchaseCount={100}
                        />

                    </Card>

                </div>

                <div className='col-md-2 mb-2 col-12'>
                    <Card>
                        <ProductCard
                            productName="Dell "
                            rating={'⭐⭐⭐'}
                            imageSrc={i8}
                            price={19.99}
                            purchaseCount={100}
                        />

                    </Card>

                </div>
                <div className='col-md-2 mb-2 col-12 '>
                    <Card>
                        <ProductCard
                            productName="Asus"
                            rating={'⭐⭐⭐ '}

                            imageSrc={i9}
                            price={79.00}
                            price2={99.00}
                            off={20}


                            purchaseCount={100}
                        />

                    </Card>

                </div>

                <div className='col-md-2 mb-2 col-12'>
                    <Card>
                        <ProductCard
                            productName="HP"
                            rating={'⭐⭐⭐'}
                            imageSrc={i10}
                            price={19.99}
                            purchaseCount={100}
                        />

                    </Card>

                </div>


            </div>

            <div className='mt-2 container-fluid px-3 '>
                <p className='fs-3 text-start'><span className='text-lightgreen' >Most loved </span>brands on Swatbabymall</p>
            </div>

            {/* New arrival */}

            <div className='Bycategory container-fluid' >
                <p className='fs-3'><span className='text-lightgreen'>New</span> Arrival</p>



                <div className='row d-flex justify-content-evenly  gap-3'>

                    <div className='col-md-1 bgg d-flex justify-content-center align-items-center'>

                        <b>best seller</b>
                    </div>
                    <div className='col-md-1 bgg d-flex justify-content-center align-items-center'>

                        <b>Top Rated</b>
                    </div>
                    <div className='col-md-1 bgg d-flex justify-content-center align-items-center'>

                        <b>laptops </b>
                    </div>
                    <div className='col-md-1 bgg d-flex justify-content-center align-items-center'>

                        <b>
                            Desktops
                        </b>
                    </div>
                    <div className='col-md-1 bgg d-flex justify-content-center align-items-center'>

                        <b>ipad</b>
                    </div>
                    <div className='col-md-1 bgg d-flex justify-content-center align-items-center'>

                        <b>cell phone</b>
                    </div>
                    <div className='col-md-1 bgg d-flex justify-content-center align-items-center'>

                        <b>charger</b>
                    </div>
                    <div className='col-md-1 bgg d-flex justify-content-center align-items-center'>

                        <b>samsung</b>
                    </div>


                </div>
            </div>


            <div className='row container-fluid d-flex justify-content-evenly my-3'>

                <div className='col-md-4 mb-3 row borderforhome'>

                    <div className='col-6'>
                        <div className='row '>
                            <div className='col-6 d-flex justify-content-end'>
                                <h5 className="badge text-bg-dark" >New</h5>
                            </div>
                            <div className='col-6'>
                                <h5><span className="badge text-bg-dark">Gift</span></h5>
                            </div>
                            <div><img className='image mt-5' src={i10} alt='a' /></div>

                        </div>





                    </div>
                    <div className='col-6  '>
                        <b  >KOBOO Stroller 3 In 1 Madrid Dark Grey
                            Melange 2022</b>
                        <p>⭐⭐⭐⭐⭐(5)</p>
                        <p className='fs-4 '>$559.00</p>
                        <p >902 purchase</p>
                    </div>


                    <div className='row d-flex ms-1 mb-1 hero-background'>
                        <div className='col-3 '>
                            <img src={gift} alt='a' />
                        </div>
                        <div className='col-9'>
                            <ul>


                                <li>                 <b> Buy 02 boxes get a Snack Tray</b></li>
                                <li> <b> Buy 04 boxes get a free Block Toys</b></li>
                            </ul>
                            <p className='te'>Promotion will expires in: 9h00pm, 25/5/2024</p>
                        </div>
                    </div>




                </div>
                <div className='col-md-2 mb-3 borderforhome'>
                    <b>DYNAMIC SPORTS 650ET
                        Electric Scooter - Yellow</b>
                    <div className='row'>
                        <h5 className='col-6 text-end'><span className="badge text-bg-dark">new</span></h5>
                        <h5 className='col-6'><span className="badge text-bg-dark">pre order</span></h5>
                    </div>
                    <div >
                        <img className='imagecontrol' src={i1} alt='a' />
                    </div>
                    <div className='text-center'><b>$109.00</b></div>
                    <div className='row'>
                        <div className='col-6'>
                            <p><b>75</b> Pre-order</p>
                        </div>
                        <div className='col-6 text-end'>
                            <FaHeart />
                        </div>
                    </div>
                </div>


                <div className='col-md-2 mb-3 borderforhome'>
                    <b>DYNAMIC SPORTS 650ET
                        Electric Scooter - Yellow</b>
                    <div className='row'>
                        <h5 className='col-6 text-end'><span className="badge text-bg-dark">new</span></h5>
                        <h5 className='col-6'><span className="badge text-bg-dark">pre order</span></h5>
                    </div>
                    <div >
                        <img className='imagecontrol' src={i5} alt='a' />
                    </div>
                    <div className='text-center'><b>$109.00</b></div>
                    <div className='row'>
                        <div className='col-6'>
                            <p><b>75</b> Pre-order</p>
                        </div>
                        <div className='col-6 text-end'>
                            <FaHeart />
                        </div>
                    </div>
                </div>




                <div className='col-md-2 mb-3 borderforhome'>
                    <b>DYNAMIC SPORTS 650ET
                        Electric Scooter - Yellow</b>
                    <div className='row'>
                        <h5 className='col-6 text-end'><span className="badge text-bg-dark">new</span></h5>
                        <h5 className='col-6'><span className="badge text-bg-dark">pre order</span></h5>
                    </div>
                    <div >
                        <img className='imagecontrol' src={i6} alt='a' />
                    </div>
                    <div className='text-center'><b>$109.00</b></div>
                    <div className='row'>
                        <div className='col-6'>
                            <p><b>75</b> Pre-order</p>
                        </div>
                        <div className='col-6 text-end'>
                            <FaHeart />
                        </div>
                    </div>
                </div>








            </div>



            <div className='row  d-flex justify-content-evenly container-fluid my-3'>

                <div className='col-md-4 mb-2  py-3 row borderforhome'>

                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-end'>
                                <h5> <span className="badge text-bg-dark">New</span></h5>
                            </div>
                            <div className='col-6'>
                                <h5><span className="badge text-bg-dark">Gift</span></h5>
                            </div>
                            <div><img className='image' src={i7} alt='a' /></div>

                        </div>





                    </div>
                    <div className='col-6 '>
                        <b>KOBOO Stroller 3 In 1 Madrid Dark Grey
                            Melange 2022</b>
                        <p>⭐⭐⭐⭐⭐(5)</p>
                        <p className='fs-4'>$559.00</p>
                        <p>902 purchase</p>
                    </div>


                    <div className='row d-flex ms-1 mb-1 hero-background'>
                        <div className='col-3 '>
                            <img src={gift} alt='a' />
                        </div>
                        <div className='col-9'>
                            <ul>


                                <li>                 <b> Buy 02 boxes get a Snack Tray</b></li>
                                <li> <b> Buy 04 boxes get a free Block Toys</b></li>
                            </ul>
                            <p className='te'>Promotion will expires in: 9h00pm, 25/5/2024</p>
                        </div>
                    </div>




                </div>
                <div className='col-md-2 mb-2 borderforhome'>
                    <b>DYNAMIC SPORTS 650ET
                        Electric Scooter - Yellow</b>
                    <div className='row'>
                        <h5 className='col-6 text-end'><span className="badge text-bg-dark">new</span></h5>
                        <h5 className='col-6'><span className="badge text-bg-dark">pre order</span></h5>
                    </div>
                    <div >
                        <img className='imagecontrol' src={i8} alt='a' />
                    </div>
                    <div className='text-center'><b>$109.00</b></div>
                    <div className='row'>
                        <div className='col-6'>
                            <p><b>75</b> Pre-order</p>
                        </div>
                        <div className='col-6 text-end'>
                            <FaHeart />
                        </div>
                    </div>
                </div>


                <div className='col-md-2 mb-2 borderforhome'>
                    <b>DYNAMIC SPORTS 650ET
                        Electric Scooter - Yellow</b>
                    <div className='row'>
                        <h5 className='col-6 text-end'><span className="badge text-bg-dark">new</span></h5>
                        <h5 className='col-6'><span className="badge text-bg-dark">pre order</span></h5>
                    </div>
                    <div >
                        <img className='imagecontrol' src={i9} alt='a' />
                    </div>
                    <div className='text-center'><b>$109.00</b></div>
                    <div className='row'>
                        <div className='col-6'>
                            <p><b>75</b> Pre-order</p>
                        </div>
                        <div className='col-6 text-end'>
                            <FaHeart />
                        </div>
                    </div>
                </div>




                <div className='col-md-2 mb-2 borderforhome'>
                    <b>DYNAMIC SPORTS 650ET
                        Electric Scooter - Yellow</b>
                    <div className='row'>
                        <h5 className='col-6 text-end'><span className="badge text-bg-dark">new</span></h5>
                        <h5 className='col-6'><span className="badge text-bg-dark">pre order</span></h5>
                    </div>
                    <div >
                        <img className='imagecontrol' src={i2} alt='a' />
                    </div>
                    <div className='text-center'><b>$109.00</b></div>
                    <div className='row'>
                        <div className='col-6'>
                            <p><b>75</b> Pre-order</p>
                        </div>
                        <div className='col-6 text-end'>
                            <FaHeart />
                        </div>
                    </div>
                </div>








            </div>



            <Homelast />


        </div>
    )
}

export default Home