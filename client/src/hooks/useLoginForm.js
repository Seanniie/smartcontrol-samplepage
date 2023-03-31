import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useLoginForm () {

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
        navigate("/");
      } else {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    };
  
    //비밀번호 인풋 "눈" 버튼 클릭시 호출되는 함수
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    
    return {
      userId,
      setUserId,
      password,
      setPassword,
      rememberMe,
      setRememberMe,
      showPassword,
      handleShowPassword,
      handleSubmit,
    };
  }