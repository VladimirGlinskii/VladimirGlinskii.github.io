import Anchor from '@components/anchor';
import Section, { SectionTitle } from '@components/section';
import Skill from '@components/skill';
import { FC } from 'react';
import './skills-section.scss';
import english from '@assets/images/english.png';

const SkillsSection: FC = () => {
  return (
    <Section variant='alt' className='skills-section'>
      <Anchor id='skills' />
      <div className="content content-small">
        <SectionTitle>
          Мои навыки
        </SectionTitle>
        <Skill name='Английский язык' level={5} image={english} >
          <p>
            Легко читаю техническую документацию
          </p>
          <p>
            Могу донести мысль в текстовом виде
          </p>
          <p>
            Мало опыта в разговорном английском
          </p>
          <p>
            Среднее знание грамматики
          </p>
        </Skill>
      </div>
    </Section>
  );
};

export default SkillsSection;