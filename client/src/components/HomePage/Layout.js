// Layout.js
import React from 'react';
import NavbarComponent from './NavbarComponent';
import ScrollToTop from '../ScrollToTopButton/ScrollToTop';

const Layout = ({ children }) => {
    return (
        <div>
            <NavbarComponent />
            <div className="content">{children}</div>
            <ScrollToTop/>
        </div>
    );
};

export default Layout;
