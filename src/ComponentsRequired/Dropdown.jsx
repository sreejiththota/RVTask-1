import React from 'react';

const Dropdown = ({ value, onChange, options }) => {
  const handleInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <select value={value} onChange={handleInputChange}>
      <option value="" disabled hidden>Please choose an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
