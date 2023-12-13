import React, { useState } from 'react';
import './App.css';

function App() {
  const placeholders = [
    'Material Operation',
    'Sub Operation',
    'Placeholder Material',
    'Cutter Diameter',
    'Shank Diameter',
    'Length of Cuts',
    'Flutes',
    'Overall Length',
    'Overall Reach (LBS)',
    'Neck Diameter',
    'Coating',
  ];

  const [inputValues, setInputValues] = useState(Array(placeholders.length).fill(''));
  const [errorMessages, setErrorMessages] = useState(Array(placeholders.length).fill(''));

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    const newErrorMessages = [...errorMessages];
  
    if (index >= 3 && index <= 9) {
      const numericValue = value.replace(/\D/, '');
      if (numericValue !== value) {
        // Display alert for non-numeric input
        alert('Please enter only numeric values');
      } else {
        newErrorMessages[index] = '';
      }
      newInputValues[index] = numericValue;
    } else {
      newInputValues[index] = value;
      newErrorMessages[index] = '';
    }
  
    setInputValues(newInputValues);
    setErrorMessages(newErrorMessages);
  };
  

  const handleSubmit = () => {
    // Check for missing values
    if (inputValues.some((value) => !value.trim())) {
      alert('Please fill in all the details.');
      return;
    }

    // Validate if all values are entered
    if (inputValues.some((value) => !value.trim())) {
      alert('Please fill in all the details.');
      return;
    }

    // Handle submit logic (Send data to Firebase or perform other actions)
    console.log('Submitted values:', inputValues);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">WEB APPLICATION</h1>
      <div className="input-container">
        <br />
        {placeholders.map((placeholder, index) => (
          <div key={index} className="input-wrapper">
            <input
              type="text"
              className="curved-text-box"
              placeholder={placeholder}
              value={inputValues[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            {errorMessages[index] && (
              <span className="error-message">{errorMessages[index]}</span>
            )}
          </div>
        ))}
      </div>
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={inputValues.some((value) => !value.trim())}
      >
        Submit
      </button>

      {/* Result Container */}
      <div className="result-container">
        <div className="curved-rectangle">
          <p>Result Text</p>
        </div>
      </div>
    </div>
  );
}

export default App;
