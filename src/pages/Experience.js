import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor= "#3e497a">
        <VerticalTimelineElement 
        className= "vertical-timeline-element--education" 
        date="2016 - 2023"
        iconStyle={{background: "3e497a", color: "#fff"}}
        icon = {<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> 
          University At Albany SUNY, Albany, NY 
          </h3>
          <p>
            Achieved Bachelors of Science degree in Informatics; 
            Concentration In Information Technology.
          </p>

        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
  )
}

export default Experience;