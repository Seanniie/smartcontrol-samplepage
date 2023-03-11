import {configureStore} from '@reduxjs/toolkit';
import setSideBarSlice from './reducers/setSideBarState';

const store = configureStore({
  reducer:{
    SibeBarState: setSideBarSlice.reducer,
  }
});

export default store;