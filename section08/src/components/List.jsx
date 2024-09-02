import "./List.css";
import TodoItem from "./TodoItem";

const List = () => {
  return (
    <article className="list">
      <h4>Todo List 🌱</h4>
      <input type="text" placeholder="검색어를 입력하세요." />
      <ul className="todolist">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </article>
  );
};

export default List;
