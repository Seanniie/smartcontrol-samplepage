import SearchBoxContainer from "components/common/SearchBox/SearchBoxContainer";
import React from "react";
import SelectBox from "../common/SearchBox/SelectBox";

export default function Sample8SearchBoxContainer() {

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  return (
    <SearchBoxContainer>
      <SelectBox itemList={names} title={"권한"} defaultValue={'Carlos Abbott'}/>
    </SearchBoxContainer>
  );
}
