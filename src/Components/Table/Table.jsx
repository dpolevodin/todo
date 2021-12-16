import { UserForm } from "../UserForm/UserForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { affairsActions } from "../../store/affairs";
import { Header } from "./components/Header/Header";
import style from "./Table.module.css";
import { Button } from "../Common/Button/Button";
import { AffairsList } from "./components/AffairsList/AffairsList";
import { DoneList } from "./components/DoneList/DoneList";
import { selectors } from "../../store/selectors/index";

export const Table = () => {
  const [value, setValue] = useState(null);
  const [isShowDone, SetIsShowDone] = useState(false);

  const affairs = useSelector(selectors.getAffairs);
  const doneAffairs = useSelector(selectors.getDoneAffairs);
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

  return (
    <div className={style._}>
      <Header>Список дел</Header>
      <UserForm
        onSubmit={handleInputSubmit}
        onChange={handleInputChange}
        value={value || ""}
        onClick={handleInputClear}
      />
      <AffairsList affairs={affairs} onClick={handleAffairClick} />
      {doneAffairs.length > 0 && (
        <div className={style.buttonWrapper}>
          <Button primary onClick={handleButtonShowDone}>
            {!isShowDone && "Показать выполненные"}
            {isShowDone && "Скрыть выполненные"}
          </Button>
        </div>
      )}
      {isShowDone && <DoneList doneAffairs={doneAffairs} />}
    </div>
  );
};
