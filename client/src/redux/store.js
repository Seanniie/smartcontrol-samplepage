import {configureStore} from '@reduxjs/toolkit';
import setMenuSlice from './reducers/setMenuState';

const store = configureStore({
  reducer:{
    MenuState: setMenuSlice.reducer,
  }
});

export default store;