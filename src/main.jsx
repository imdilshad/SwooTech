import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter,useNavigate} from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import CartMain from './Components/Cart/CartMain.jsx'
import Registration from './Components/SignUp/Registration.jsx'
import Checkout from './Components/Checkout/Checkout.jsx'
import Phonetab from './Components/Products/Phonetab.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import { Provider } from 'react-redux'
import About from './Components/About/About.jsx'
import SingleProductMain from './Components/sumsung/SingleProductMain.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Admin from './Admin.jsx'
import store from './Store/Store'



// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[{
//     path:'',
//     element:<Home/>
//   },
// {
//   path:'/login',
//   element:<Login/>
// },
// {
//   path:'/signup',
//   element:<Registration/>
// },
// {
//   path:'/cart',
//   element:<CartMain/>
// },
// {
//   path:'products',
//   element:<Phonetab/>
// },
// {
//   path:'/about',
//   element:<About/>,
  
// },
// {
//   path:'/contact',
//   element:<Contact/>
// },
// {
//   path:'/checkout',
//   element:<Checkout/>
// },
// {
//   path:'/single',
//   element:<SingleProductMain/>
// },
// {
//   path:'/profile',
//   element:<Profile/>
// },
// {
//   path:'/admin',
//   element:
//     <Admin/>,
   
// },

// ]
// }])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  {/* <RouterProvider  router={router}/> */}
  <App/>
</Provider>,
  
)