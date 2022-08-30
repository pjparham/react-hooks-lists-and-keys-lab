import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {


const renderProjectItem = projects.map((project) => {
  return <ProjectItem technologies={project.technologies} name={project.name} about={project.about} key={project.id} />
})

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderProjectItem}</div>
    </div>
  );
}

export default ProjectList;
