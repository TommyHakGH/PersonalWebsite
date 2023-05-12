import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor= "#3e497a">
        <VerticalTimelineElement 
        className= "vertical-timeline-element--education" 
        date="2012 - 2016"
        iconStyle={{background: "3e497a", color: "#fff"}}
        icon = {<SchoolIcon />}>

        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
  )
}

export default Experience;