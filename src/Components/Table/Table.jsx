import { UserForm } from "../UserForm/UserForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { affairsActions } from "../../store/affairs";
import { Header } from "./components/Header";
import style from "./Table.module.css";
import { Button } from "../Common/Button/Button";

export const Table = () => {
  const [value, setValue] = useState(null);
  const [isShowDone, SetIsShowDone] = useState(false);

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

  const handleInputClear = (event) => {
    event.preventDefault();
    setValue(null);
  };

  const handleButtonShowDone = (event) => {
    event.preventDefault();
    SetIsShowDone(!isShowDone);
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
      <Header>Список дел</Header>
      <UserForm
        onSubmit={handleInputSubmit}
        onChange={handleInputChange}
        value={value || ""}
        onClick={handleInputClear}
      />
      {affairsList}
      {doneAffairs.length > 0 && (
        <div className={style.buttonWrapper}>
          <Button primary onClick={handleButtonShowDone}>
            {!isShowDone && "Показать выполненные"}
            {isShowDone && "Скрыть выполненные"}
          </Button>
        </div>
      )}
      {isShowDone && doneList}
    </div>
  );
};
