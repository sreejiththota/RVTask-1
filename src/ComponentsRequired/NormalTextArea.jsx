import React from 'react';

const TextArea = ({ value, onChange, placeholder }) => {
  const handleInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
