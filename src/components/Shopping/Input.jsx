import { useState } from "react";


const Input = ({FilterProductsBasedOnCategory}) => {
  const[cat,setCat]=useState("all")

  return (
    <>
      <div>
        <input
        
          type="radio"
          value="all"
          onChange={(e) =>setCat(e.target.value)}
          checked={cat==="all"}
          name="category"
          onClick={()=>{FilterProductsBasedOnCategory("all")}}
          id="a"
        />
        <label htmlFor="a">All</label>
        <input
          type="radio"
          value="sneakers"
          checked={cat==="sneakers"}
          onChange={(e) =>setCat(e.target.value)}
          name="category"
          onClick={()=>{FilterProductsBasedOnCategory("sneakers")}}
          id="b"
        />
        <label htmlFor="b">Sneakers</label>
        <input
          type="radio"
          value="flats"
          onChange={(e) =>setCat(e.target.value)}
          checked={cat==="flats"}
          name="category"
          onClick={()=>{FilterProductsBasedOnCategory("flats")}}
          id="c"
        />
        <label htmlFor="c">Flats</label>
        <input
          type="radio"
          value="sandals"
          onChange={(e) =>setCat(e.target.value)}
          checked={cat==="sandals"}
          name="category"
          onClick={()=>{FilterProductsBasedOnCategory("sandals")}}
          id="d"
        />
        <label htmlFor="d">sandala</label>
        <input
          type="radio"
          value="heels"
          onChange={(e) =>setCat(e.target.value)}
          checked={cat==="heels"}
          name="category"
          onClick={()=>{FilterProductsBasedOnCategory("heels")}}
          id="e"
        />
        <label htmlFor="e">Heels</label>
      </div>
    </>
  );
};

export default Input;
