import { createSlice } from '@reduxjs/toolkit';
 
const setSideBarSlice = createSlice({
  name:'setSideBarSlice',
  initialState: {value : false},
  reducers:{
      setSideBarOpen:(state,action)=>{
        state.value = action.payload;
      }
    }
});

export default setSideBarSlice;