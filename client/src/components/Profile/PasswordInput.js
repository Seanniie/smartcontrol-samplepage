import React from 'react';
import { Box, Typography } from '@mui/material';
import { PriorityHigh } from '@mui/icons-material';

//defaultProps
PasswordInput.defaultProps = {
  label: 'label',
  onChange: ()=>{},
  error: null,
  value: '',
};

export default function PasswordInput({ label, value, onChange, error, inputName }) {
  
  const handleInputChange = (e) => {
    onChange(e);
  };

  return (
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        {label}
      </label>
      <input type="password" className="form-control" value={value} onChange={handleInputChange} name={inputName}/>
      {error && (
        <Box mt={'4px'} ml={'-7px'}>
          <PriorityHigh color="warning" fontSize="small" />
          <Typography variant="string" color={'#ed6c02'}>{error}</Typography>
        </Box>
      )}
    </div>
  );
}
