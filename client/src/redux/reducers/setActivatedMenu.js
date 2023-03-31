import { createSlice } from '@reduxjs/toolkit';


// Define the open tabs slice using createSlice
const setActivatedMenu = createSlice({
  name: 'setActivatedMenu',
  initialState: {value : 'Home',},
  reducers: {
    setMenuId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMenuId } = setActivatedMenu.actions;
export default setActivatedMenu.reducer;
