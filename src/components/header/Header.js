import React from 'react';
import Banner from './Banner';
import Nav from './Nav';
import './styles/header.css';

function Header() {
  return (
    <header>
      <Nav />
      <Banner />
    </header>
  );
}

export default Header;
