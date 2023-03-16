import { createSlice } from '@reduxjs/toolkit';

const menuData = [
  {
    id: "1",
    icon: "PrecisionManufacturing",
    title: "수요 계획",
    children: [
      {
        id: "1-1",
        title: "사전 분석 (EDA)",
        children: [
          {
            id: "1-1-1",
            title: "예측 대상 분석",
            to: "1-1-1" 
          },
          {
            id: "1-1-2",
            title: "실적 분석",
            to: "1-1-2"
          },
        ]
      },
      {
        id: "1-2-1",
        title: "보고서",
        children: [
          {
            id: "1-2-1",
            title: "예측 에러",
            to: "1-2-1"
          },
        ]
      },
    ],
  },
  {
    id: "2",
    icon: "CellTowerSharp",
    title: "보충 계획",
    children: [
      {
        id: "2-1",
        title: "시뮬레이션",
        children: [
          {
            id: "2-1-1",
            title: "계획 정책",
            to: "2-1-1"
          },
        ]
      },
    ],
  },
];

const getSidebarSlice = createSlice({
  name:'getSidebarSlice',
  initialState: {value : menuData},
  reducers:{
    
    }
});



export default getSidebarSlice;