import style from "./AffairsList.module.css";
import { Affair } from "../Affair/Affair";

export const AffairsList = ({ affairs, onClick, onClickButton }) => {
  const affairsData = affairs.map((item, index) => {
    return (
      <Affair
        key={index}
        onClick={onClick}
        onClickButton={onClickButton}
        toDo
        name={item}
      >
        {item}
      </Affair>
    );
  });
  return <div className={style._}>{affairsData}</div>;
};
