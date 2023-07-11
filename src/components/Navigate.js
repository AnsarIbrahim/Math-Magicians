import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="contain">
    <div className="head-nav">
      <h1>Math Magicians</h1>
    </div>
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navigation;
