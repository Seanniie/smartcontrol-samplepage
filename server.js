
require("dotenv").config()
const express = require("express");
const app = express();
const axios = require('axios');
const path = require("path");

//env 파일에 따로 포트가 지정되어있지 않으면 80포트를 사용한다.
const port = process.env.PORT || 3001;
app.use(express.json());
//bodyParser 값일 시 node.js에 기본으로 내장된 queryString을 사용한다.
// true 값이니 qs 모듈을 설치하지 않는다면 false 값으로 따로 설정
app.use(express.urlencoded({ extended:false }));

app.listen(port, () => console.log(`Listening on port: ${port}`));

//app.use(express.static(path.join(__dirname, "..","client","build")));
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', function(req,res,next){
  if(req.path.includes("/api")){
    next();
  }else{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));  
  }
});

