import style from "./Button.module.css";
import cc from "classcat";
import { Icon } from "../Icons/Icon/Icon";

export const Button = ({ children, onClick, small, round, type, primary }) => {
  const blockClass = cc([
    style._,
    { [style.primary]: primary, [style.small]: small, [style.round]: round },
  ]);
  return (
    <button onClick={onClick} className={blockClass} type={type}>
      {small && <Icon name="incorrect" />}
      {round && <Icon name="bin" />}
      {children}
    </button>
  );
};
