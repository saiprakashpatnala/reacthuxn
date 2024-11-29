import { useState } from "react";
import { FaSearchDollar } from "react-icons/fa";

const HiddenSearchbar = () => {
  const [inp, setInp] = useState(false);
  const [bg, setBg] = useState("white");

  const handler=()=>{
    setInp(true)
    setBg("black")
  }
  return (
    <div style={{ backgroundColor: bg }}>
      {inp ? <input type="text" placeholder="Search..." /> : <FaSearchDollar onClick={handler} />}
    </div>
  );
};

export default HiddenSearchbar;
