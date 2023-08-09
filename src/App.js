// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      < h1 >Calculator</h1>
      <div className="calculator">
        <div className="result">{result}</div>
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '=', '+'].map((value) => (
          <div
            key={value}
            className="button"
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
