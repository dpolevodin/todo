import { UserForm } from "../UserForm/UserForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { affairsActions } from "../../store/affairs";
import { Header } from "./components/Header";
import style from "./Table.module.css";

export const Table = () => {
  const [value, setValue] = useState(null);

  const affairs = useSelector((state) => state.affairs.todo);
  const doneAffairs = useSelector((state) => state.affairs.done);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const handleAffairClick = (event) => {
    const value = event.target.innerHTML;
    dispatch(affairsActions.deleteAffair(value));
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    dispatch(affairsActions.setAffairs(value));
    setValue(null);
  };

  const doneList = doneAffairs.map((item, index) => {
    return (
      <div
        style={{ color: "gray", textDecoration: "line-through" }}
        key={index}
      >
        {item}
      </div>
    );
  });

  const affairsList = affairs.map((item, index) => {
    return (
      <div key={index} onClick={handleAffairClick}>
        {item}
      </div>
    );
  });

  return (
    <div className={style._}>
      <Header>ToDo List</Header>
      <UserForm
        onSubmit={handleInputSubmit}
        onChange={handleInputChange}
        value={value || ""}
      />
      <div style={{ padding: "1rem" }}>Надо сделать:</div>
      {affairsList}
      <div style={{ padding: "1rem" }}>Сделано:</div>
      {doneList}
    </div>
  );
};
