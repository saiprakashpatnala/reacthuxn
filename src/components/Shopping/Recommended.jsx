import { useState } from "react";
import data from "../../data";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Colors from "./Colors/Colors";

function Recommended() {
  const [item, setItem] = useState("");
  const [arr, setArr] = useState(data);


  const FilterProductsBasedOnCompany = (item) => {
    if (item==="all") {
      setArr(data);
    } else {
      const filteredList = data.filter((i) =>
        i.company.toLowerCase().includes(item.toLowerCase())
      );
      setArr(filteredList);
    }
  };

  const FilterProductsBasedOnCategory = (item) => {
    if (item === "all") {
      setArr(data);
    } else {
      const filteredList = data.filter((i) =>
        i.category.toLowerCase().includes(item.toLowerCase())
      );
      setArr(filteredList);
    }
  };

  const FilterProductsBasedOnColor = (item) => {
    if (item === "all") {
      setArr(data);
    } else {
      const filteredList = data.filter((i) =>
        i.color.toLowerCase().includes(item.toLowerCase())
      );
      setArr(filteredList);
    }
  };

const FinalRender=(item)=>{
  let kk=arr.filter(i=>i.title.toLowerCase().includes(item.toLowerCase()))
  return kk
}
let mn=FinalRender(item)
  return (
    <div>
      <h1>Recommended</h1>
      <input
        type="search"
        placeholder="search Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <Button FilterProductsBasedOnCompany={FilterProductsBasedOnCompany} />
      <Input FilterProductsBasedOnCategory={FilterProductsBasedOnCategory} />
      <Colors FilterProductsBasedOnColor={FilterProductsBasedOnColor} />
      {mn.length>0?<ul>
        {mn.map((i) => (
          <Card key={i.id} data={i} />
        ))}
      </ul>:<p>Product Not Found</p>}
      
    </div>
  );
}

export default Recommended;
