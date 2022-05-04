import { FC } from 'react';
import './main.scss';
import me from '@assets/images/me2.jpeg';
import Section from '@components/section';
import InfoSection from '@components/info-section';
import SkillsSection from '@components/skills-section';

const MainPage: FC = () => {
  return (
    <div className="page main">
      <Section className="main-top">
        <h1>
          Глинский Владимир
        </h1>
        <div className="main-me-container">
          <div className="main-me">
            <img src={me} />
          </div>
        </div>
        <h2>
          <em>Front</em>-End разработчик
        </h2>
      </Section>
      <InfoSection />
      <SkillsSection />
    </div>
  );
};

export default MainPage;
