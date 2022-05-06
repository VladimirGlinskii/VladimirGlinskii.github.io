import classNames from 'classnames';
import useOnScroll from 'hooks/use-on-scroll';
import { FC, PropsWithChildren, useRef, HTMLAttributes } from 'react';
import './info-section-card.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;
  variant: 'done' | 'in-progress';
}

const InfoSectionCard: FC<Props> = ({ image, variant, children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isScrolled = useOnScroll(ref);

  const classes = classNames(
    'info-section-card',
    'fadeonscroll fadeonscroll-bottom',
    `info-section-card-${variant}`,
    {
      'fadeonscroll-active': isScrolled
    },
    className
  );

  return (
    <div ref={ref} className={classes}>
      <div className="info-section-card-image">
        <img src={image} />
      </div>
      {children}
    </div>
  );
};

export const InfoSectionCardText: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="info-section-card-text">
      {children}
    </div>
  );
};

export default InfoSectionCard;