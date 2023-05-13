import React from 'react'
import ProjectItem from "../components/ProjectItem"
import Proj1 from "../assets/Proj1.png"
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Project.css"


function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects </h1>
      <div className= "projectList">
        {ProjectList.map((project, idx) => {
          return (
          <ProjectItem name={project.name} image={project.image} />);
        })}
      </div>
    </div>
  );
  }

export default Projects;