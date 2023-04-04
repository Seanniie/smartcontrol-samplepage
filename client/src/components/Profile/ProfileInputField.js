import React from "react";

//defaultProps
ProfileInputField.defaultProps = {
  type: "text",
  readOnly: false,
  columnSize: 0,
  onChange: () => {},
  value: '',
};

function ProfileInputField({type, labelText, readOnly, columnSize, value, onChange, inputName}) {
  const columnClass = columnSize === 0 ? "" : `col-md-${columnSize}`;

  const handleInputChange = (e) => {
    onChange(e);
  };

  return (
    <div className={`mb-3 ${columnClass}`}>
      <label className="form-label">{labelText}</label>
      <input type={type} className="form-control" readOnly={readOnly} value={value} onChange={handleInputChange} name={inputName} />
    </div>
  );
}

export default ProfileInputField;