import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { IconButton, Tab, Tabs } from "@mui/material";
import TabMenuConfig from "components/Tab/TabMenuConfig";
import { Close } from "@mui/icons-material";
import { setMenuId } from "redux/reducers/Tab/setActivatedMenu";
import { setActiveTabs } from "redux/reducers/Tab/setOpenTab";

//탭컨테이너, 메뉴가 오픈되면 탭이 추가된다
export default function TabContainer({actTab, crntOpnMenu}) {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(actTab);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
    dispatch(setMenuId(newValue));
  };

  const handleClose = useCallback((event, tabToDelete) => {
    //부모로 이벤트 버블링 방지
    event.stopPropagation();

    const tabToDeleteIndex = crntOpnMenu.findIndex((tab) => tab.id === tabToDelete.id);

    const updatedTabs = crntOpnMenu.filter((tab, index) => {
      return index !== tabToDeleteIndex;
    });

    const numTabs = updatedTabs.length;
    let previousTab = {};

    const currentIndex = updatedTabs.findIndex((tab) => tab.id === activeTab);

    if (currentIndex === -1 && tabToDeleteIndex === crntOpnMenu.length - 1) {
      previousTab = updatedTabs[numTabs - 1];
    } else if (currentIndex === -1 && tabToDeleteIndex !== crntOpnMenu.length - 1) {
      previousTab = updatedTabs[tabToDeleteIndex];
    } else if (tabToDeleteIndex <= currentIndex) {
      previousTab = updatedTabs[currentIndex];
    } else if (tabToDeleteIndex > currentIndex) {
      previousTab = updatedTabs[currentIndex];
    } else {
      previousTab = updatedTabs[0];
    }

    dispatch(setActiveTabs(updatedTabs));
    setActiveTab(previousTab.id);
    dispatch(setMenuId(previousTab.id));
  }, [activeTab, crntOpnMenu, dispatch]);

  useEffect(() => {
    setActiveTab(actTab);
  }, [actTab]);

  return (
    <Box id="tab-container" sx={{ whiteSpace: "nowrap", borderBottom: "1px solid #dee2e6" }}>
      <Tabs value={activeTab} onChange={handleChange} variant="scrollable">
        {crntOpnMenu.map((menu) => {
          const tabMenuConfig = TabMenuConfig.find((config) => config.id === menu.id);
          const label = tabMenuConfig ? tabMenuConfig.label : "";
          return (
            <Tab key={menu.id} value={menu.id}
              label={
                <Box>
                  <span>{label}</span>
                  {menu.id !== crntOpnMenu[0].id && (
                    <IconButton component="div" size="small" edge="end" onClick={(event) => handleClose(event, menu)}>
                      <Close fontSize="string"/>
                    </IconButton>
                  )}
                </Box>
              }
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
