import Container from "../Layouts/Container";
import { FaCar } from 'react-icons/fa'; 
import { MdOutlineRefresh } from "react-icons/md";



const Warranty = () => {
  return (
    <div>
      
      <Container>
        <div className="md:flex justify-between md:py-14 py-7 ">

          <div className="md:w-[300px] mt-4 bg-white shadow-md hover:shadow-md/30 transition px-5">
            <div className="flex items-center gap-3">
              <p className="font-bold text-[20px] font-sans">2</p>
              <p>Two years warranty</p>
            </div>
          </div>


          <div className="md:w-[200px] mt-4 bg-white shadow-md hover:shadow-md/30 transition px-5">
            <div className="flex items-center gap-3">
              <p className="font-bold text-[20px] font-sans"><FaCar/></p>
              <p>Free shipping</p>
            </div>
          </div>


          <div className="md:w-[300px] mt-4 bg-white shadow-md hover:shadow-md/30 transition px-5">
            <div className="flex items-center gap-3">
              <p className="font-bold text-[20px] font-sans"><MdOutlineRefresh /></p>
              <p>Return policy in 30 days</p>
            </div>
          </div>

        </div>
        

          

       
      </Container>
    </div>
  );
};

export default Warranty;
