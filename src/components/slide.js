 import * as React from "react"
 import { Carousel } from "./carousel"
 import DateTime from './dateTime';

 const Item = ({title, content, link, linkTitle}) => 
    <div style={{minWidth: '100%'}}>
        <h1>{title}</h1>
        <section 
          style={{width: '100%'}}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {
          link && linkTitle && <p>{linkTitle} <a href={link} target='_blank'>{link}</a></p>
        }
    </div>;

const Slide = ({ date, time, title, author }) =>
  <>
    <p>{`WWCode Frontend presents - ${title} by ${author}. Join us on the following date and time:`}</p>
    <DateTime date={date} time={time} />
    <Carousel>
      <Item 
        title="Code of Conduct"
        content="
          <p>WWCode is an inclusive community, dedicated to providing an empowering experience for everyone who participates in or supports our community, regardless of gender, gender identity and expression, sexual orientation, ability, physical appearance, body size, race, ethnicity, age, religion, socioeconomic status, caste, creed, political affiliation, or preferred programming language(s).</p>

          <p>Our events are intended to inspire women to excel in technology careers, and anyone who is there for this purpose is welcome. We do not tolerate harassment of members in any form. Our Code of Conduct applies to all WWCode events and online communities.</p>" 

        linkTitle="Read the full version and access our incident report form" 
        link="https://www.womenwhocode.com/codeofconduct"
      />
      <Item title="Our Mision" content="Inspiring women to excel in technology careers."/>
      <Item title="Our Vision" content="A world where diverse women are better represented as engineers and tech leaders."/>
      <Item
        title="Our Values"
        content="
          <p>1. Focus on the mission</p>
          <p>2. Live Leadership</p>
          <p>3. Punch above your weight</p>
          <p>4. Inclusion at the core</p>
        "
      />
      <Item title="Our Target" content="Engineers with two or more years of experience looking for support and resources to strengthen their influence and levelup in their careers."/>    
    </Carousel>
  </>
 
 export default Slide
 