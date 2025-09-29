import Container from "../Layouts/Container"
import Oribe from "../../assets/oribe.png"

const Header = () => {
  return (
    <div>
     <Container>
      <div className="flex items-center justify-between py-8">
      <div><img className="w-[100px] h-full" src={Oribe} alt="" /></div>
      <div>
       <ul className="flex gap-[50px]">
         <li className="border-r-2  border-[#525252] text-[#737373] hover:text-black hover:underline pr-[20px] font-medium transition-all duration-300 hover:font-bold "><a href="">Home</a></li>
         <li className="border-r-2  border-[#525252] text-[#737373] hover:text-black hover:underline pr-[20px] font-medium transition-all duration-300 hover:font-bold "><a href="">Shop</a></li>
         <li className="border-r-2  border-[#525252] text-[#737373] hover:text-black hover:underline pr-[20px] font-medium transition-all duration-300 hover:font-bold "><a href="">About</a></li>
         <li className="border-r-2  border-[#525252] text-[#737373] hover:text-black hover:underline pr-[20px] font-medium transition-all duration-300 hover:font-bold "><a href="">Contact</a></li>
         <li className=" font-medium transition-all text-[#737373] hover:text-black hover:underline duration-300 hover:font-bold "><a href="">Journal</a></li>
       </ul>

      </div>
     </div>
     </Container>
    </div>
  )
}

export default Header