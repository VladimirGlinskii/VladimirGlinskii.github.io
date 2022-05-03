import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import './link.scss';

interface Props extends Omit<NavLinkProps, 'className'> {
  className?: string;
  variant?: 'default';
}

const AppLink: React.FC<Props> = ({ to, children, className, ...props }) => {
  const classes = 'link link-default ' + className;

  return (
    <NavLink to={to}
      className={classes}
      {...props}>
      {children}
    </NavLink>
  );
};

export default AppLink;