import { createSlice } from '@reduxjs/toolkit';

//사이드바 메뉴구성
const menuData = [
  {
    id: "Home", //메뉴아이디
    title: "홈",  //메뉴타이틀(사용자에게 보여지는부분)
  },
  {
    id: "P01", //"P"arent
    title: "부모01",
    children: [
      {
        id: "C0101",  //"C"hild
        title: "자식0101",
        children: [
          {
            id: "G010101",
            title: "샘플페이지1",
          },
          {
            id: "G010102",
            title: "샘플페이지2",
          },
        ]
      },
      {
        id: "C0102",
        title: "자식0102",
        children: [
          {
            id: "G010201",
            title: "샘플페이지3",
          },
        ]
      },
    ],
  },
  {
    id: "P02",
    title: "부모02",
    children: [
      {
        id: "C0201",
        title: "자식0201",
        children: [
          {
            id: "G020101",
            title: "샘플페이지4",
          },
          {
            id: "G020102",
            title: "샘플페이지5",
          },
        ]
      },
    ],
  },
  {
    id: "P03",
    title: "부모03",
    children: [
      {
        id: "C0301",
        title: "샘플페이지6",
      },
      {
        id: "C0302",
        title: "샘플페이지7",
      },
    ],
  },
  {
    id: "P04",
    title: "부모04",
    children: [
      {
        id: "C0401",
        title: "샘플페이지8",
      },
      {
        id: "C0402",
        title: "샘플페이지9",
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

export default getSidebarSlice.reducer;
