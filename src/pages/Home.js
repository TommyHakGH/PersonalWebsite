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
          IT, and Web design to satisfy the role in your company.  </p> 
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
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
            <span> JavaScript, Java, Python, C#, C, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;