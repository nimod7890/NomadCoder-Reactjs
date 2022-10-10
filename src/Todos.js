import React, { useState } from "react";
function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setTodo(""); //state는 직접적으로 값을 변경하지 않고, 함수를 통해 수정하기
  };
  return (
    <div>
      <h1>My Todos</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your Todo"
        />
        <button>Add Todo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, idx) => (
          <li key={idx}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
