import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ setNoScroll }) => {
  const [mobileNavToggled, setMobileNavToggled] = useState(false);
  return (
    <div className="navbar">
      <p className="navbar_title">Navbar Title</p>
      <Link href="/">
        <a id="navbar_logo" className="navbar_logo">
          Navbar Logo
        </a>
      </Link>
      <nav className={`navbar_nav${mobileNavToggled ? ' toggled' : ''}`}>
        <ul className="navbar_list">
          <li>
            <button
              className="navbar_close"
              onClick={() => {
                setMobileNavToggled(false);
                setNoScroll();
              }}
              type="button"
            />
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Link 1
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Link 2
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Link 3
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Link 4
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="navbar_toggle"
        onClick={() => {
          setMobileNavToggled(true);
          setNoScroll();
        }}
        type="button"
      >
        <img src="/static/icons/toggle.svg" className="navbar_toggle_icon" alt="Nav toggle" />
      </button>
    </div>
  );
};

export default Navbar;
