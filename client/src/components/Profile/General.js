import AlertDialogModal from "components/common/Modal/AlertDialogModal";
import ProfileInputField from "components/Profile/ProfileInputField";
import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";

export default function General() {

    //렌더링될때다 불필요한 initialValues 렌더링을 막기위해 useMemo 사용
    const initialValues = useMemo(() => ({
        userId: "admin",
        department: "",
        job: "",
        userName: "System Administrator",
        email: "",
        phone: "",
        etc: "test",
    }),[]);

    const [isDisabled, setIsDisabled] = useState(true);
    const [formValues, setFormValues] = useState(initialValues);
    //데이터가 초기값과 달라진게 있는지 검사, 달라졌으면 버튼을 활성화시키고 달라진게 없으면 비활성화시킨다
    useEffect(() => {
        const isFormChanged = Object.keys(formValues).some(
            (key) => formValues[key] !== initialValues[key]
        );
        setIsDisabled(!isFormChanged);
    }, [formValues, initialValues]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = () => {
        console.log(formValues);
        setIsDisabled(true);
    };

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <ProfileInputField labelText="사용자 ID" readOnly={true} value={formValues.userId} inputName="userId"/>
                            <div className="row">
                                <ProfileInputField labelText="부서" columnSize={6} value={formValues.department} onChange={handleInputChange} inputName="department" />
                                <ProfileInputField labelText="업무" columnSize={6} value={formValues.job} onChange={handleInputChange} inputName="job" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <ProfileInputField labelText="사용자 명" columnSize={8} value={formValues.userName} onChange={handleInputChange} inputName="userName" />
                    <ProfileInputField type="email" labelText="이메일" columnSize={8} value={formValues.email} onChange={handleInputChange} inputName="email" />
                    <ProfileInputField type="tel" labelText="전화" columnSize={8} value={formValues.phone} onChange={handleInputChange} inputName="phone" />
                    <ProfileInputField labelText="기타" value={formValues.etc} columnSize={8}  onChange={handleInputChange} inputName="etc" />
                    <AlertDialogModal buttonText="저장" title="저장" message="저장하시겠습니까?" disabled={isDisabled} 
                        onSubmit={() => handleSubmit(formValues)}/>
                </div>
            </div>
        </>
    );
};