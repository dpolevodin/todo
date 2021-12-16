import { Button } from "../Common/Button/Button";
import { Input } from "../Common/Input/Input";
import style from "./UserForm.module.css";

export const UserForm = ({ onSubmit, onChange, onClick, value }) => {
  return (
    <form className={style._} onSubmit={onSubmit}>
      <Input onChange={onChange} value={value} />
      <Button small onClick={onClick} type="button" />
    </form>
  );
};
