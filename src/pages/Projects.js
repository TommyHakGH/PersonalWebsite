import React from 'react'
import ProjectItem from "../components/ProjectItem"
import Proj1 from "../assets/Proj1.png"
import "../styles/Project.css"

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects </h1>
      <div className= "projectList">
        <ProjectItem name="CSGO website" image={Proj1}/>
        <ProjectItem />
      </div>
    </div>
  )
}

export default Projects;