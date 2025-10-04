
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Slider from "react-slick";
import Container from "../Layouts/Container";

function Arrivals() {


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container md:mt-20 mt-10 ml-10">
      
      <Container>
        <div className="text-[30px] font-bold  ">
          <h3>New Arrivals</h3>
        </div>
        <Slider  {...settings} className="mx-[-8px]">
      
          <div className="px-2">
            <div className="relative group bg-[url(./assets/cup.png)] px-28 py-40 w-[300px] bg-no-repeat mt-4">
        <div className="absolute bottom-0 left-0 opacity-0   group-hover:opacity-100 group-hover:bottom-0 ">
            <div className="absolute bottom-0 left-0 w-[297px] bg-white 
                  opacity-0 translate-y-4 
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-900 ease-in-out">
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Compare</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Cart</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">View Details</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Wish Lis</p>

            </div>
          </div>
        </div>

        

        <div className="    bg-white border-2 border-[rgb(229,231,235)]  w-fit">
          <div className="flex items-center justify-between w-[300px] py-7 px-5">
            <div className="">
              <h3 className="text-[20px] font-bold">Flower Base</h3>
              <p className="text-[14px] text-[rgb(131,118,118)]">Blank and White</p>
            </div>
            <p className="text-[14px] text-[rgb(131,118,118)]">$35.00</p>
          </div>
          
        </div>
          </div>
        



      
          <div  className="px-2">
            <div className="relative group bg-[url(./assets/handwatch.png)] px-28 py-40 w-[300px] bg-no-repeat mt-4">
        <div className="absolute bottom-0 left-0 opacity-0   group-hover:opacity-100 group-hover:bottom-0 ">
            <div className="absolute bottom-0 left-0 w-[300px] bg-white 
                  opacity-0 translate-y-4 
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-900 ease-in-out">
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Compare</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Cart</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">View Details</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Wish Lis</p>

            </div>
          </div>
        </div>

        

        <div className="    bg-white border-2 border-[rgb(229,231,235)]  w-fit">
          <div className="flex items-center justify-between w-[297px] py-7 px-5">
            <div className="">
              <h3 className="text-[20px] font-bold">Flower Base</h3>
              <p className="text-[14px] text-[rgb(131,118,118)]">Blank and White</p>
            </div>
            <p className="text-[14px] text-[rgb(131,118,118)]">$35.00</p>
          </div>
          
        </div>
          </div>
        



      
          <div  className="px-2">
            <div className="relative group bg-[url(./assets/rabit.png)] px-28 py-40 w-[300px] bg-no-repeat mt-4">
        <div className="absolute bottom-0 left-0 opacity-0   group-hover:opacity-100 group-hover:bottom-0 ">
            <div className="absolute bottom-0 left-0 w-[300px] bg-white 
                  opacity-0 translate-y-4 
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-900 ease-in-out">
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Compare</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Cart</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">View Details</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Wish Lis</p>

            </div>
          </div>
        </div>

        

        <div className="    bg-white border-2 border-[rgb(229,231,235)]  w-fit">
          <div className="flex items-center justify-between w-[297px] py-7 px-5">
            <div className="">
              <h3 className="text-[20px] font-bold">Flower Base</h3>
              <p className="text-[14px] text-[rgb(131,118,118)]">Blank and White</p>
            </div>
            <p className="text-[14px] text-[rgb(131,118,118)]">$35.00</p>
          </div>
          
        </div>
          </div>
        



      
          <div  className="px-2">
            <div className="relative group bg-[url(./assets/box.png)] px-28 py-40 w-[300px] bg-no-repeat mt-4">
        <div className="absolute bottom-0 left-0 opacity-0   group-hover:opacity-100 group-hover:bottom-0 ">
            <div className="absolute bottom-0 left-0 w-[300px] bg-white 
                  opacity-0 translate-y-4 
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-900 ease-in-out">
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Compare</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Cart</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">View Details</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Wish Lis</p>

            </div>
          </div>
        </div>

        

        <div className="    bg-white border-2 border-[rgb(229,231,235)]  w-fit">
          <div className="flex items-center justify-between w-[297px] py-7 px-5">
            <div className="">
              <h3 className="text-[20px] font-bold">Flower Base</h3>
              <p className="text-[14px] text-[rgb(131,118,118)]">Blank and White</p>
            </div>
            <p className="text-[14px] text-[rgb(131,118,118)]">$35.00</p>
          </div>
          
        </div>
          </div>
        



      
          <div  className="px-2">
            <div className="relative group bg-[url(./assets/cup.png)] px-28 py-40 w-[300px] bg-no-repeat mt-4">
        <div className="absolute bottom-0 left-0 opacity-0   group-hover:opacity-100 group-hover:bottom-0 ">
            <div className="absolute bottom-0 left-0 w-[300px] bg-white 
                  opacity-0 translate-y-4 
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-900 ease-in-out">
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Compare</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Cart</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">View Details</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Wish Lis</p>

            </div>
          </div>
        </div>

        

        <div className="    bg-white border-2 border-[rgb(229,231,235)]  w-fit">
          <div className="flex items-center justify-between w-[300px] py-7 px-5">
            <div className="">
              <h3 className="text-[20px] font-bold">Flower Base</h3>
              <p className="text-[14px] text-[rgb(131,118,118)]">Blank and White</p>
            </div>
            <p className="text-[14px] text-[rgb(131,118,118)]">$35.00</p>
          </div>
          
        </div>
          </div>
        



      
         <div  className="px-2">
            <div className="relative group bg-[url(./assets/rabit.png)] px-28 py-40 w-[300px] bg-no-repeat mt-4">
        <div className="absolute bottom-0 left-0 opacity-0   group-hover:opacity-100 group-hover:bottom-0 ">
            <div className="absolute bottom-0 left-0 w-[300px] bg-white 
                  opacity-0 translate-y-4 
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-900 ease-in-out">
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Compare</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Cart</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">View Details</p>
              <p className="border-b-1 border-[rgb(229,231,235)] ml-3 text-[rgb(131,118,118)]">Add to Wish Lis</p>

            </div>
          </div>
        </div>

        

        <div className="    bg-white border-2 border-[rgb(229,231,235)]  w-fit">
          <div className="flex items-center justify-between w-[297px] py-7 px-5">
            <div className="">
              <h3 className="text-[20px] font-bold">Flower Base</h3>
              <p className="text-[14px] text-[rgb(131,118,118)]">Blank and White</p>
            </div>
            <p className="text-[14px] text-[rgb(131,118,118)]">$35.00</p>
          </div>
          
        </div>
          </div>
        
      </Slider>
      </Container>
   
    </div>
  );
}
export default Arrivals;
