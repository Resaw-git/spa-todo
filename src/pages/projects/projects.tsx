import React, { SyntheticEvent } from "react";
import "./projects.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Form from "../../components/form/form";

function Projects() {
  const { projects } = useAppSelector((store) => store.projects);

  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="m-5">Проекты</h1>
      <Form />
      <ul className="container-xxl p-0 list-group m-5">
        {/*{projects.map((el: any) => (*/}
        {/*  <li className="list-group-item project" id={el.id} key={el.id} onClick={clickMe}>*/}
        {/*    {el.name}*/}
        {/*    <button*/}
        {/*    type="button"*/}
        {/*    className="btn btn-outline-danger btn-sm"*/}
        {/*    >*/}
        {/*      &times;*/}
        {/*    </button>*/}
        {/*  </li>*/}
        {/*))}*/}
      </ul>
    </>
  );
}

export default Projects;
