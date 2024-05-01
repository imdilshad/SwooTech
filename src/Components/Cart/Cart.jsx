import { useState } from "react";
import img1 from "../Cart/cart1.png";
import img2 from "../Cart/cart2.png";
import img3 from "../Cart/cart3.png";
import Symbol from "../Cart/Symbol.png";
import "./Cart.css";

export default function AppCart() {
  const [number, setNumber] = useState(1);
  const increment = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <div className="row ">
  
        <div className="contain row col-md-8">
          <div className="col-md-4 me-5 ">
            <button className="btn1  ">save $199.00</button>
            <img
              src={img3}
              className="card-img-top"
              alt="a"
              style={{ height: 400, width: 400 }}
            />
          </div>
          <div className="card-body col-md-4 d-flex flex-column justify-content-center align-items-start ms-5">
            <p className="card-text">
              SROK Smart Phone <br /> 128GB , Oled Retina
            </p>
            <h5 className="text-danger mb-3">$579.00</h5>
            <div className="page-btn d-flex">
              <button
                className="btn bg-white text-black "
                onClick={() => {
                  if (number > 1) setNumber(number - 1);
                }}
              >
                -
              </button>
              <button className="btn bg-white text-black">{number}</button>
              <button
                className="btn bg-white text-black"
                onClick={() => {
                  setNumber(number + 1);
                }}
              >
                +
              </button>
            </div>
            <div>
              <button className="freshop ">Free shopping</button>
            </div>
            <div className="mt-3">
              <img src={Symbol} alt="a" />
              <span> in stock</span>
            </div>
          </div>
          <div className="col-md-2 d-flex">
            <div className="cross1 me-2"></div>
            <div className="cross"></div>
          </div>
        </div>

        <div className="row mb-3  col-md-4 border border-2 border-success rounded justify-item  contaiber-fluid ">
         <div className="container justify-item flex-column text-start  gap-5">
          <h6 className="text-start w-100">Order Summary</h6>
          <div className="px-3 d-flex justify-content-between text-start w-100 align-item-center">
            <span className="text-secondary">Sub Total:</span>
            <span>$1002</span>
          </div>
          <div className="px-3 d-flex justify-content-between text-start w-100 align-item-center">
            <span className="text-secondary">Shopping Estimate:</span>
            <span>$1002</span>
          </div>
          <div className="px-3 d-flex justify-content-between text-start w-100 align-item-center">
            <span className="text-secondary">tax Estimate:</span>
            <span>$1002</span>
          </div>
          <div className="px-3 d-flex justify-content-between text-start w-100 align-item-center">
            <span className="fw-bold">Order Total</span>
            <span>$1002</span>
          </div>
         </div>
        
          
          
        </div>
      </div>
    </>
  );
}
