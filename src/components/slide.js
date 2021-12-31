 import * as React from "react"
 import { Carousel } from "./carousel"
 import DateTime from './dateTime';

 const Item = ({title, content}) => 
    <div style={{minWidth: '100%', whiteSpace: 'nowrap'}}>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>;

const Slide = ({ date, time }) =>
  <>
    <DateTime date={date} time={time} />
    <Carousel>
      <Item title="Code of Conduct" content="WWCode Frontend code of conduct"/>
      <Item title="Mision" content="WWCode Frontend mision"/>
      <Item title="Vision" content="WWCode Frontend vision"/>
      <Item title="Values" content="WWCode Frontend values"/>
      <Item title="Target" content="WWCode Frontend target"/>    
    </Carousel>
  </>
 
 export default Slide
 