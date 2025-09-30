import Container from "../Layouts/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import cupImg from "../../assets/cup.png";
import handwatchImg from "../../assets/handwatch.png";
import boxImg from "../../assets/box.png";
import rabitImg from "../../assets/rabit.png";


const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-35 right-2 z-10 cursor-pointer text-gray-600 hover:text-gray-900"
    onClick={onClick}
  >
    <BsArrowRight className="bg-[rgb(149,149,149)] text-white  rounded-full" size={25} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-35 left-2 z-10 cursor-pointer text-gray-600 hover:text-gray-900"
    onClick={onClick}
  >
    <BsArrowLeft className="bg-[rgb(149,149,149)] text-white text-[25px] rounded-full" size={25} />
  </div>
);

const Arrivals = () => {
  const products = [
  { id: 1, title: "Round Table Clock", price: 44, image: cupImg },
  { id: 2, title: "Smart Watch", price: 44, image: handwatchImg },
  { id: 3, title: "Cloth Basket", price: 80, image: boxImg },
  { id: 4, title: "Funny toys for babies", price: 60, image: rabitImg },
  { id: 1, title: "Round Table Clock", price: 44, image: cupImg },
  { id: 2, title: "Smart Watch", price: 44, image: handwatchImg },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="mt-20 mb-10">
      <Container>
        <h3 className="text-[30px] font-bold mb-6">New Arrivals</h3>

        <Slider {...settings}>
          {products.map((item) => (
            <div key={item.id} className="px-3">
              <div className="relative group bg-center bg-no-repeat bg-cover h-[250px] rounded-md" style={{ backgroundImage: `url(${item.image})` }}>
                {/* Hover Menu */}
                <div className="absolute bottom-0 left-0 w-full bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <p className="border-b border-gray-200 py-1 px-3 text-gray-500">Compare</p>
                  <p className="border-b border-gray-200 py-1 px-3 text-gray-500">Add to Cart</p>
                  <p className="border-b border-gray-200 py-1 px-3 text-gray-500">View Details</p>
                  <p className="py-1 px-3 text-gray-500">Add to Wish List</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="bg-white border border-gray-200 mt-3 rounded-md shadow-sm">
                <div className="flex justify-between items-center py-3 px-4">
                  <div>
                    <h3 className="text-[16px] font-bold">{item.title}</h3>
                    <p className="text-[14px] text-gray-500">Black</p>
                  </div>
                  <p className="text-[14px] text-gray-500">${item.price}.00</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Arrivals;
