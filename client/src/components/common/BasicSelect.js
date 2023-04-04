import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function BasicSelect(props) {
 
  const prodCd = useSelector((state)=> state.productCd.value);
  const [value, setValue] = useState('');
  const changeValue = (event) => {
    setValue(event.target.value);
    props.onChange({name: props.name , value : event.target.value});   
  }    
  return (
    <Box sx={{ minWidth: 200, m: 1 }} size="small">
      <FormControl fullWidth>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={value}
          label={props.label}
          onChange={changeValue}
        >
        {prodCd.map((cd) =>{
              return <MenuItem key = {cd.id} value={cd.id}>{cd.ProdNm}</MenuItem> 
            } 
        )}
        </Select>
      </FormControl>
    </Box>
  );
}