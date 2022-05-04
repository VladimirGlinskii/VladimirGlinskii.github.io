import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import './info-section-card.scss';

interface Props {
  image: string;
  variant: 'done' | 'in-progress';
}

const InfoSectionCard: FC<PropsWithChildren<Props>> = ({ image, variant, children }) => {
  const classes = classNames('info-section-card', `info-section-card-${variant}`);

  return (
    <div className={classes}>
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