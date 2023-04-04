import { createSlice } from '@reduxjs/toolkit';

//물품 코드
const prodPlace= [
  
  { id: 'A01', place: '사천'   , gnCd : 'B01'},
  { id: 'A01', place: '남해'   , gnCd : 'B02'},
  { id: 'A02', place: '진주'   , gnCd : 'B03'},
  { id: 'A02', place: '전주'   , gnCd : 'B04'},  
  { id: 'A02', place: '울산'   , gnCd : 'B05'}, 
  { id: 'A03', place: '서울'   , gnCd : 'B06'},
  { id: 'A04', place: '대구'   , gnCd : 'B07'},
  { id: 'A05', place: '경기도' , gnCd : 'B08'},
  { id: 'A06', place: '하남'   , gnCd : 'B09'},
  { id: 'A07', place: '미사'   , gnCd : 'B10'},
  
];

const getProdPlace = createSlice({
  name:'getProdPlace',
  initialState: {value : prodPlace},
});

export default getProdPlace.reducer;
