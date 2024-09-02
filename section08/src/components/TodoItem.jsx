import "./TodoItem.css";

const TodoItem = () => {
  return (
    <li className="todoItem">
      <input type="checkbox" id="chkbox" />
      <label htmlFor="chkbox">Todo</label>
      <span>Date</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
