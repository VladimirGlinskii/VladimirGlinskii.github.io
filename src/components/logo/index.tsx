import classNames from 'classnames';
import { AnchorHTMLAttributes, FC } from 'react';
import './logo.scss';

const Logo: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className }) => {
  const classes = classNames('logo', className);

  return (
    <a href='/' className={classes}>
      <span className="logo-g">G</span>
      <span className="logo-v">V</span>
    </a>
  );
};

export default Logo;