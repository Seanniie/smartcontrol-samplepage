import AlertDialogModal from 'components/common/Modal/AlertDialogModal';
import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import PasswordInput from './PasswordInput';

export default function Password() {
  
  //렌더링될때다 불필요한 initialValues 렌더링을 막기위해 useMemo 사용
  const initialValues = useMemo(() => ({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    error1: null,
    error2: null
  }),[]);

  const [isDisabled, setIsDisabled] = useState(true);
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(()=>{
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if(formValues.newPassword===''){
      setFormValues(prevState => ({ ...prevState, 'error1': null }));
    }else if (formValues.newPassword.includes(' ')){
      setFormValues(prevState => ({ ...prevState, 'error1': '비밀번호는 공백 없이 입력해주세요.' }));
    } else if (!passwordRegex.test(formValues.newPassword)) {
      setFormValues(prevState => ({ ...prevState, 'error1': '비밀번호는 8자 이상이어야 하며, 영문/숫자/특수문자를 모두 포함해야 합니다.' }));
    } else {
      setFormValues(prevState => ({ ...prevState, 'error1': null }));
    }

    if(formValues.confirmPassword===''){
      setFormValues(prevState => ({ ...prevState, 'error2': null }));
    }else if (formValues.newPassword !== formValues.confirmPassword) {
      setFormValues(prevState => ({ ...prevState, 'error2': '새 비밀번호와 비밀번호 확인 값이 일치하지 않습니다.' }));
    } else {
      setFormValues(prevState => ({ ...prevState, 'error2': null }));
    }
  },[formValues.newPassword, formValues.confirmPassword]);

  useEffect(()=>{
    if(formValues.newPassword!== '' && formValues.confirmPassword !==''&& formValues.currentPassword !=='' && formValues.error1 == null && formValues.error2 == null){
        setIsDisabled(false);
    }else{
        setIsDisabled(true);
    }
  },[formValues]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formValues);
    setIsDisabled(true);
    setFormValues(initialValues);
  };
    
  return (
    <div className="card">
      <div className="card-body">
        <PasswordInput label="현재 비밀번호" value={formValues.currentPassword} onChange={handleInputChange} inputName="currentPassword"/>
        <PasswordInput label="새 비밀번호" value={formValues.newPassword} onChange={handleInputChange} error={formValues.error1} inputName="newPassword"/>
        <PasswordInput label="새 비밀번호 확인" value={formValues.confirmPassword} onChange={handleInputChange} error={formValues.error2} inputName="confirmPassword"/>
        <AlertDialogModal buttonText="저장" title="저장" message="비밀번호를 변경하시겠습니까?" disabled={isDisabled}
          onSubmit={() => handleSubmit()}/>
      </div>
    </div>
  );
}
