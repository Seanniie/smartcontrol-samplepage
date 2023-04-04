import { createSlice } from '@reduxjs/toolkit';


const gdCd= [
  
  { id: 'A01', label: '(사천)APPLE'         , gnCd : 'B01' , gCode : 'C01'},
  { id: 'A01', label: '(남해)APPLE'         , gnCd : 'B02' , gCode : 'C02'},
  { id: 'A02', label: '(진주)STRAWBERRY'    , gnCd : 'B03' , gCode : 'C03'},
  { id: 'A02', label: '(전주)STRAWBERRY'    , gnCd : 'B04' , gCode : 'C04'},  
  { id: 'A02', label: '(울산)STRAWBERRY'    , gnCd : 'B05' , gCode : 'C05'}, 
  { id: 'A03', label: '(서울)BANANA'        , gnCd : 'B06' , gCode : 'C06'},
  { id: 'A04', label: '(대구)WATERMELON'    , gnCd : 'B07' , gCode : 'C07'},
  { id: 'A05', label: '(경기)KOREAN MELON'  , gnCd : 'B08' , gCode : 'C08'},
  { id: 'A06', label: '(하남)MELON'         , gnCd : 'B09' , gCode : 'C09'},
  { id: 'A07', label: '(미사)MANGO'         , gnCd : 'B10' , gCode : 'C10'},
  
];

const getGdCd = createSlice({
  name:'getgdCd',
  initialState: {value : gdCd},
});

export default getGdCd.reducer;
