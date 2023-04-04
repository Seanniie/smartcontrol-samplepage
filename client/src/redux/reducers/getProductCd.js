import { createSlice } from '@reduxjs/toolkit';

//물품 코드

const productCd= [
  { id: 'A01', ProdNm: 'APPLE'},
  { id: 'A02', ProdNm: 'STRAWBERRY' },
  { id: 'A03', ProdNm: 'BANANA' },
  { id: 'A04', ProdNm: 'WATERMELON' },
  { id: 'A05', ProdNm: 'KOREAN MELON' },
  { id: 'A06', ProdNm: 'MELON' },
  { id: 'A07', ProdNm: 'MANGO' },
  
];

const getProductCd = createSlice({
  name:'getProductCd',
  initialState: {value : productCd},
});

export default getProductCd.reducer;
