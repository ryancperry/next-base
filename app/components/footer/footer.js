import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <p>Footer content goes here.</p>
      <p>&copy;{`${new Date().getFullYear()} `}Some Entity</p>
      <Link href="/">
        <a id="logo">Footer link</a>
      </Link>
    </footer>
  );
};

export default Footer;
