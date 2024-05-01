import "./Rated.css";
import img1 from "./rated1.png";
import img2 from "./rated2.png";
import img3 from "./1.png";
import img4 from "./1.png";
import img5 from "./2.png";
import img6 from "./3.png";
import img7 from "./rated3.png";
import img8 from "./reted4.png";
import img9 from "./tab1.png";
import img10 from "./tab2.png";

import Symbol from "./Symbol.png";

export default function AppRated() {
  return (
    <div className="row">
      <div className="col-md-2">
        <div className="col-md-2 d-flex justify-content-between w-100">
          <button className="btn1 mt-5 ms-2 ">save $199.00</button>{" "}
          <div className="cross mt-5 ms-2"></div>
        </div>
        <img
          src={img1}
          className="card-img-top"
          alt="a"
          style={{ height: 200, width: 200 }}
        />
        <div className="card-body ms-2  ">
          <p className="card-text">
            <b>SROK Smart Phone 128GB , Oled Retina</b>
          </p>
          <h5 className="text-danger mb-3">$579.00</h5>
          <div>
            <button className="freshop  w-75">Free shopping</button>
          </div>
          <div className="mt-3">
            <img src={Symbol} alt="a" />
            <span> in stock</span>
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="col-md-2 d-flex justify-content-between w-100">
          <button className="new-btn mt-5 ms-2  ">New</button>

          <div className="cross mt-5 ms-2"></div>
        </div>
        <img
          src={img2}
          className="card-img-top"
          alt="a"
          style={{ height: 200, width: 200 }}
        />
        <div className="card-body ms-2  ">
          <p className="card-text">
            <b>
              aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB
            </b>
          </p>
          <h5 className="text-dark mb-3">$979.00 - $1,259.00</h5>
          <div>
            <button className="freshop1  w-75 rounded ">$2.98 shopping</button>
          </div>
          <div className="mt-3">
            <img src={Symbol} alt="a" />
            <span> in stock</span>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="row d-flex flex-row justify-content-end">
          <button className="croos5 mt-5 me-3 "></button>
        </div>
        <img className="w-100" src={img3} alt="a" height={200} width={200} />
        
        <div className="card-body ms-2  ">
          <p className="card-text">
            <b>OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS</b>
          </p>
          <h5 className="text-danger mb-3">$659.00</h5>
          <div>
            <button className="freshop me-5 ">Free shopping</button>
            <button className="freshop   text-danger">Free Gift</button>
          </div>
          <div className="mt-3">
            <img src={Symbol} alt="a" />
            <span> in stock</span>
          </div>
          <div className="row mb-3">
          <img className="sumsung-image" src={img4} alt="a" />
          <img className="sumsung-image" src={img5} alt="a" />
          <img className="sumsung-image" src={img6} alt="a" />
        </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="col-md-2 d-flex justify-content-between w-100">
          <button className="btn1 mt-5 ms-2 ">save $199.00</button>

          <div className="cross mt-5 ms-2"></div>
        </div>
        <img
          src={img7}
          className="card-img-top"
          alt="a"
          style={{ height: 200, width: 200 }}
        />
        <div className="card-body ms-2  ">
          <p className="card-text">
            <b>Xiamoi Redmi Note 5, 64GB</b>
          </p>
          <h5 className="text-danger mb-3">$1,239.00 </h5>
          <div>
            <button className="freshop me-5 ">Free shopping</button>
          </div>
          <div className="mt-3">
            <span> Contact</span>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="row d-flex flex-row justify-content-end">
          <button className="croos5 mt-5 me-3 "></button>
        </div>
        <img className="w-100" src={img8} alt="a" height={200} width={200} />

        <div className="card-body ms-2  ">
          <p className="card-text">
            <b>Microsute Alpha Ultra S5 Surface 128GB 2022, Sliver</b>
          </p>
          <h5 className="text-danger mb-3">$1,729.00</h5>
          <div>
            <button className="freshop me-5 ">Free shopping</button>
          </div>
          <div className="mt-3">
            <span> Contact</span>
          </div>
          <div className="row mb-3">
            <img className="sumsung-image" src={img9} alt="a" />
            <img className="sumsung-image" src={img10} alt="a" />
          </div>
        </div>
      </div>
    </div>
  );
}
