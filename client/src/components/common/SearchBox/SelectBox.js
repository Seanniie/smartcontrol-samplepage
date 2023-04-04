import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

//defaultProps
SelectBox.defaultProps = {
  itemList: ['default','default','default'],
  defaultValue: '',
  title:'title',
};

export default function SelectBox({itemList, title, defaultValue}) {

  const [selectedItem, setSelectedItem] = useState(defaultValue === '' ? itemList[0] : defaultValue);

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  console.log(selectedItem)

  return (
    <FormControl sx={{m:'3.5px', width:'200px'}}>
      <InputLabel size="small" variant="filled" sx={{fontSize:'13px'}}>{title}</InputLabel>
      <Select size="small" variant="filled" disableUnderline
        sx={{
          height:'45px', 
          border:'1px solid #e2e2e1', 
          borderRadius:'8px',
          bgcolor:'#fff'
        }}
        value={selectedItem}
        onChange={handleChange}>
        {itemList.map((item, index) =>{
          return <MenuItem key={index} value={item}>{item}</MenuItem> 
        })}
      </Select>
    </FormControl>
  );
}
