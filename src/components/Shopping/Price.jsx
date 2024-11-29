// import { useState } from "react"


// function Price() {
//   const[price,setPrice]=useState("all")
//   return(
//   <div>
//         <input
        
//           type="radio"
//           value="all"
//           onChange={(e) =>setPrice(e.target.value)}
//           checked={price==="all"}
//           name="category"
//           onClick={()=>{FilterProductsBasedOnCategory("all")}}
//           id="a"
//         />
//         <label htmlFor="a">All</label>
//         <input
//           type="radio"
//           value="sneakers"
//           checked={price==="sneakers"}
//           onChange={(e) =>setPrice(e.target.value)}
//           name="category"
//           onClick={()=>{FilterProductsBasedOnCategory("sneakers")}}
//           id="b"
//         />
//         <label htmlFor="b">Sneakers</label>
//         <input
//           type="radio"
//           value="flats"
//           onChange={(e) =>setPrice(e.target.value)}
//           checked={price==="flats"}
//           name="category"
//           onClick={()=>{FilterProductsBasedOnCategory("flats")}}
//           id="c"
//         />
//         <label htmlFor="c">Flats</label>
//         <input
//           type="radio"
//           value="sandals"
//           onChange={(e) =>setPrice(e.target.value)}
//           checked={price==="sandals"}
//           name="category"
//           onClick={()=>{FilterProductsBasedOnCategory("sandals")}}
//           id="d"
//         />
//         <label htmlFor="d">sandala</label>
//         <input
//           type="radio"
//           value="heels"
//           onChange={(e) =>setPrice(e.target.value)}
//           checked={price==="heels"}
//           name="category"
//           onClick={()=>{FilterProductsBasedOnCategory("heels")}}
//           id="e"
//         />
//         <label htmlFor="e">Heels</label>
//       </div>
//   )
// }

// export default Price