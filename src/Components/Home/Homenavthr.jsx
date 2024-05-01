import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoMenuSharp } from 'react-icons/io5';
import Dropdown from 'react-bootstrap/Dropdown';



function Homenavthr() {
  return (
    <Navbar className='bg d-flex justify-content-center '>
           <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <IoMenuSharp className='ms-2 mx-3'/> list categories 
      </Dropdown.Toggle>

      <Dropdown.Menu>
<h5 className='text-danger text-center'>SALE 40% OFF</h5>
        <Dropdown.Item href="#/action-1"></Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

<Nav className='ms-5 gap-4'>
    <NavDropdown title='Homes'></NavDropdown>
    <NavDropdown title='Pages'></NavDropdown>
    <NavDropdown title='Products'></NavDropdown>



</Nav>

<span className='bg2 text-white ms-5'>
Hotline 24/7 <b>(025) 3886 25 16</b>
</span>

<Nav className='ms-5'>
<NavDropdown   title='USD'></NavDropdown>|

<NavDropdown  title='USD'></NavDropdown>

</Nav>





    </Navbar>
   
  );
}

export default Homenavthr;