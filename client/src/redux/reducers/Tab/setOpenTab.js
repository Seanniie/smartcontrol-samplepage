import { createSlice } from '@reduxjs/toolkit';

//탭바 초기값(홈만 존재하는 상태)
const openMenu= [
    { id: 'Home'},
  ];

// Define the open tabs slice using createSlice
const setOpenTab = createSlice({
  name: 'setOpenTab',
  initialState: {value : openMenu},
  reducers: {
    addTab: (state, action) => {
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    },
    setActiveTabs: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { addTab, setActiveTabs } = setOpenTab.actions;
export default setOpenTab.reducer;
