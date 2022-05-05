import classNames from 'classnames';
import { CSSProperties, FC, HTMLAttributes } from 'react';
import './skill.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: 'right' | 'left';
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  name: string;
  image: string;
}

const Skill: FC<Props> = ({ className, direction, children, name, image, level, ...rest }) => {
  const classes = classNames('skill', `skill-${direction || 'right'}`, className);
  const levelColor = `hsl(${(level / 10) * 120}, 100%, 50%)`;

  return (
    <div {...rest} style={{ '--level-color': levelColor } as CSSProperties} className={classes}>
      <div className="skill-header">
        <h3 className="skill-title">
          {name}
        </h3>
        <div className="skill-level">
          {level} / <b>10</b>
        </div>
      </div>
      <div className="row skill-body">
        <div className="col col-75 col-mobile-100">
          <div className="skill-content">
            {children}
          </div>
        </div>
        <div className="col col-25 col-mobile-100">
          <img src={image} className="skill-image" />
        </div>
      </div>
    </div>
  );
};

export default Skill;