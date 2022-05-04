import Anchor from '@components/anchor';
import Section, { SectionTitle } from '@components/section';
import { FC } from 'react';
import './skills-section.scss';

const SkillsSection: FC = () => {
  return (
    <Section variant='alt' className='skills-section'>
      <Anchor id='skills' />
      <div className="content">
        <SectionTitle className=''>
          Мои навыки
        </SectionTitle>
      </div>
    </Section>
  );
};

export default SkillsSection;