import style from "./Icon.module.css";

export const Icon = ({ name }) => {
  return (
    <svg className={style._}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
