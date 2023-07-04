import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    const newInput = calculate(input, value);
    setInput(newInput);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          className="input-display"
          type="text"
          value={input.next || input.total || '0'}
          readOnly
        />
      </div>
      <div className="keypad">
        <Button className="key" value="AC" handleClick={handleClick} />
        <Button className="key" value="+/-" handleClick={handleClick} />
        <Button className="key" value="%" handleClick={handleClick} />
        <Button className="key key-red" value="÷" handleClick={handleClick} />
        <Button className="key" value="7" handleClick={handleClick} />
        <Button className="key" value="8" handleClick={handleClick} />
        <Button className="key" value="9" handleClick={handleClick} />
        <Button className="key key-red" value="x" handleClick={handleClick} />
        <Button className="key" value="4" handleClick={handleClick} />
        <Button className="key" value="5" handleClick={handleClick} />
        <Button className="key" value="6" handleClick={handleClick} />
        <Button className="key key-red" value="-" handleClick={handleClick} />
        <Button className="key" value="1" handleClick={handleClick} />
        <Button className="key" value="2" handleClick={handleClick} />
        <Button className="key" value="3" handleClick={handleClick} />
        <Button className="key key-red" value="+" handleClick={handleClick} />
        <Button className="key key-0" value="0" handleClick={handleClick} />
        <Button className="key" value="." handleClick={handleClick} />
        <Button className="key key-red" value="=" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
