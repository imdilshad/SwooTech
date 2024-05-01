import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import logo2 from './images/logo2.png'
import { IoIosHeartEmpty } from "react-icons/io";
import './Com.css'
import { FaSearch } from "react-icons/fa";

const Homenavtwo = () => {
   const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchSubmit = () => {
    // You can implement search functionality here
    console.log(`Search Query: ${searchQuery}, Selected Category: ${selectedCategory}`);
  };

  return (
    <Navbar expand="lg" className="bg">
    <Container>
      <Navbar.Brand   href="#home"><img className='' src={ logo2} alt='a'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto px-5" >
    
         
        <div className="bg-white rounded-pill ">
     
        <input className='back3 ms-3 '
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      
        <button className='back3 bg-white rounded-circle' type="submit" onClick={handleSearchSubmit}>
          <FaSearch />
        </button>
        <select className='  btn ' 
          name="category"
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>





        </Nav>
        <span className='back mx-2 '></span>
      </Navbar.Collapse>
      <span className=' mx-1 logo'>
      <Nav.Link href="#home">
          
  <IoIosHeartEmpty  className='back'/> </Nav.Link>


</span>
<span className='back  mx-2 logo'></span>
<span className='mx-2 '>
  <p>welcome <br/> <Nav.Link href="#home">
<h6>LOG IN/REGISTER</h6> </Nav.Link></p>
</span>

<div className='d-flex justify-content-end align-items-center '>
  <span className='back d-flex align-items-end justify-content-end '>
      <sapn  className="back2 bg-dark text-white d-flex align-items-center justify-content-center"><b>5</b></sapn>
  </span>
  <span className='mx-2'>
  <p>cart <br/>
<b>$1689.00</b></p>
</span>
</div>
    </Container>
  </Navbar>
  )
}

export default Homenavtwo