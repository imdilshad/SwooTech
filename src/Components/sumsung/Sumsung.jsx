import { useEffect, useState } from "react";
import img1 from "../sumsung/1.png";
import img2 from "../sumsung/2.png";
import img3 from "../sumsung/3.png";
import img4 from "../sumsung/4.png";
import img5 from "../sumsung/side5.png";
import Symbol from "../Cart/Symbol.png";
import paypal from "../sumsung/paypal.png.png";
import Symbol2 from "../sumsung/Symbol2.png";
import campare from "../sumsung/compare.png";
import pay from "../sumsung/pay.png.png";
import car from "../sumsung/carlogo.png";
import "../sumsung/sumsung.css";
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios'

export default function AppSumsung() {
  const[products,setProducts]=useState([])
  const {id}=useParams()
  

 
 
  useEffect(()=>{
    const fetch= async()=>{
     try {
         let response=await axios.get(`/api/v1/product/${id}`).then(res=>res.data)
         console.log(response)
          setProducts(response.data)
          
         } catch (error) {
             console.log('this is error',error)
         }
     }
     fetch()
 } ,[])
 console.log(products)
  const [number, setNumber] = useState(1);
  const increment = () => {
    setNumber(number + 1);
  };
  return (
    <div className="row">
      <div className=" col-md-4 me-3">
        <div className="row d-flex flex-row justify-content-between">
          <button className="new-btn ms-5  mt-5 ">New</button>
          <button className="croos5 mt-5 me-3 "></button>
        </div>
        <img className="w-100" src={products?.mainImage?.url} alt="a" />
        <div className="row">
          <img className="sumsung-image" src={img1} alt="a" />
          <img className="sumsung-image" src={img2} alt="a" />
          <img className="sumsung-image" src={img3} alt="a" />
        </div>
      </div>

      <div className="col-md-5">
        <div className="mt-5 col ms-2">
          <div>
            <h3>{products.name}</h3>
          </div>
          <div>
            <h5>${products.price}</h5>
          </div>
          <div>
            <ul>
              <li>
                Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
              </li>
              <li> DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
              <li> Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 ms-2">
          <button className="free-btn me-5 ">FREE SHIPING</button>
          <button className="free-btn text-danger">FREE GIFT</button>
        </div>
        <hr />
        <div className="ms-2 ">
          <h5 className="d-flex flex-row">
            <b>COLOR :</b>
            <span className="text-secondary mt-1">
              <h6>Midnight blue</h6>
            </span>
          </h5>
        </div>

        <div className=" prize d-flex gap-1 ms-2">
          <div className=" colour-prize1 d-flex">
            <img className="sumsung-image" src={img1} alt="a" />
            <div className="me-2">
              Midnight <br /> blue <h6>$569.00</h6>
            </div>
          </div>
          <div className="colour-prize d-flex">
            <img className="sumsung-image" src={img2} alt="a" />
            <div className="me-2">
              Deep <br /> Purple <h6>$569.00</h6>
            </div>
          </div>
          <div className="colour-prize d-flex">
            <img className="sumsung-image" src={img3} alt="a" />
            <div className="me-2">
              Space <br /> Black <h6>$569.00</h6>
            </div>
          </div>
        </div>

        <div className="mt-5 ms-2">
          <h5 className="d-flex flex-row">
            <b>MEMORY SIZE :</b>
            <span className="text-secondary mt-1">
              <h6>128GB</h6>
            </span>
          </h5>
          <div className=" prize btn-container w-100 d-flex gap-5">
            <button className="storage-btn ">
              <b>64GB</b>
            </button>
            <button className="storage-btnCurrent">
              <b>128GB</b>
            </button>
            <button className="storage-btn ">
              <b>256GB</b>
            </button>
            <button className="storage-btn ">
              <b>512GB</b>
            </button>
          </div>
        </div>
        <hr />
        <div>
          <img className="offer-img w-100" src={img4} alt="a" />
        </div>
        <div className="mt-4 ms-3">
          <div>
            <b>SKU: </b>
            <span className="text-secondary">ABC025168</span>
          </div>
          <div>
            <b>Category: </b>
            <span className="text-secondary">Cell Phones & Tablets</span>
          </div>
          <div>
            <b>Brand: </b>
            <span>
              <a className="sumsunglink" href="www.sumsung.com">
                sumsung
              </a>
            </span>
          </div>
        </div>
        <div className="d-flex gap-3 mt-4 ms-3">
          <div>
            <i className=" icons fa-brands fa-twitter"></i>
          </div>
          <div>
            <i className=" icons fa-brands fa-facebook"></i>
          </div>
          <div>
            <i className=" icons fa-brands fa-instagram"></i>
          </div>
          <div>
            <i className=" icons fa-brands fa-youtube"></i>
          </div>
          <div>
            <i className=" icons fa-solid fa-basketball"></i>
          </div>
        </div>
      </div>

      <div className=" col-md-2 ">
        <div className="side-bar w-100 ">
          <div className="mt-5 ms-5 ">
            <h6 className=" text-secondary ">TOTAL PRICE:</h6> <h3>$609.00</h3>
          </div>
          <div className="mt-4 ms-4">
            <img className="side5" src={img5} alt="a" />
            <b className="text-danger">$49/m</b> in 12 months{" "}
            <a href="www.google.com">more</a>
          </div>
          <hr />
          <div className="mt-3 ms-5">
            <img src={Symbol} alt="a" />
            <span> in stock</span>
          </div>
          <div className="page-btn d-flex w-75 mt-4 ms-4 bg-white">
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
            <button className="add-cart-btn w-75 mt-4 ms-4">add to cart</button>
            <button className=" pay-pat-btn w-75 mt-4 ms-4">
              Buy With <img src={paypal} alt="a" />{" "}
            </button>
          </div>
          <div className="mt-3 ms-5">
            <img src={Symbol2} alt="a" />
            <span> WishList</span>
            <span className="ms-4">
              <img src={campare} alt="a" /> Compare
            </span>
          </div>
          <hr />

          <div className="ms-2 mb-2">
            <h6>Guaranteed Safe Checkout</h6>
            <img className="" src={pay} alt="a" height={30} width={200} />
          </div>
        </div>

        <div className="side-bar mt-2 h-25 w-100">
          <button className="quick-order-btn mt-5 ms-4">
            Quick Order 24/7
          </button>
          <h3 className="mt-3 ms-4">(025) 3886 25 16</h3>
        </div>
        <div className="d-flex flex-row">
          <img src={car} alt="a" />
          <h6 className="ms-3">Ships from United States</h6>
        </div>
      </div>
    </div>
  );
}
