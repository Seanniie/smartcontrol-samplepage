import React from 'react';
import { Box, Typography } from '@mui/material';
import { PriorityHigh } from '@mui/icons-material';

export default function PasswordInput({ value, onChange, error }) {
  
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        비밀번호
      </label>
      <input
        type="password"
        className="form-control"
        value={value}
        onChange={handleInputChange}
      />
      {error && (
        <Box mt={'4px'} ml={'-7px'}>
          <PriorityHigh color="warning" fontSize="small" />
          <Typography variant="string" color={'#ed6c02'}>
            {error}
          </Typography>
        </Box>
      )}
    </div>
  );
}
