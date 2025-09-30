import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Container from '../Layouts/Container';
import Media from "../../assets/media.png";

const Footer = () => {
  return (
    <div className='bg-[rgb(245,245,243)] mt-20' >
      <Container>
        <div className='flex justify-between py-15 border-b-2 border-[rgb(229,231,235)]'>
          <div>
            <h3 className="font-bold text-[20px]">More about Orebi Shop</h3>
            <p className="w-[320px] mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.</p>
            <div className="flex gap-4 mt-5">
              <p className="bg-black text-white py-2 px-2 rounded-full"><FaYoutube /></p>
              <p className="bg-black text-white py-2 px-2 rounded-full"><IoLogoGithub /></p>
              <p className="bg-black text-white py-2 px-2 rounded-full"><FaFacebookF /></p>
              <p className="bg-black text-white py-2 px-2 rounded-full"><FaLinkedinIn /></p>
            </div>
          </div>


          <div>
            <ul>
              <h3 className="font-bold text-[20px] ">Shop</h3>
              <li className="mt-3 text-[rgb(109,109,109)]">Accesories</li>
              <li className="mt-3 text-[rgb(109,109,109)]">Clothes</li>
              <li className="mt-3 text-[rgb(109,109,109)]">Electronics</li>
              <li className="mt-3 text-[rgb(109,109,109)]">Home appliances</li>
              <li className="mt-3 text-[rgb(109,109,109)]">New Arrivals</li>
            </ul>
          </div>


          <div>
            <ul>
              <h3 className="font-bold text-[20px] ">Your account</h3>
              <li className="mt-3 text-[rgb(109,109,109)]">Accesories</li>
              <li className="mt-3 text-[rgb(109,109,109)]">Clothes</li>
              <li className="mt-3 text-[rgb(109,109,109)]">Electronics</li>
              <li className="mt-3 text-[rgb(109,109,109)]">Home appliances</li>
              <li className="mt-3 text-[rgb(109,109,109)]">New Arrivals</li>
            </ul>
          </div>


          <div>
            <ul>
              <h3 className="font-bold text-[20px] ">Subscribe to our newsletter.</h3>
              <li className="mt-5 text-[rgb(109,109,109)]">A at pellentesque et mattis porta enim elementum.</li>
               <img className="w-[300px]" src={Media} alt="" />
             </ul>
          </div>
        </div>


        <div className="text-[14px] text-[rgb(109,109,109)] text-center py-10">
          <p>Copyright 2022 | Orebi shopping | All Rights Reserved | Powered by ReactBD.com</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer