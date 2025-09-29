import Container from "../Layouts/Container"
import { HiBars2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Search = () => {
  return (
    <div className="bg-[rgb(245,245,243)] py-[30px] inset-shadow-sm">
      <Container>
        <div className="flex  justify-between items-center">
          <div className="flex items-center gap-2"><HiBars2 className="text-2xl"/><p>Shop by Category</p></div>
          <div className="flex items-center px-5 rounded-lg  bg-white  "><input className="mr-20 pr-80 py-5 border-none outline-none" type="text" placeholder="Search your product here" />
          <p><FaSearch className="text-2xl"/></p>
          </div>
          <div>
           <div className="flex items-center">
             <p><FcBusinessman className="text-3xl "/></p>
            <p><IoIosArrowDown className="text-2xl mr-5"/></p>
            <p><FaShoppingCart className="text-3xl" /></p>
           </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Search