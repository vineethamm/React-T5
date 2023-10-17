import React, { useState } from 'react';
import '../../src/App.css'; // Import the CSS file for styling

const AgeCalculator = () => {
  // Initialize state variables
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  // Function to calculate age
  const calculateAge = () => {
    // Calculate age based on the birthDate
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    const ageDiff = currentDate - birthDateObj;

    // Calculate age in years
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator-container">
      <h1>Age Calculator</h1>
      <label htmlFor="birthdate">Enter your date of birth:</label>
      <input
        type="date"
        id="birthdate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <br />
      <button
        onClick={calculateAge}
        style={{ backgroundColor: 'blue', color: 'white' }}
      >
        Calculate Age
      </button>
      {age && (
        <div className="age-result">
          <p>Your age is: {age} years</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
