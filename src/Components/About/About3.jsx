import React from 'react'

import '../../App.css'
import l1 from '../images/l1.png'
import vision from '../images/about3.png.png'
import l2 from '../images/l2 (1).png'
import l3 from '../images/l2 (2).png'
import l4 from '../images/l2 (3).png'
import l5 from '../images/l2 (4).png'
import{Link} from 'react-router-dom'
function About3() {
  return (
    <div className='container-fluid'>
      
      <div className='my-4 w-100' >
                <h4 className='ms-1 '>our mission and vision</h4>
                <p className='my-3 ms-1'>Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget
                    quam et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue. Vivamus mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas.</p>



                <img className='w-100 about-image ' src={vision} alt='a' />


                <h4 className='my-4'>  From a retail store to the global chain of stores  </h4>
                <span>Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat.</span>
                <div className='row py-4'>

                    <div className='col-md-6 col-12'>

                        <p><b>1997:</b>A small store located in Brooklyn Town, USA</p>
                        <p><b>1998:</b>It is a long established fact that a reader will be distracted by the readable</p>
                        <p><b>2000:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <p><b>2002:</b>Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <p><b>2004:</b>Contrary to popular belief, Lorem Ipsum is not simply random text3</p>
                        <p><b>2005:</b>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here</p>
                        <p><b>2006:</b>There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour, or randomised words
                            which don't look even slightly believable.</p>
                        <p><b>2010:</b>All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        <p><b>2013:</b> Lorem Ipsum comes from sections 1.10.32</p>
                    </div>
                    <div className='col-md-6 co-12'>


                        <p><b>2014:</b>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form</p>
                        <p><b>2016:</b>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                            necessary</p>
                        <p><b>2020</b>Lorem Ipsum comes from sections 1.10.32</p>
                        <p><b>2021:</b> Making this the first true generator on the Internet</p>
                        <p><b>2022</b> Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                            free from repetition, injected humour</p>
                        <p className='mb-4'><b>2023:</b>here are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form </p>

                    </div>

                    <hr />


                </div>
            </div>
            <div className='p-0 container-fluid ' >
                <div className='w-100 my-2 d-flex justify-content-between'>
                    <h4 className=''>Leardership</h4>
                    <Link className='' to={'https://google.com'}>view all</Link>
                    </div>

                <div className='row d-flex justify-content-center  '>
                    <div className='col-md-2 col-6  '>
                        <img className='w-100 mb-2' src={l1} alt='s' />
                        <b> <br />Henry Avery</b>
                        <p className='te'>Chairman</p>
                    </div>





                    <div className='col-md-2 col-6 '>
                        <img className='w-100 mb-2 ' src={l5} alt='s' />
                        <b>Michael Edward</b>
                        <p className='te'>Vice President</p>
                    </div>
                    <div className='col-md-2 col-6'>
                        <img className='w-100 mb-2' src={l4} alt='s' />
                        <b> <br />Eden Hazard</b>
                        <p className='te'>CEO</p>
                    </div>
                    <div className='col-md-2 col-6'>
                        <img className='w-100 mb-2' src={l3} alt='s' />
                        <b>Robert Downey Jr</b>
                        <p className='te'>CEO</p>
                    </div>
                    <div className='col-md-2 col-6'>
                        <img className='w-100 mb-2' src={l2} alt='s' />
                        <b>Nathan Drake</b>
                        <p className='te'>strategist director</p>
                    </div>

                </div>


            </div>



            <div className='about-member container-fluid bg-warning my-2 py-2 d-flex align-items-center justify-content-center'>
                <p className='m-0'> ⭐ Member get <span className='text'> FREE SHIPPING* </span>
                    with no order minimum!. *Restriction apply 
                    <a href='google.com'> Try free 30-days trial!</a></p>

            </div>
    </div>
  )
}

export default About3
