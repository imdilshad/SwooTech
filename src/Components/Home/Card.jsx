import React from 'react';

import './Home.css'
const ProductCard = ({ productName, rating, imageSrc, price, purchaseCount,price2 ,off}) => {
  return (
    <div className="product-card ">
      <div className="header fs-5 text-center"> <b>{productName}</b></div>
      <div className="rating text-center"> {rating}</div>
     <div className='d-flex justify-content-center'> <img className='image-card'   src={imageSrc} alt={productName}   /></div>
      <div className="price text-danger price2 text-center"><b> ${price} - <span className='text-dark'>{price2} </span> 
      <span className='bg-danger text-dark rounded'>{off}%off</span>       </b></div>
      <div className="purchase-count ms-5"> {purchaseCount} Purchases</div>
    </div>
  );
};

export default ProductCard;
