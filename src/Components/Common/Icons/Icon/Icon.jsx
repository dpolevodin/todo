import style from "./Icon.module.css";
import cc from "classcat";

export const Icon = ({ name }) => {
  const iconClass = cc([style._, { [style.round]: name === "bin" }]);
  return (
    <svg className={iconClass}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
