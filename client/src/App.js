import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/HomePage/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
// import NotFound from './NotFound';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./styles/scrollbar.css"

const App = () => {
  AOS.init();

  return (
    <Router>
          <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
        </Layout>
    </Router>
  );
};

export default App;

