import classNames from 'classnames';
import * as React from 'react';
import { NavHashLink, NavHashLinkProps } from 'react-router-hash-link';
import './link.scss';

interface Props extends Omit<NavHashLinkProps, 'className'> {
  className?: string;
  variant?: 'default';
}

const AppLink: React.FC<Props> = ({ to, children, className, variant, ...props }) => {
  const classes = classNames('link', `link-${variant || 'default'}`, className);

  return (
    <NavHashLink to={to}
      className={classes}
      {...props}>
      {children}
    </NavHashLink>
  );
};

export default AppLink;