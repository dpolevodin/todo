import style from "./DoneList.module.css";
import { Affair } from "../Affair/Affair";

export const DoneList = ({ doneAffairs, onClick }) => {
  return doneAffairs.map((item, index) => {
    return (
      <div key={index} onClick={onClick} className={style._}>
        <Affair key={index}>{item}</Affair>
      </div>
    );
  });
};
