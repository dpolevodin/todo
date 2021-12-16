import style from "./Affair.module.css";
import { Button } from "../../../Common/Button/Button";

export const Affair = ({ onClick, onClickButton, children, toDo, name }) => {
  return (
    <div className={style._}>
      <span className={style.affairText} onClick={onClick}>
        {children}
      </span>
      {toDo && <Button round onClick={onClickButton} name={name} />}
    </div>
  );
};
