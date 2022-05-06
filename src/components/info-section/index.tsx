import InfoSectionCard, { InfoSectionCardText } from '@components/info-section-card';
import Section, { SectionTitle } from '@components/section';
import { FC, useRef } from 'react';
import dev from '@assets/images/dev.png';
import diploma from '@assets/images/diploma.jpg';
import master from '@assets/images/master.png';
import './info-section.scss';
import Anchor from '@components/anchor';
import classNames from 'classnames';
import useOnScroll from 'hooks/use-on-scroll';

const InfoSection: FC = () => {
  return (
    <Section className='info-section'>
      <Anchor id='about' />
      <div className="content">
        <SectionTitle>
          Обо мне
        </SectionTitle>
        <div className="row info-section-cards">
          <div className="col col-33 col-mobile-100">
            <InfoSectionCard image={dev} variant='in-progress' className='info-section-card'>
              <InfoSectionCardText>
                В коммерческой разработке с декабря 2020 года
              </InfoSectionCardText>
            </InfoSectionCard>
          </div>
          <div className="col col-33 col-mobile-100">
            <InfoSectionCard image={diploma} variant='done' className='info-section-card'>
              <InfoSectionCardText>
                Окончил бакалавриат ОмГУ в 2021 году по направлению
                <p>
                  <em>
                    Прикладная математика и информатика
                  </em>
                </p>
              </InfoSectionCardText>
            </InfoSectionCard>
          </div>
          <div className="col col-33 col-mobile-100">
            <InfoSectionCard image={master} variant='in-progress' className='info-section-card'>
              <InfoSectionCardText>
                Учусь в магистратуре ОмГУ на том же направлении
              </InfoSectionCardText>
            </InfoSectionCard>
          </div>
        </div>
        <InfoSectionAbout />
      </div>
    </Section>
  );
};

const InfoSectionAbout: FC = () => {
  const ref = useRef(null);
  const isScrolled = useOnScroll(ref);
  const classes = classNames(
    'info-section-about',
    'fadeonscroll fadeonscroll-bottom',
    {
      'fadeonscroll-active': isScrolled
    }
  );

  return (
    <div ref={ref} className={classes}>
      <h3>
        Привет! Меня зовут Владимир и я <b>middle</b> <em>Front</em>-End разработчик в компании <span className='info-section-ronas'>RonasIT</span>.
      </h3>
      <p>
        На данный момент совмещаю работу с учебой в магистратуре <em>ФМИТ ОмГУ</em> по направлению <em>«Прикладная матeматика и информатика»</em>.
      </p>
      <p>
        О карьере программиста задумался летом после 10 класса, а активно программировать начал на 1 курсе.
        В конце второго курса прошел заочную школу компании <span className='info-section-thumbtech'>Тамтэк</span>,
        а уже на 3 курсе - очную воскресную школу по направлению <em>Back</em>-End разработки.
        Был принят стажером на двухмесячный интенсив, успешно защитил проект, но из-за эпидемии коронавируса прием в штат компании отложили.
      </p>
      <p>
        После интенсива решил изучить направление <em>Front</em>-End разработки.
        На 4 курсе был принят в штат компании <span className='info-section-ronas'>RonasIT</span> в качестве <b>junior</b> <em>Front</em>-End
        разработчика и работаю там по сей день.
      </p>
    </div>
  );
};

export default InfoSection;