import {FiHeart} from "react-icons/fi"
import { PiShoppingCartSimpleFill } from "react-icons/pi"
import { HiUserAdd } from "react-icons/hi";



function Nav() {
  return (
    <nav>
      <div>
        <input type="text" placeholder="Enter your search shoe Item"/>
      </div>
      <div>
        <a href="#">
          <FiHeart/>
        </a>
         <a href="#">
          <PiShoppingCartSimpleFill/>
        </a>
         <a href="#">
         <HiUserAdd/>
        </a>
      </div>
    </nav>
  )
}

export default Nav
