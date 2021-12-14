import { Button } from "../Common/Button/Button";
import { Input } from "../Common/Input/Input";

export const UserForm = ({ onSubmit, onChange, onClick, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input onChange={onChange} value={value} />
      <Button onClick={onClick} type="submit">
        Добавить
      </Button>
    </form>
  );
};
