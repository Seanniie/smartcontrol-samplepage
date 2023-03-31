import React, { useState } from "react";
import ProfileCard from "components/Profile/ProfileCard";
import General from "components/Profile/General";
import Password from "components/Profile/Password";
import Permission from "components/Profile/Permission";

const cardList = [
  { id: "general", label: "일반", component: <General /> },
  { id: "password", label: "암호", component: <Password /> },
  { id: "permission", label: "화면 권한 보기", component: <Permission /> },
];

export default function Profile() {
  const [activeButton, setActiveButton] = useState(cardList[0].id);

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  const activeComponent = cardList.find((item) => item.id === activeButton)?.component;


  return (
    <>
      <div className="row">
        <ProfileCard cardList={cardList} activeButton={activeButton} handleButtonClick={handleButtonClick} />
        <div className="col-md-9 col-xl-10">{activeButton && activeComponent}</div>
      </div>
    </>
  );
}
