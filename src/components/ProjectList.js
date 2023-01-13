import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects  }) {
  console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" >
        {/* render ProjectItem components here
       {projects.map(project => (
        // <h1 key={project.id}>{project.name}</h1>
        <ProjectItem key={project.id} project={project}/>
         ))} */}
         {projects.map((projects) => {
          return ( <ProjectItem key={projects.id} name={projects.name} about={projects.about} technologies={projects.technologies}/>)})}
      </div>
    </div>
  );
}

export default ProjectList;
