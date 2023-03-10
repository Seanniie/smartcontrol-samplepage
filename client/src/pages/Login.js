import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../App.css";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    width: '100%',
    minWidth: 0,
    transition: 'margin-left .35s ease-in-out, left .35s ease-in-out, margin-right .35s ease-in-out, right .35s ease-in-out',
    background: '#fff',
    flexDirection: 'column',
    overflow: 'hidden',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    WebkitBoxAlign: 'center',
  },
  loginBox: {
    display: 'flex',
    flexDirection: 'column',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
  },
}));


export default function Login () {
 
  const classes = useStyles();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //로컬스토리지에서 아이디랑 비밀번호 불러옴
    const storedUserId = localStorage.getItem("userId");
    const storedPassword = localStorage.getItem("password");

    //둘다 존재하면 set, 비밀번호기억 체크 true
    if (storedUserId && storedPassword) {
      setUserId(storedUserId);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId === "admin" && password === "1") {
      if (rememberMe) {//로그인 submit할때 기억하기 체크 상태면 로컬스토리지에 아이디, 비번 저장
        localStorage.setItem("userId", userId);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("userId");
        localStorage.removeItem("password");
      }

      //홈으로 navigate
      navigate("/home");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  //비밀번호 인풋 "눈" 버튼 클릭시 호출되는 함수
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className={classes.main}>
      <Box className={classes.loginBox}>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <TextField 
              className="login-textfield" 
              label="아이디" 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="form-field">
            <TextField
              className="login-textfield"
              label="비밀번호"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: <IconButton onClick={handleShowPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
              }}
            />
          </div>
          <div className="form-field">
            <FormControlLabel control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>} label="비밀번호 기억하기"/>
          </div>
          <div className="form-field">
            <Button variant="contained" className="login-textfield" type="submit">Login</Button>
          </div>
        </form>
      </Box>
    </Box>
  );
};

