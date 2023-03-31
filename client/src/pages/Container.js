import React from "react";
import Header from "components/Header/Header";
import TabContainer from "components/Tab/TabContainer";
import { useSelector } from "react-redux";
import Content from "components/Tab/Content";

//사이드바를 제외한 전체영역
export default function Container() {
  const crntOpnMenu = useSelector(state => state.tabMenu.value);
  const actTab = useSelector((state) => state.activateTab.value);
  const isSideBarOpen = useSelector((state) => state.sideBarState.value);
  
  return (
    <>
      <Header crntOpnMenu={crntOpnMenu} isSideBarOpen={isSideBarOpen}/>
      <TabContainer crntOpnMenu={crntOpnMenu} actTab={actTab}/>
      <Content actTab={actTab}/>
    </>
  );
}
