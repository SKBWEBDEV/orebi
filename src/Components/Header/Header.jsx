import Container from "../Layouts/Container"
import Oribe from "../../assets/oribe.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react"

const Header = () => {
  const [okey,setOkey] = useState (false)
  return (
    <div>
     <Container>
      <div className=" md:flex  hidden items-center justify-between py-8">
      <div><img className="w-[100px] h-full" src={Oribe} alt="" /></div>
      <div>
       <ul className="flex gap-[50px]">
         <li className="border-r-2 w-[70px] border-[#525252] text-[#737373] hover:text-black hover:underline 
         pr-[20px] font-medium transition-all ease-in-out duration-300 hover:font-bold "><a href="">Home</a></li>
         <li className="border-r-2 w-[70px] border-[#525252] text-[#737373] hover:text-black hover:underline 
         pr-[20px] font-medium ease-in-out duration-300 hover:font-bold "><a href="">Shop</a></li>
         <li className="border-r-2 w-[70px] border-[#525252] text-[#737373] hover:text-black hover:underline 
         pr-[20px] font-medium ease-in-out duration-300 hover:font-bold "><a href="">About</a></li>
         <li className="border-r-2 w-[70px] border-[#525252] text-[#737373] hover:text-black hover:underline 
         pr-[20px] font-medium ease-in-out duration-300 hover:font-bold "><a href="">Contact</a></li>
         <li className=" font-medium transition-all w-[70px] text-[#737373] hover:text-black hover:underline ease-in-out duration-300 hover:font-bold "><a href="">Journal</a></li>
       </ul>

      </div>
     </div>

    <div className="flex justify-between">
       <div className="md:hidden block">
      <img className="w-[100px] py-10 h-full" src={Oribe} alt="" />
      </div>

      {
        okey ? <div className="md:hidden bg-white absolute top-[70px] left-0 z-10 transform  py-5 px-5 w-full md:px-0 md:py-0 ">
       <ul className="">
         <li className=" w-[70px]  text-[#737373] hover:text-black  
         pr-[20px] font-medium transition-all ease-in-out duration-300 hover:font-bold "><a href="">Home</a></li>
         <li className=" w-[70px]  text-[#737373] hover:text-black 
         pr-[20px] font-medium ease-in-out duration-300 hover:font-bold "><a href="">Shop</a></li>
         <li className=" w-[70px]  text-[#737373] hover:text-black h 
         pr-[20px] font-medium ease-in-out duration-300 hover:font-bold "><a href="">About</a></li>
         <li className=" w-[70px]  text-[#737373] hover:text-black h 
         pr-[20px] font-medium ease-in-out duration-300 hover:font-bold "><a href="">Contact</a></li>
         <li className=" font-medium transition-all w-[70px] text-[#737373] hover:text-black  ease-in-out duration-300 hover:font-bold "><a href="">Journal</a></li>
       </ul>

      </div> : ""
      }

      <div className="md:hidden py-10 text-2xl">
        {
          okey ? <RxCross2 onClick={()=> setOkey (!okey)}/> : <FaBars onClick={()=> setOkey (!okey)}/>
        }
      </div>
    </div>

     </Container>
    </div>
  )
}

export default Header