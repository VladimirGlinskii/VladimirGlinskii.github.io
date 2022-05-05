import Anchor from '@components/anchor';
import Section, { SectionTitle } from '@components/section';
import Skill from '@components/skill';
import { FC } from 'react';
import './skills-section.scss';
import english from '@assets/images/english.png';
import htmlcss from '@assets/images/htmlcss.png';
import ts from '@assets/images/ts.png';
import react from '@assets/images/react.png';
import angular from '@assets/images/angular.png';

const SkillsSection: FC = () => {
  return (
    <Section variant='alt' className='skills-section'>
      <Anchor id='skills' />
      <div className="content content-small">
        <SectionTitle>
          Мои навыки
        </SectionTitle>
        <Skill name='Английский язык' level={5} image={english} className="skills-section-skill" >
          <p>
            Легко читаю техническую документацию
          </p>
          <p>
            Могу донести мысль в текстовом виде
          </p>
        </Skill>
        <Skill name='HTML / CSS' level={8} image={htmlcss} className="skills-section-skill" >
          <p>
            Уверенное знание HTML5/CSS3 (SCSS)
          </p>
          <p>
            Верстаю по макету страницы любой сложности
          </p>
        </Skill>
        <Skill name='JS / TS' level={9} image={ts} className="skills-section-skill" >
          <p>
            Глубокое знание javascript (+ typescript) как языка (ООП, замыкания, контекст, ES2021 и т. д.)
          </p>
          <p>
            Понимаю паттерны MVC и MVVM в реалиях frontend-разработки
          </p>
        </Skill>
        <Skill name='Angular' level={8} image={angular} className="skills-section-skill" >
          <p>
            Профессиональное знание Angular, а также связанных с ним библиотек и инструментов
          </p>
          <p>
            Имею опыт перевода приложения на Angular Universal в целях SEO
          </p>
        </Skill>
        <Skill name='React' level={3} image={react} className="skills-section-skill" >
          <p>
            Базовое знание React, а также некоторых связанных с ним библиотек и инструментов (Redux, Saga, Rx и др.)
          </p>
        </Skill>
      </div>
    </Section>
  );
};

export default SkillsSection;