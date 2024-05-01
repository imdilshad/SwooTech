import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Header3.css'
import { IoMdOpen } from 'react-icons/io';
import { Nav } from 'react-bootstrap';
import{NavLink} from 'react-router-dom' 



const Header3 = () => {
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


    
    <nav className="navbar px-md-3 Header3 d-flex justify-content-center  align-items-center ">
        
    <div className='d-flex justify-content-center'>
    <div className="bg-white m-0 search d-flex align-items-center   px-3   py-2 input-group  ">
      <select className='  nav-select bg-white' 
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
        <input className='form-control me-1 py-1 rounded-pill h-100 '
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
          <FaSearch   onClick={handleSearchSubmit} />
        
      </div>
    </div>


      <div className='d-flex justify-content-evenly container-fluid fw-bold  search-links' >
      <NavLink  className='Navbar-topLine nav-link' to={'/'} >FREE SHIPPING OVER $199</NavLink>
      <NavLink className='Navbar-topLine nav-link' to={'/'} >30 DAYS MONEY BACK </NavLink>
      <NavLink className='Navbar-topLine nav-link' to={'/'} >100% SECURE PAYMENT</NavLink>
      </div>
      
    </nav>
  );
};

export default Header3;
