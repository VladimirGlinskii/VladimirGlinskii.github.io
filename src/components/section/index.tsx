import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import './section.scss';

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
  variant?: 'default' | 'alt';
}

const Section: FC<Props> = ({ children, className, variant, ...rest }) => {
  const classes = classNames('section', className, `section-${variant || 'default'}`);

  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
};

export const SectionTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...rest }) => {
  const classes = classNames('section-title', className);

  return (
    <h2 className={classes} {...rest}>
      {children}
    </h2>
  );
};

export default Section;