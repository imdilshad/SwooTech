import { useLocation, useParams ,Link} from "react-router-dom";

export default function Header4 (){
  const {pathname}=useLocation()
 const pathnames= pathname.split('/').filter((x)=>x)
 console.log('this is pathnames',pathnames)
let breadcrumbs=''
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary my-3">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page"to={"/"}>Home / </Link>
        </li>
        {  pathnames.map((name,index)=>{
          breadcrumbs+=`/${name}`
          const isLast=index===pathnames.length-1
                return  ( 
                isLast?  <li className="nav-item" key={breadcrumbs}>
                  <Link className="nav-link text-secondary" aria-current="page">{name} </Link>
                </li>:<li className="nav-item " key={breadcrumbs}>
                  <Link className="nav-link  " aria-current="page"to={breadcrumbs} >{name}/</Link>
                </li>
                )
             })}
        
      </ul>
    </div>
  </div>
</nav>
    )
}