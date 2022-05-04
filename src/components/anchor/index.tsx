import { FC } from 'react';
import './anchor.scss';

interface Props {
  id: string;
}

const Anchor: FC<Props> = ({ id }) => {
  return (
    <div id={id} className="anchor"></div>
  );
};

export default Anchor;