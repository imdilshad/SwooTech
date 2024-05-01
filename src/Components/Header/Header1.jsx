import img from "../../assets/images/1.png"

export default function Header1() {
  return (
    <div expand="lg" className="bg- w-100 my-1 py-2 container-fluid Navbar-topLine">
      <nav aria-label="breadcrumb d-flex align-items-center flex-row justify-content-end"  >
       <div className="d-flex align-items-center flex-row justify-content-between">
       <div className="text-center ">
        
          <span> <b  className="d-md-none text-start ">Swoo</b></span>
          <span className="breadcrumb-item mx-5" aria-current="page">
            <span className="hotline"><b> Hotline 24/7</b></span>
          </span>
          <span className="  " aria-current="page" style={{marginLeft:'12px'}}>
            <b  className="nav-text">  (000)3886 25 16</b>
          </span>
        </div> 
        <div className="service d-flex align-items-center  w-50 justify-content-between ">
        <div className=" d-flex align-items-end justify-content-evenly gap-4">
          <span className="Nav-text fw-bold mx-3">
            Sell on swoo
          </span>
          <span className="active  nav-text mx-3 fw-bold" aria-current="page">
          Order Tracking
          </span>
        </div >
        <div className="d-flex align-items-center  " >
            <select name="currency " className=" mx-2 nav-select" id="currency" style={{fontSize:'13px'}}>
            <option value="usd"> USD</option>
            <option value="usd"> INR</option>
            <option value="usd"> Euro</option>
            </select>
            <span> <img src={img} alt="a" height={25} />
            </span> 

            <select name="Language" className=" mx-2 nav-select" id="Language" style={{fontSize:'13px'}}> 
            <option value="usd"> ENG</option>
            <option value="usd"> Hin</option>
            <option value="usd"> Fran</option></select>
        </div> 
       </div>
     </div>
      </nav>
    </div>
  );
}
