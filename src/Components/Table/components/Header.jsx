import style from "./Header.module.css";

export const Header = ({ children }) => {
  return <h1 className={style._}>{children}</h1>;
};
