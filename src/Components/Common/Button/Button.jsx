import style from "./Button.module.css";
import cc from "classcat";

export const Button = ({ children, onClick, small, round }) => {
  const blockClass = cc([
    style._,
    {
      [style.small]: small,
      [style.round]: round,
    },
  ]);
  return (
    <button onClick={onClick} className={blockClass}>
      {children}
    </button>
  );
};
