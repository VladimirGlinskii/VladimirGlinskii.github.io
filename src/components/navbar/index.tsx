import Logo from '@components/logo';
import * as React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="content navbar-content">
        <Logo />
        <div className="navbar-nav">
          <div className="navbar-item">
            Обо мне
          </div>
          <div className="navbar-item">
            Проекты
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;