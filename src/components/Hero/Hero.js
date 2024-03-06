import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <h6>Hey!, I am </h6>
          Aditya Pratap Singh<br />
        </SectionTitle>
        <SectionText>
        A budding web developer with a passion for creative solutions.  Interested in learning new tech stacks and programming languages.
        </SectionText>
        <a href="https://drive.google.com/file/d/1Lbn6Zv3TCllC0AEeCryzOUavTjfYEBGn/view?usp=sharing"><Button onClick={props.handleClick}>Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
