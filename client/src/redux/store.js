import {configureStore} from '@reduxjs/toolkit';
import getSidebarSlice from './reducers/getSidebarSlice';
import setActivatedMenu from './reducers/setActivatedMenu';
import setOpenTab from './reducers/setOpenTab';
import setSideBarSlice from './reducers/setSideBarState';
import getProductCd from './reducers/getProductCd';
import getProdPlace from './reducers/getProdPlace';
import getGdCd from './reducers/getGdCd';

const store = configureStore({
  reducer:{
    //사이드바열려있는지 닫혀있는지
    sideBarState: setSideBarSlice,
    //사이드바메뉴데이터들
    sideBarTitles: getSidebarSlice,
    //현재열려있는탭메뉴
    tabMenu:setOpenTab,
    //현재 활성화 되어있는 탭
    activateTab: setActivatedMenu,
    //물품 코드
    productCd : getProductCd,
    //production place
    prodPlace : getProdPlace,
    //product by place
    gdCd : getGdCd,
  }
});

export default store;