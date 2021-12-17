import style from "./ThemeButton.module.css";
import { Button } from "../../../Common/Button/Button";

export const ThemeButton = ({ onClick, isDarkTheme }) => {
  const buttonText = isDarkTheme ? "Светлая тема" : "Темная тема";
  return (
    <div className={style._}>
      <Button primary onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};
