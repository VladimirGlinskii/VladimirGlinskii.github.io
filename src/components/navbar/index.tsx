import AppLink from '@components/link';
import Logo from '@components/logo';
import { FC } from 'react';
import './navbar.scss';

const Navbar: FC = () => {
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
};

export default Navbar;