import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import i1 from '../images/det4.png.png'
import './Multipage.css'
import i2 from '../images/det5.png.png'
import i3 from '../images/det6.png.png'
import { Button, NavDropdown } from 'react-bootstrap';
import i4 from '../images/prod1.png.png'
import Checkout from '../Checkout/Checkout';
import Topcell from './Topcell';

function Multipage() {
    return (<>
    <Topcell/>


        <Navbar expand="lg" className="bg-body-light ">
            <Container className='d-flex justify-content-evenly'>
                <Navbar.Brand href="#home">DESCRIPTION</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex gap-5">
                        <Nav.Link href="#home">REVIEWS(5)</Nav.Link>
                        <Nav.Link href="#link"> ADDITIONAL INFORMATION</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div className='container-fluid' >
            <p>Built for ultra-fast performance, the thin and lightweight Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop on a crisp, clear Super AMOLED display. Expandable
                memory lets you enjoy more of your favorite content. And connecting and sharing between all your Samsung devices is easier than ever. Welcome to life with the reimagined Samsung Galaxy Tab
                S2. Watch thev world come to life on your tablet's Super AMOLED display * . With deep contrast, rich colors and crisp details, you won't miss a thing</p>

            <img  src={i1} alt='a' className='w-100' />
            <p className='te text-center'>* The Galaxy Tab S2’s 4 : 3 ratio display provides you with an ideal environment for performing office tasks.</p>

            <h4>From the manufacturer</h4>
            <p>Dive into the blockbuster movies you can't wait to see. Switch between your favorite apps quickly and easily. The new and improved octa-core processor gives you the power and speed you need
                to see more and do more. Expand your tablet's memory from 32GB to up to an additional 128GB and enjoy more of your favorite music, photos, movies and games on the go with a microSD card.
                With Quick Connect, start a show on your Smart TV and, with the touch of a button, take it with you by moving it to your Galaxy Tab S2.</p>

            <p className='mt-2'>Or send videos and photos from your tablet screen to your TV screen to share with everyone in the room. Work effortlessly between your Samsung tablet and Samsung smartphone with SideSync.
                Quickly drag and drop photos between devices. And even respond to a call from your smartphone right on your tablet screen.</p>

            <div className='row my-4 container-fluid d-flex justify-content-center '>

                <div className='col-md-6'>
                    <img className='w-100' src={i2} alt='s' />
                </div>
                <div className='col-md-6 '>
                    <img className='w-100' src={i3} alt='s' />
                </div>



            </div>

            <b >Semsong Galaxy Tab S2, 8-Inch, White</b>
            <p className='mt-3 te'>The Samsung Galaxy Tab S2 offers dual cameras: a rear-facing 8-megapixel camera with Auto Focus and a 2.1-megapixel camera on the front. Take high-quality pictures and video or video chat
                with friends, family, and colleagues. Customize your Galaxy Tab S2 with the apps you use most. The Samsung Galaxy Essentials widget provides a collection of premium complimentary apps
                optimized for your tablet screen. Select and download the apps you want to instantly upgrade your tablet experience.</p>

            <a href='google.com'>Show more</a>




        </div>


        <Container fluid className='my-4 '>
            <h4>SHOPPING CART</h4>

            <div className='row  tik'>
                <p className='mt-3'>
                    🟢 <b>“Pinnapple Macbook Pro 2022 M1 / 512GB Dark Grey” </b>has been added to your cart.

                </p>


            </div>



        </Container>



        <Container fluid>



            <div className='row'>
            {/* <div className='col-md-4 w-25'>
                    <p className='text-center'></p>
                </div> */}

                <div className='col-md-4 w-25'>
                    <p className=''>PRODUCT NAME</p>
                </div>
                <div className='col-md-2 w-25'>
                    <p>PRICE</p>


                </div>
                <div className='col-md-2 w-25'>
                    <p>QUANTITY</p>


                </div>
                <div className='col-md-2 w-25'>
                    <p>SUB TOTAL</p>


                </div>
                <hr />


                <div className='row'>
                    {/* <div className='col-md-2 w-25 '>
                        <img src={i4} alt='a' /></div> */}

                    <div className='col-md-4 w-25 '>
                        <b>  <img src={i4} alt='a' height={35} width={35} /> Pinnaeple Macbook Pro 2022 <br />
                            M1/ 512GB</b>
                    </div>
                    <div className='col-md-2 w-25 h-25 '>
                        <b>$579.00</b>                </div>


                    <div className=' row col-md-2 w-25   ' >
                        <NavDropdown className='' title="1" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.4">
                                4
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>

                    <div className='col-md-2 w-25 '>
                        <b>$1,737.00</b>
                    </div>




                </div>











            </div>
            <hr/>


            <div className='row '>
                <div className='col d-flex justify-content-end gap-2'>
                <Button className='bg-success'>UPDATE CART</Button>
                <Button className='bg-dark'>REMOVE ALL</Button>
                </div>
            </div>






        </Container>

        <Checkout/>


    </>

    );
}

export default Multipage;