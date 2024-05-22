import "./frequent.css";
import Symbol from "./span.plus.png";
import img2 from "./prod6.jpg.png";
import img3 from "./prod7.jpg.png";
import cartsymbol  from './cartSymbol.png'
import side1 from './side1.png'
import side2 from './side2.png'
import img1 from "./1.png";

export default function AppFrequent() {
  return (
    <div className="row mt-3 container-fluid">
      <div className="mt-5 ms-4">
        <h5>
          <b>FREQUENTLY BOUGHT TOGETHER</b>
        </h5>
      </div>
      <div className="col-md-7 ">
        <div className="row">
          <div className="col-md-6  d-flex mt-5 ms-2">
            <div>
              <img src={img1} alt="a" height={170} width={170} />
              <img src={Symbol} alt="a" />
            </div>
            <div>
              <img src={img2} alt="a" height={170} width={170} />
              <img src={Symbol} alt="a" />
            </div>
            <div>
              <img src={img3} alt="a" height={170} width={170} />
            </div>
          </div>
          {/* <div className="col-md-2">
            <h6 className="text-secondary fs-6 mb-2">TOTAL PRICE</h6>
            <h3>
              <b>$609.00</b>
            </h3>
            <div className="w-100 mt-4">
              <button className="cart-btn">ADD TO CART</button>
              
            </div>
            <div className="mt-3">
                <img src={cartsymbol} alt="a" />
                <span> Ad all to Wishlist</span>
            </div>
          </div> */}
          <div className="row w-100 mt-5 ">
            <span className="w-100 d-flex">
              {" "}
              <input className="ms-5 " type="checkbox  " />
              <p className="ms-2">
                This item: Somseng Galatero X6 Ultra LTE 4G/128 Gb, Black
                Smartphone <b className="text-danger">( $569.00 )</b>
              </p>
            </span>
            <span className="w-100 d-flex">
              {" "}
              <input className="ms-5 " type="checkbox  " />
              <p className="ms-2">
                BOSO 2 Wireless On Ear Headphone{" "}
                <b className="text-danger">( $369.00 )</b>
              </p>
            </span>
            <span className="w-100 d-flex">
              {" "}
              <input className="ms-5 " type="checkbox  " />
              <p className="ms-2 ">
                Opplo Watch Series 8 GPS + Cellular Stainless Stell Case with
                Milanese Loop <b className="text-danger">( $129.00 )</b>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="ms-4">
          <img src={side1} alt="" />
        </div>
        <div className="ms-4"><img src={side2} alt="" /></div>
      </div>
    </div>
  );
}
