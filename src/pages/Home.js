import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className= "home">
      <div className= "about">
        <h2> Hi, My Name is Tommy </h2>
        <div className= "career objective prompt"> <p>Enthusiastic and passionate individual with
          a completed degree in Bachelors of Science in Informatics with a concentration in Information Technology 
          from the State University at Albany. Aiming to use my skills and knowledge on Coding, Programming, 
          IT, and Web design to satisfy the role in you r company.  </p> 
          <LinkedInIcon cursor= 'pointer' pointer onClick= {event => window.location.href='https://www.linkedin.com/in/tommy-hak-716619253/'}/>
          <EmailIcon cursor= 'pointer' onClick= {event => window.location.href='https://mail.google.com/mail/?view=cm&fs=1&to=tommys.hak@gmail.com'}/>
          <GitHubIcon cursor= 'pointer' onClick = {event => window.location.href='https://github.com/TommyHakGH?tab=repositories'}/>
          </div>
      </div>
      <div className= "skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM, Material UI,
              Yarn, BootStrap, Style Componenets, Angular, JavaScript
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, MySQL, 
              MongoDB, Ruby on Rails
            </span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span> JavaScript, Java, Python, C#, C, TypeScript, SQL</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;