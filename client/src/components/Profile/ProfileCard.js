import React from "react";

export default function ProfileCard({ cardList, activeButton, handleButtonClick }) {
  return (
    <div className="col-md-3 col-xl-2">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">개인정보 관리</h5>
        </div>
        <div className="list-group list-group-flush">
          {cardList.map((button) => (
            <button key={button.id} className={`list-group-item list-group-item-action ${activeButton === button.id ? "active" : ""}`}
              onClick={() => handleButtonClick(button.id)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
