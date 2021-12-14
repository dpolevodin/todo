import style from "./Input.module.css";

export const Input = ({ onChange, value, children }) => {
  return (
    <input
      className={style._}
      onChange={onChange}
      value={value}
      placeholder="Add to do"
    >
      {children}
    </input>
  );
};
