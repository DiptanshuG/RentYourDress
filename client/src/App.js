import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
     
    </Router>
  );
};

export default App;
