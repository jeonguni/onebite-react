import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <li className="todoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        type="checkbox"
        checked={isDone}
      />
      <label>{content}</label>
      <span>{new Date(date).toLocaleDateString()}</span>
      <button onClick={onClickDeleteButton}>삭제</button>
    </li>
  );
};

export default TodoItem;
