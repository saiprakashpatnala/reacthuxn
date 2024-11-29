const Button = ({FilterProductsBasedOnCompany}) => {
  const ok=(ele)=>{
   FilterProductsBasedOnCompany(ele)
  }
  return (
    <ul>
      <li>
        <button onClick={()=>ok("all")}>All Products</button>
        <button  onClick={()=>ok("nike")}>Nike</button>
        <button  onClick={()=>ok("adidas")}>Adidas</button>
        <button  onClick={()=>ok("puma")}>Puma</button>
        <button  onClick={()=>ok("vans")}>Vine</button>
      </li>
    </ul>
  );
};

export default Button;
