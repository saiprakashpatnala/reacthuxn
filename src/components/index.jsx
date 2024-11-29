import { useState } from "react";

const Item = (props) => {
  const [toggle, setTogg] = useState(false);
  const { data } = props;
  const { title, content } = data;
  return (
    <li>
      <h1>{title}</h1>
      <button onClick={() => setTogg(!toggle)}>{toggle ? "-" : "+"}</button>
      {toggle ? <p>{content}</p> : ""}
    </li>
  );
};

export default Item;
