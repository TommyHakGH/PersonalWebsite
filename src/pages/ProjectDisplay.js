import React from 'react'
import { useParams } from 'react-router-dom'
import {} from "../helpers/ProjectList"

function ProjectDisplay() {
    const { id } = useParams()
    const project = ProjectList[id]
  return (
    <div></div>
  )
}

export default ProjectDisplay