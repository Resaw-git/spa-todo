import React, { SyntheticEvent } from "react";
import "./projects.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {selectProject} from "../../services/actions/project";
import { IProject } from "../../utils/types";

function Projects() {
  const { projects } = useAppSelector((store) => store.projectsState);

  const dispatch = useAppDispatch();

  function clickMe(event: SyntheticEvent<EventTarget>) {
    const target = event.target as HTMLDivElement;
    const project = projects.find((el) => {
      if (el.id === target.id) { return el; }
    });
    selectProject(dispatch, project)
  }

  function renderProjects(projectsArray: IProject[]) {
    return projectsArray.map((el) => (
      <div className="project" id={el.id} key={el.id} onClick={clickMe}>
        {el.name}
      </div>
    ));
  }

  return (
    <>
      <h1>Choose a project</h1>
      <div className="projects">{renderProjects(projects)}</div>
    </>
  );
}

export default Projects;
