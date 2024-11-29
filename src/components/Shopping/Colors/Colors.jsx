import { useState } from "react";

function Colors({FilterProductsBasedOnColor}) {
  const [color, setcolor] = useState("all");
  console.log(color);
  return (
    <div>
      <input
        type="radio"
        value="all"
        onChange={(e) => setcolor(e.target.value)}
        checked={color === "all"}
        name="color"
        id="a"
        onClick={()=>FilterProductsBasedOnColor("all")}
      />
      <label htmlFor="a">All</label>
      <input
        type="radio"
        value="black"
        checked={color === "black"}
        onChange={(e) => setcolor(e.target.value)}
        name="color"
        onClick={()=>FilterProductsBasedOnColor("black")}
        id="b"
      />
      <label htmlFor="b">Black</label>
      <input
        type="radio"
        value="blue"
        onChange={(e) => setcolor(e.target.value)}
        checked={color === "blue"}
        name="color"
        onClick={()=>FilterProductsBasedOnColor("blue")}
        id="c"
      />
      <label htmlFor="c">Blue</label>
      <input
        type="radio"
        value="red"
        onChange={(e) => setcolor(e.target.value)}
        checked={color === "red"}
        name="color"
        onClick={()=>FilterProductsBasedOnColor("red")}
        id="d"
      />
      <label htmlFor="d">Red</label>
      <input
        type="radio"
        value="green"
        onChange={(e) => setcolor(e.target.value)}
        checked={color === "green"}
        name="color"
        onClick={()=>FilterProductsBasedOnColor("green")}
        id="e"
      />
      <label htmlFor="e">Green</label>
      <input
        type="radio"
        value="white"
        onChange={(e) => setcolor(e.target.value)}
        checked={color === "white"}
        name="color"
        onClick={()=>FilterProductsBasedOnColor("white")}
        id="f"
      />

      <label htmlFor="e">White</label>
    </div>
  );
}

export default Colors;
