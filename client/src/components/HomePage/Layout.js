// Layout.js
import React from 'react';
import NavbarComponent from './NavbarComponent';

const Layout = ({ children }) => {
    return (
        <div>
            <NavbarComponent />
            <div className="content">{children}</div>
        </div>
    );
};

export default Layout;
