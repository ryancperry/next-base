import React, { useState } from 'react';
import Link from 'next/link';

export default ({ setNoScroll }) => {
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
        <svg className="navbar_toggle_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><title>Navbar Toggle</title><path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/></svg>
      </button>
    </div>
  );
};
