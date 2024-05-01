import {createSlice}from '@reduxjs/toolkit'

const initialState=[];
export const tokenSlice=createSlice({
  name:'token',
  initialState,
  reducers:{
    add(state,action){
      state.push(action.payload)
    },
    remove(state,action){
      console.log(state)
return state.filter(item=>item.id!==action.payload)
    },
   
   
  }
})

export const{add,remove}=tokenSlice.actions
export default tokenSlice.reducer