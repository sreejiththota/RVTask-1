import React from 'react';

const PasswordInput = ({ value, onChange, placeholder }) => {
  const handleInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <input
      type="password"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

export default PasswordInput;

