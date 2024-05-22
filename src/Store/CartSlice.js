import {createSlice}from '@reduxjs/toolkit'

const initialState=[];
export const CartSlice=createSlice({
  name:'Cart',
  initialState,
  reducers:{
    addCart(state,action){
      state.push(action.payload)
    },
    removeCart(state,action){
      console.log(state)
return state.filter(item=>item.id!==action.payload)
    },
   
   
  }
})

export const{addCart,removeCart}=CartSlice.actions
export default CartSlice.reducer