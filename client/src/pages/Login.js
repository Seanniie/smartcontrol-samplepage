import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../App.css";
import useLoginForm from "hooks/useLoginForm";
import { useDispatch } from "react-redux";
import { setSideBarOpen } from "redux/reducers/setSideBarState";

//로그인창, useLoginForm hooks 사용
export default function Login () {

  const dispatch = useDispatch();
  const {
    userId,
    setUserId,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    showPassword,
    handleShowPassword,
    handleSubmit,
  } = useLoginForm();

  useEffect(() => {
    dispatch(setSideBarOpen(false));
  }, [dispatch]);

  return (
      <Box>
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
  );
};

