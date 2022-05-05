import AppLink from '@components/link';
import Logo from '@components/logo';
import { FC } from 'react';
import './navbar.scss';

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="content navbar-content">
        <Logo className='navbar-logo' />
        <div className="navbar-nav">
          <AppLink to="/#about" className="navbar-item navbar-link">
            Обо мне
          </AppLink>
          <AppLink to="/#skills" className="navbar-item navbar-link">
            Навыки
          </AppLink>
          <AppLink to="/projects" className="navbar-item navbar-link">
            Проекты
          </AppLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;