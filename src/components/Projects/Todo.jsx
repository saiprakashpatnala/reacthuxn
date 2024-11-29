import { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text,
    };
    setArr([...arr, newTodo]);
    setText("");
  };

  const removeTodo=(id)=>{
    let filterTodo=arr.filter(i=>i.id!==id)
    setArr(filterTodo)

  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {arr.map((i) => (
          <li key={i.id}>
            <p>{i.text}</p>
            <button onClick={()=>removeTodo(i.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
