import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './calculator';
import Home from './Home';
import Quote from './Quote';
import Navigation from './Navigate';
import Footer from './Footer';

const LinkRouter = () => (
  <Router>
    <Navigation />
    <div>
      <Routes>
        <Route index Component={Home} />
        <Route path="/calculator" Component={Calculator} />
        <Route path="/quote" Component={Quote} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default LinkRouter;
