import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function ComboSrchSelect(props) {

  const result = useSelector((state) => state[props.data].value);

  const [inputValue, setInputValue] = useState('');
    //console.log("inputValue =====>" + inputValue);
    
    const handleDateChange = (event, newInputValue) => {
      setInputValue(newInputValue);
      console.log(newInputValue);
      props.onChange({name: props.name , value : newInputValue }); 
    }  
  return (   
      <Box sx={{ minWidth: 200 , m: 1 }} size="small">
        <Autocomplete
          disablePortal
          inputValue={inputValue}
          onInputChange={handleDateChange}   
          id={props.id ? props.id : "controllable-states-demo"}
          options={result}
          getOptionLabel={(option) => option[props.type] ? option[props.type] : ''}              
          renderInput={(params) => <TextField {...params} label= {props.label ? props.label : ''} />}
        />
      </Box>
    
  );
}