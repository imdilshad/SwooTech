import {createSlice}from '@reduxjs/toolkit'

const initialState=[];
export const UserSlice=createSlice({
  name:'User',
  initialState,
  reducers:{
    addUser(state,action){
      state.push(action.payload)
    },
    remove(state,action){
      console.log(state)
return state.filter(item=>item.id!==action.payload)
    },
   
   
  }
})

export const{addUser,remove}=UserSlice.actions
export default UserSlice.reducer