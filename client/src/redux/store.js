import {configureStore} from '@reduxjs/toolkit';
import getSidebarSlice from './reducers/getSidebarSlice';
import setSideBarSlice from './reducers/setSideBarState';

const store = configureStore({
  reducer:{
    sideBarState: setSideBarSlice.reducer,
    sideBarTitles: getSidebarSlice.reducer,
  }
});

export default store;