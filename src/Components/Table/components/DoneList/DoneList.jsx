import style from "./DoneList.module.css";

export const DoneList = ({ doneAffairs, onClick }) => {
  return doneAffairs.map((item, index) => {
    return (
      <div key={index} onClick={onClick} className={style._}>
        {item}
      </div>
    );
  });
};
