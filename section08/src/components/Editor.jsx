import "./Editor.css";

const Editor = () => {
  return (
    <article className="editor">
      <input type="text" placeholder="새로운 TODO" />
      <button>추가</button>
    </article>
  );
};

export default Editor;
