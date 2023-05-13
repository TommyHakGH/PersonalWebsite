import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work"
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

        <VerticalTimelineElement 
        className= "vertical-timeline-element--education" 
        date="2018 - 2021"
        iconStyle={{background: "3e497a", color: "#fff"}}
        icon = {<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> 
          Shift Leader - Uncommon Grounds, Albany, NY 
          </h3>
          <p>
            Lead and maintain flow of traffic through the store
            Helped customers at front register
            Lead and direct a team of workers.
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className= "vertical-timeline-element--education" 
        date="2019 - 2021"
        iconStyle={{background: "3e497a", color: "#fff"}}
        icon = {<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> 
          Hudson Valley Communnity College, Troy, NY
          </h3>
          <p>
            Attended College for transfer credits to SUNY Albany.
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className= "vertical-timeline-element--education" 
        date="2019 - Present"
        iconStyle={{background: "3e497a", color: "#fff"}}
        icon = {<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> 
          Great Connections - Freelance Webdesigner Consultant/ WebDeveloper
          </h3>
          <p>
            2019-2022, website redesign consultant, currently overseeing redesign and development of final website
          </p>

        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
  )
}

export default Experience;