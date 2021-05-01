import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ noPadding, children }) => (
  <>
    <Header />
    {noPadding ? children : <div className="layout">{children}</div>}
    <Footer />
  </>
);

export default Layout;
