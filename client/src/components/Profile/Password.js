import AlertDialog from 'components/common/AlertDialog';
import React, { useEffect, useState } from 'react';
import PasswordInput from './PasswordInput';

export default function Password() {
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = () => {
    console.log(currentPassword);
    console.log(newPassword);
    console.log(confirmPassword);
  };

  const handleCurrentPwd = (crntPwd) => setCurrentPassword(crntPwd);
  const handleNewPwd = (newPwd) => setNewPassword(newPwd);
  const handleConfirmPwd = (cnfmPwd) => setConfirmPassword(cnfmPwd);

  useEffect(()=>{
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if(newPassword===''){
        setError1(null);
    }else if (newPassword.includes(' ')){
        setError1('비밀번호는 공백 없이 입력해주세요.');
    } else if (!passwordRegex.test(newPassword)) {
        setError1('비밀번호는 8자 이상이어야 하며, 영문/숫자/특수문자를 모두 포함해야 합니다.');
    } else {
        setError1(null);
    }
  },[newPassword])

  useEffect(()=>{
    if(confirmPassword===''){
        setError2(null);
    }
    else if (newPassword !== confirmPassword) {
        setError2('새 비밀번호와 비밀번호 확인 값이 일치하지 않습니다.');
    } else {
        setError2(null);
    }
  },[newPassword, confirmPassword])

  useEffect(()=>{
    if(newPassword!== '' && confirmPassword !==''&& currentPassword !=='' && error1 == null && error2 == null){
        setIsDisabled(false);
    }else{
        setIsDisabled(true);
    }
  },[error1, error2, newPassword, confirmPassword, currentPassword])
  
  return (
    <div className="card">
      <div className="card-body">
        <PasswordInput label="현재 비밀번호" value={currentPassword} onChange={handleCurrentPwd} />
        <PasswordInput label="새 비밀번호" value={newPassword} onChange={handleNewPwd} error={error1} />
        <PasswordInput label="새 비밀번호 확인" value={confirmPassword} onChange={handleConfirmPwd} error={error2} />
        <AlertDialog buttonText="저장" title="저장" message="비밀번호를 변경하시겠습니까?" disabled={isDisabled}
            onSubmit={() => handleSubmit(currentPassword, newPassword, confirmPassword)}/>
      </div>
    </div>
  );
}
