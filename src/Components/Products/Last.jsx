import React from 'react'
import '../../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import grey from '../images/grey.webp'

import p1 from '../images/mobile.png'
import p2 from '../images/mobil2.png'
import p3 from '../images/mobi3.png'
import p4 from '../images/mobi4.png'
import a1 from '../images/mside1.png'
import a2 from '../images/popularimages/Link → prod24.png.png'
import m1 from '../images/mobi5.png'
import m2 from '../images/m3.png'
import m3 from '../images/m2.png'
import m4 from '../images/m1.png'
import b1 from '../images/prod30.png.png'
import b2 from '../images/prod10.png.png'

import ma1 from '../images/ma1 (2).png'
import ma2 from '../images/ma1 (3).png'
import ma3 from '../images/ma1 (4).png'
import ma4 from '../images/ma1 (1).png'

import maa1 from '../images/maa1 (1).png'
import maa2 from '../images/maa1 (2).png'
import maa3 from '../images/maa1 (3).png'
import maa4 from '../images/maa1 (4).png'
import Pagination from './Pagination'


const Last = () => {
    return (
        <>
            <div className='row my-5 '>

                <div className='col-md-3 col-6'>

                    <div className='row  '>
                        <div className='col-6  '>
                            <h4><span className="badge text-light bg-success">SAVE<br /> $199</span></h4>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={p1} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(8)</p>
                        </div>
                        <div className='row'>
                            <b className='fs-6'>SROK Smart Phone 128GB,
                                Oled Retina</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-danger mt-4'>$579.00  <span className='te'>  $859.00</span> </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success  mt-5 text-center '>FREE SHIPPING</p>
                        </div>
                        <div className='row text-center'>
                            <p>🟢 in stock</p>
                        </div>





                    </div>




                </div>



                <div className='col-md-3 col-6'>

                    <div className='row '>
                        <div className='col-6  '>

                            <h3><span className="badge text-light bg-dark">New</span></h3>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={p2} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>

                        </div>
                        <div className='row'>
                            <b className='fs-6'>aPod Pro Tablet 2023 LTE +
                                Wifi, GPS Cellular 12.9 Inch,
                                512GB</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-dark mt-4'>$979.00 - $1,259.00 </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success mt-5 text-center'>2.98 SHIPPING</p>
                        </div>
                        <div className='row text-center'>
                            <p>🟢 in stock</p>
                        </div>





                    </div>




                </div>



                <div className='col-md-3 col-6'>

                    <div className='row '>
                        <div className='col-6  '>
                            <h3><span className="badge text-light bg-dark">New</span></h3>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={p3} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(9)</p>
                        </div>
                        <div className='row'>
                            <b className='fs-6'>Samsung Galaxy X6 Ultra
                                LTE 4G/128 Gb, Black
                                Smartphone</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-dark mt-4'>$659.00</h5>
                        </div>

                        <div className='row'>
                            <div className='col-6'>
                                <p className='bgg text-success mt-5 text-center'>FREE SHIPPING</p>
                            </div>
                            <div className='col-6'>
                                {/* <p className='bgg text-danger mt-5 text-center'>FREE GIFT</p> */}

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-end'>
                                <img src={a1} alt='a' height={35}
                                    width={35} />


                            </div>




                            <div className='col-6'>
                                <img src={a2} alt='a' height={35}
                                    width={35} />
                            </div>
                        </div>





                    </div>




                </div>
                <div className='col-md-3 col-6'>

                    <div className='row  '>
                        <div className='col-6  '>
                            <h4><span className="badge text-light bg-success">SAVE <br />$59.00</span></h4>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={p4} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(153)</p>
                        </div>
                        <div className='row'>
                            <b className='fs-6'>Xiamoi Redmi Note 5, 64GB</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-danger mt-4'>$1,239.00  <span className='te'>  $1,619.00</span> </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success mt-5 text-center'>FREE SHIPPING</p>
                        </div>
                        <div className='row text-center'>
                            <p>Contact</p>
                        </div>





                    </div>




                </div>

            </div>








            {/* SEcond bar continew */}

            <div className='row mt-5 '>

                <div className='col-md-3 col-6'>

                    <div className='row d-flex justify-content-center '>
                        <div className='col-6  '>


                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image' src={m1} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(8)</p>
                        </div>
                        <div className='row'>
                            <b className='fs-6'>Microsute Alpha Ultra S5
                                Surface 128GB 2022, Sliver</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-dark mt-4'>$1,729.00 </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success  mt-3 text-center '>FREE SHIPPING</p>
                        </div>
                        <div className='row text-center'>
                            <p>Contact</p>
                        </div>


                        <div className='row'>
                            <div className='col-6 d-flex justify-content-end'>
                                <img src={b1} alt='a' height={35}
                                    width={35} />


                            </div>




                            <div className='col-6'>
                                <img src={b2} alt='a' height={35}
                                    width={35} />
                            </div>
                        </div>





                    </div>




                </div>



                <div className='col-md-3 col-6'>

                    <div className='row '>
                        <div className='col-6  '>

                            <h3><span className="badge text-light bg-success">SAVE<br />$199</span></h3>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={m2} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>

                        </div>
                        <div className='row'>
                            <b className='fs-6'>OPod Pro 12.9 Inch M1
                                2023, 64GB + Wifi, GPS</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-danger mt-4'>$569.00  <span className=' te'>$759.00</span> </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success mt-5 text-center'>FREE SHIPPING</p>
                        </div>
                        <div className='row'>
                            <p className='text-center'>🟢 in stock</p>
                        </div>





                    </div>




                </div>



                <div className='col-md-3 col-6'>

                    <div className='row '>
                        <div className='col-6  '>


                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={m3} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(9)</p>
                        </div>
                        <div className='row'>
                            <b className='fs-6'>Xioma Redmi Note 11 Pro
                                256GB 2023, Black
                                Smartphone</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-dark mt-4'>$59.00 - $129.00</h5>
                        </div>

                        <div className='row'>
                            <div className='col-12'>
                                <p className='bgg text-success mt-5 text-center'>FREE SHIPPING</p>
                            </div>

                        </div>
                        <div className='row'>
                            <p className='text-center'>🟢 in stock</p>
                        </div>





                    </div>




                </div>
                <div className='col-md-3 col-6'>

                    <div className='row  '>
                        <div className='col-6  '>


                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={m4} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(153)</p>
                        </div>
                        <div className='row'>
                            <b className='fs-6'>aPod Pro Tablet 2023 LTE +
                                Wifi, GPS Cellular</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-dark mt-4'>$279.00 </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-dark mt-5 text-center'>$2.90 SHIPPING</p>
                        </div>
                        <div className='row text-center'>
                            <p >Contact</p>
                        </div>





                    </div>




                </div>
            </div>





            {/* third slid start */}




        





            <div className='row mt-5 '>

                <div className='col-md-3 col-6'>

                    <div className='row  '>
                        <div className='col-6  '>
                    

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={ma1} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(8)</p>
                        </div>
                        <div className='row'>
                            <b className='fs-6'>Lenovo Redmi Note 5,
64GB</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-dark mt-4'>$69.00 </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success  mt-5 text-center '>FREE SHIPPING</p>
                        </div>
                        <div className='row text-center'>
                            <p>🟢 in stock</p>
                        </div>





                    </div>




                </div>



                <div className='col-md-3 col-6'>

                    <div className='row '>
                        <div className='col-6  '>

                            <h3><span className="badge text-light bg-dark">New</span></h3>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={ma2} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>

                        </div>
                        <div className='row'>
                            <b className='fs-6'>LG Pro Tablet 2023 LTE +
Wifi, GPS Cellular</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-dark mt-4'>$179.00 - $429.00</h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-dark mt-3 text-center'>2.98 SHIPPING</p>
                        </div>
                        <div className='row text-center'>
                            <p> PRE ORDER</p>
                        </div>





                    </div>




                </div>



                <div className='col-md-3 col-6'>

                    <div className='row '>
                        <div className='col-6  '>
                            <p><span className="badge text-light bg-dark">OUT OF STOCK</span></p>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={ma3} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(9)</p>
                        </div>
                        <div className='row'>
                            <b className='fs-6'>Samsung Galaxy X6 Ultra
                                LTE 4G/128 Gb, Black
                                Smartphone</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-dark mt-4'>$659.00</h5>
                        </div>

                        <div className='row'>
                            <div className='col-6'>
                                <p className='bgg text-success  text-center'>FREE SHIPPING</p>
                            </div>
                            <div className='col-6'>
                                {/* <p className='bgg text-danger text-center'>FREE GIFT</p> */}

                            </div>
                        </div>
                        <div className='row'>
                        <p >🟢 in stock</p>
                        </div>





                    </div>




                </div>
                <div className='col-md-3 col-6'>

                    <div className='row  '>
                        <div className='col-6  '>
                            <h4><span className="badge text-light bg-success">SAVE <br />$199.00</span></h4>

                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <img src={grey} alt='a' height={35} width={35}
                                style={{ borderRadius: 100 }} />
                        </div>

                        <div className='row'>
                            <img className='image ' src={ma4} alt='a' />
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <p className='te text-center'>(153)</p>
                        </div>
                        <div className='row'>
                            <b className='fs-6'>SROK Smart Phone 128GB,
Oled Retina</b>
                        </div>
                        <div className='row'>
                            <h5 className='text-danger mt-4'>$579.00  <span className='te'>  $859.00</span> </h5>
                        </div>

                        <div className='row'>
                            <p className='bgg text-success mt-5 text-center'>FREE SHIPPING</p>
                        </div>
                        <div className='row text-center'>
                            <p>🟢 in stock</p>
                        </div>





                    </div>




                </div>



</div>



{/* forth slide start */}


<div className='row mt-5 '>

<div className='col-md-3 col-6'>

    <div className='row  '>
        <div className='col-6  '>
            <h4><span className="badge text-light bg-success">SAVE<br /> $199</span></h4>

        </div>
        <div className='col-6 d-flex justify-content-end'>

            <img src={grey} alt='a' height={35} width={35}
                style={{ borderRadius: 100 }} />
        </div>

        <div className='row'>
            <img className='image ' src={maa1} alt='a' />
        </div>

        <div className='row d-flex justify-content-center'>
            <p className='te text-center'>(8)</p>
        </div>
        <div className='row'>
            <b className='fs-6'>Xiamoi Redmi Note 5, 64GB</b>
        </div>
        <div className='row'>
            <h5 className='text-danger mt-4'>$579.00  <span className='te'>  $859.00</span> </h5>
        </div>

        <div className='row'>
            <p className='bgg text-success  mt-5 text-center '>FREE SHIPPING</p>
        </div>
        <div className='row text-center'>
            <p>Contact</p>
        </div>





    </div>




</div>



<div className='col-md-3 col-6'>

    <div className='row '>
        <div className='col-6  '>

            <h3><span className="badge text-light bg-dark">New</span></h3>

        </div>
        <div className='col-6 d-flex justify-content-end'>

            <img src={grey} alt='a' height={35} width={35}
                style={{ borderRadius: 100 }} />
        </div>

        <div className='row'>
            <img className='image ' src={maa2} alt='a' />
        </div>

        <div className='row d-flex justify-content-center'>

        </div>
        <div className='row'>
            <b className='fs-6'>aPod Pro Tablet 2023 LTE +
Wifi, GPS Cellular 12.9 Inch,
512GB</b>
        </div>
        <div className='row'>
            <h5 className='text-dark mt-4'>$979.00 - $1,259.00 </h5>
        </div>

        <div className='row'>
            <p className='bgg text-success mt-5 text-center'>2.98 SHIPPING</p>
        </div>
        <div className='row text-center'>
            <p className='text-dark'>🟢 in stock</p>
        </div>





    </div>




</div>



<div className='col-md-3 col-6'>

    <div className='row '>
        <div className='col-6  '>
            <h3><span className="badge text-light bg-dark">New</span></h3>

        </div>
        <div className='col-6 d-flex justify-content-end'>

            <img src={grey} alt='a' height={35} width={35}
                style={{ borderRadius: 100 }} />
        </div>

        <div className='row'>
            <img className='image ' src={maa3} alt='a' />
        </div>

        <div className='row d-flex justify-content-center'>
            <p className='te text-center'>(9)</p>
        </div>
        <div className='row'>
            <b className='fs-6'>Samsung Galaxy X6 Ultra
LTE 4G/128 Gb, Black
Smartphone</b>
        </div>
        <div className='row'>
            <h5 className='text-dark mt-4'>$659.00</h5>
        </div>

        <div className='row'>
            <div className='col-6'>
                <p className='bgg text-success mt-5 text-center'>FREE SHIPPING</p>
            </div>
            <div className='col-6'>
                {/* <p className='bgg text-danger mt-5 text-center'>FREE GIFT</p> */}

            </div>
        </div>
        <div className='row text-center'>
           <p>🟢in stock</p>
        </div>





    </div>




</div>
<div className='col-md-3 col-6'>

    <div className='row  '>
        <div className='col-6  '>
            <h4><span className="badge text-light bg-success">SAVE <br />$59.00</span></h4>

        </div>
        <div className='col-6 d-flex justify-content-end'>

            <img src={grey} alt='a' height={35} width={35}
                style={{ borderRadius: 100 }} />
        </div>

        <div className='row'>
            <img className='image ' src={maa4} alt='a' />
        </div>

        <div className='row d-flex justify-content-center'>
            <p className='te text-center'>(153)</p>
        </div>
        <div className='row'>
            <b className='fs-6'>Xiamoi Redmi Note 5, 64GB</b>
        </div>
        <div className='row'>
            <h5 className='text-danger mt-4'>$1,239.00  <span className='te'>  $1,619.00</span> </h5>
        </div>

        <div className='row'>
            <p className='bgg text-success mt-5 text-center'>FREE SHIPPING</p>
        </div>
        <div className='row text-center'>
            <p>Contact</p>
        </div>





    </div>




</div>

</div>





<Pagination/>







            </>
    )
}

export default Last