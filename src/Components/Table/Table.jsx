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
import { ThemeButton } from "./components/ThemeButton/ThemeButton";
import { setTheme } from "../../helpers/setTheme";

const STORAGE_MAP = {
  false: false,
  true: true,
};

export const Table = () => {
  const getCurrentTheme = () => {
    const storage = window.localStorage;
    if (!!storage.DarkTheme) {
      return STORAGE_MAP[storage.DarkTheme];
    } else {
      return false;
    }
  };

  const [value, setValue] = useState(null);
  const [isShowDone, SetIsShowDone] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  setTheme(isDarkTheme);

  const affairs = useSelector(selectors.getAffairs);
  const doneAffairs = useSelector(selectors.getDoneAffairs);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleAffairClick = (event) => {
    const { innerHTML: value } = event.target;
    dispatch(affairsActions.doneAffair(value));
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

  const handleButtonClear = (event) => {
    event.preventDefault();
    dispatch(affairsActions.clear());
  };

  const handleButtonDelete = (event) => {
    event.preventDefault();
    const value = event.currentTarget.name;
    console.log(value);
    dispatch(affairsActions.deleteAffair(value));
  };

  const handleClickChangeTheme = (event) => {
    event.preventDefault();
    const storage = window.localStorage;
    const darkTheme =
      storage.DarkTheme === undefined || storage.DarkTheme === "false"
        ? true
        : false;
    storage.setItem("DarkTheme", darkTheme);
    setIsDarkTheme(STORAGE_MAP[window.localStorage.DarkTheme]);
    console.log(window.localStorage);
  };

  return (
    <div className={style.wrapper}>
      <div className={style._}>
        <Header>Список дел</Header>

        <ThemeButton
          isDarkTheme={isDarkTheme}
          onClick={handleClickChangeTheme}
        />

        <UserForm
          onSubmit={handleInputSubmit}
          onChange={handleInputChange}
          value={value || ""}
          onClick={handleInputClear}
        />
        <AffairsList
          affairs={affairs}
          onClick={handleAffairClick}
          onClickButton={handleButtonDelete}
        />
        <div className={style.buttonWrapper}>
          {(affairs.length > 0 || doneAffairs.length > 0) && (
            <Button primary onClick={handleButtonClear}>
              Очистить все дела
            </Button>
          )}
          {doneAffairs.length > 0 && (
            <Button primary onClick={handleButtonShowDone}>
              {!isShowDone && "Показать выполненные"}
              {isShowDone && "Скрыть выполненные"}
            </Button>
          )}
        </div>

        {isShowDone && <DoneList doneAffairs={doneAffairs} />}
      </div>
    </div>
  );
};
