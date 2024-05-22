import {configureStore} from '@reduxjs/toolkit'
import tokenReducer from './tokenSlice'
import UserReducer from './UserSlice'
import CartReducer from './CartSlice'
const store=configureStore({
  reducer:{
    token:tokenReducer,
     User:UserReducer,
     Cart:CartReducer,
  }
})
export default store