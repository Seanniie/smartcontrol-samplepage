import {configureStore} from '@reduxjs/toolkit';
import getGdCd from './reducers/getGdCd';
import getProdPlace from './reducers/getProdPlace';
import getProductCd from './reducers/getProductCd';
import getSidebarSlice from './reducers/Sidebar/getSidebarSlice';
import setSideBarSlice from './reducers/Sidebar/setSideBarSlice';
import setActivatedMenu from './reducers/Tab/setActivatedMenu';
import setOpenTab from './reducers/Tab/setOpenTab';


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