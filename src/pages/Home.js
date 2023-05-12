import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';

function Home() {
  return (
    <div className= "home">
      <div className= "about">
        <h2> Hi, My Name is Tommy </h2>
        <div className= "career objective prompt"> <p>Enthusiastic and passionate individual working towards 
          a completed Bachelors of Science degree from the State University at Albany. Aiming to use my skills 
          and knowledge on Coding, Programming, IT, and Web design to satisfy the role in your company.  </p> 
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
          </div>
      </div>
      <div className= "skills"></div>
    </div>
  )
}

export default Home;