import AppLink from '@components/link';
import Logo from '@components/logo';
import * as React from 'react';
import './navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="content navbar-content">
        <Logo />
        <div className="navbar-nav">
          <AppLink to="/about" className="navbar-item">
            Обо мне
          </AppLink>
          <AppLink to="/projects" className="navbar-item">
            Проекты
          </AppLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;