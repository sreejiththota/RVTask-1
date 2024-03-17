import React, { useState } from 'react';
import TextArea from './ComponentsRequired/NormalTextArea.jsx';
import PasswordInput from './ComponentsRequired/PasswordInputType.jsx';
import RadioButton from './ComponentsRequired/RadioButton.jsx';
import Dropdown from './ComponentsRequired/Dropdown.jsx';
import './App.css'; 

function App() {
  const [formData, setFormData] = useState({
    textArea: '',
    password: '',
    radio: '',
    dropdown: ''
  });

  const handleFormDataChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', textDecoration: 'underline' }}>
      <h1>Task-1</h1>
    <div className="container"> {}
      <h1 className='heading' style={{marginBottom: '0px'}}>1.Normal Text Area</h1>
      <TextArea
        value={formData.textArea}
        onChange={value => handleFormDataChange('textArea', value)}
        placeholder="Please Enter The Text here...."
      />
      <div>
        <h2 className='heading'>2.Password Input Type</h2>

      <PasswordInput
        value={formData.password}
        onChange={value => handleFormDataChange('password', value)}
        placeholder="Password"
      />
      </div>
      <div> 
        <h3 className='heading'>3.Radio Button</h3>
      <RadioButton
        value={formData.radio}
        onChange={value => handleFormDataChange('radio', value)}
      />
      <div style={{marginTop: '20px'}}>
        <h4 className='heading'>4.Drop down</h4>
      <Dropdown
        value={formData.dropdown}
        onChange={value => handleFormDataChange('dropdown', value)}
        options={['First Option', 'Second Option', 'Third Option']}
      />
    </div> 
    </div>
    </div>
    </div>
  );
}

export default App;