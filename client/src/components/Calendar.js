import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function Calender(props) {
   
  const [date, setDate] = useState(dayjs());

  const handleDateChange = (date) => {
    setDate(date);
    props.onChange({name: props.name , value : date.format('YYYYMMDD')}); 
  }  
  return (
  <Box sx={{ml: 1 }}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker  
            label={props.label ? props.label : ''}
            value={date}   
            format={props.format ? props.format : "YYYY-MM-DD"}       
            onChange={handleDateChange}                    
          />        
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}