import { useState, useEffect } from "react";
import axios from "axios";
const Meals = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const getData = async() => {
      const response =await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
   setArr(response.data.meals)
      
    };
    getData()
  },[]);

  console.log(arr)
  return <div>
    <h1>Meals</h1>
    <ul>
        {arr.map((i)=>(
            <li key={i.id}>
                <h1>{i.strMeal}</h1>
                <img src={i.strMealThumb} alt={i.strMeal}/>
                
            </li>
        ))}
    </ul>
  </div>;
};

export default Meals;
