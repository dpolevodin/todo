import style from "./AffairsList.module.css";

export const AffairsList = ({ affairs, onClick }) => {
  return affairs.map((item, index) => {
    return (
      <div key={index} onClick={onClick} className={style._}>
        {item}
      </div>
    );
  });
};
