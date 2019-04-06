import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import '../../scss/styles.scss';

const Layout = ({ children, stopScroll, pageName }) => {
  const [noScroll, setNoScroll] = useState(false);

  useEffect(() => {
    setNoScroll(stopScroll);
  }, [stopScroll]);

  return (
    <div id="layout" className={`layout ${pageName}${noScroll ? ' no_scroll' : ''}`}>
      <Navbar setNoScroll={() => setNoScroll(!noScroll)} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
