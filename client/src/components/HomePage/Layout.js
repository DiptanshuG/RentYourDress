// Layout.js
import React from 'react';
import NavbarComponent from './NavbarComponent';
import ScrollToTop from '../ScrollToTopButton/ScrollToTop';
import Footer from "../Footer"

const Layout = ({ children }) => {
    return (
        <div>
            <NavbarComponent />
            <div className="content">{children}</div>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default Layout;
