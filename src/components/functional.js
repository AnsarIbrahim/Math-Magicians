import React from 'react';
import './calculator.css';

const functional = () => (
  <div className="calculator">
    <div className="display">
      <input className="input-display" type="text" value="0" readOnly />
    </div>
    <div className="keypad">
      <input className="key" type="button" value="AC" />
      <input className="key" type="button" value="+/-" />
      <input className="key" type="button" value="%" />
      <input className="key key-red" type="button" value="/" />
      <input className="key" type="button" value="7" />
      <input className="key" type="button" value="8" />
      <input className="key" type="button" value="9" />
      <input className="key key-red" type="button" value="x" />
      <input className="key" type="button" value="4" />
      <input className="key" type="button" value="5" />
      <input className="key" type="button" value="6" />
      <input className="key key-red" type="button" value="-" />
      <input className="key" type="button" value="1" />
      <input className="key" type="button" value="2" />
      <input className="key" type="button" value="3" />
      <input className="key key-red" type="button" value="+" />
      <input className="key key-0" type="button" value="0" />
      <input className="key" type="button" value="." />
      <input className="key key-red" type="button" value="=" />
    </div>
  </div>
);

export default functional;
