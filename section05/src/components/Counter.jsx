import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: "30px" }}>
      <b style={{ display: "block" }}>{count}</b>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
