import * as React from 'react';
import { Box } from "@mui/system";
import ComboSrchSelect from 'components/ComboSrchSelec';
import BasicSelect from 'components/BasicSelect';
import Calender from 'components/Calendar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function SamplePage9() {  
  const [formValues, setFormValues] = useState({
    fromDate: '',
    toDate: '' ,
    prodCd: '',
    placeCd: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };   

  console.log('formValues.fromDate ======>' + formValues.fromDate);
  console.log('formValues.toDate ======>' + formValues.toDate);
  console.log('formValues.prodCd ======>' + formValues.prodCd);
  console.log('formValues.placeCd ======>' + formValues.placeCd);

  return (   
    <Box sx={{maxWidth:'1500' }}>
      <Box sx={{ width: 'auto' , m : 1}}>      
        <Stack direction="row" spacing={2} 
                sx={{
                display: 'flex',
                justifyContent: 'flex-end',        
                bgcolor: 'background.paper',
              }}  >
          <Button variant="outlined" >검색</Button>   
          <Button variant="outlined">초기화</Button>  
        </Stack>
      </Box>
      <Box sx={{ width: 'auto' , m : 1, borderRadius: '5px',  border: '1px solid grey', borderColor: "divider"}}>
        <Box sx={{display: 'inline-flex',  pl: '10px'}}>
          <Calender label = '시작일' name = 'fromDate'  onChange ={handleFormChange} />
          <Calender label = '마지막일' name = 'toDate' onChange ={handleFormChange}/>
          <BasicSelect label = 'ProductCode' name= 'prodCd' onChange ={handleFormChange}/>
          <ComboSrchSelect label = 'PlaceCode' name= 'placeCd' data = 'prodPlace' type = 'place' onChange ={handleFormChange}/>   
        </Box>     
      </Box> 
    </Box> 
  );
};

