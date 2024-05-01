import {configureStore} from '@reduxjs/toolkit'
import tokenReducer from './tokenSlice'
import UserReducer from './UserSlice'
const store=configureStore({
  reducer:{
    token:tokenReducer,
     User:UserReducer
  }
})
export default store