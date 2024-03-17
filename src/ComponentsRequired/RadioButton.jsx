import React from 'react';

const RadioButton = ({ value, onChange }) => {
  const handleInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        value="RadioButton1"
        checked={value === 'RadioButton1'}
        onChange={handleInputChange}
      />
      Radio Button-1
      <input
        type="radio"
        value="RadioButton2"
        checked={value === 'RadioButton2'}
        onChange={handleInputChange}
      />
      Radio Button-2
    </div>
  );
};

export default RadioButton;
