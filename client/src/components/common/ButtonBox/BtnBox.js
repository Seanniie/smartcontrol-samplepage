import { RefreshOutlined, SaveOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";
import BtnBoxContainer from "./BtnBoxContainer";
import BtnBoxIcon from "./BtnBoxIcon";

//defaultProps
BtnBox.defaultProps = {
  isSearchShow: false,
  isSaveShow: false,
  isRefreshShow: false
};

export default function BtnBox({isSearchShow, isSaveShow, isRefreshShow}) {
  return (
    <BtnBoxContainer>
      <BtnBoxIcon display={isSearchShow ? "inherit" : "none"} icon={<SearchOutlined />}/>
      <BtnBoxIcon display={isSaveShow ? "inherit" : "none"} icon={<SaveOutlined />}/>
      <BtnBoxIcon display={isRefreshShow ? "inherit" : "none"} icon={<RefreshOutlined />}/>
    </BtnBoxContainer>
  );
}
