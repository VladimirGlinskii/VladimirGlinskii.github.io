import { FC } from 'react';
import './projects.scss';
import inDev from '@assets/images/in-dev.png';

const ProjectsPage: FC = () => {
  return (
    <div className="page projects">
      <div className="content">
        <img src={inDev} className='projects-dev' />
      </div>
    </div>
  );
};

export default ProjectsPage;
