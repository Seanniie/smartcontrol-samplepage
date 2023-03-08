import { createSlice } from '@reduxjs/toolkit';
 
const setMenuSlice = createSlice({
  name:'setMenuSlice',
  initialState: {value : true},
  reducers:{
      setMenuOpen:(state,action)=>{
        state.value = action.payload;
      }
    }
});

export default setMenuSlice;