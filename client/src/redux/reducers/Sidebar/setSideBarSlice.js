import { createSlice } from '@reduxjs/toolkit';

//사이드바 open, close 상태값 set
const setSideBarSlice = createSlice({
  name:'setSideBarSlice',
  initialState: {value : false},
  reducers:{
      setSideBarOpen:(state,action)=>{
        state.value = action.payload;
      }
    }
});

export const { setSideBarOpen } = setSideBarSlice.actions;
export default setSideBarSlice.reducer;