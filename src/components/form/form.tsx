import React, { SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { show } from "../../services/actions/alert"

const Form = () => {
  const [value, setValue] = useState("");
  const { alertType } = useAppSelector(store => store.alert);
  const dispatch = useAppDispatch();

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if(value.trim()) {
      show(dispatch, "success", "Проект был создан")
      setValue("")
    } else {
      show(dispatch, "", "Введите текст")
    }
  }


  return (
    <form className="container-xxl p-0" onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Введите название проекта"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
    </form>
  );
};

export default Form;