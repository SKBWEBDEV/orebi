
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';



import Headphone from '../../assets/headphone.png'
import Woman from '../../assets/woman.png'
import First from '../../assets/first.png'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slid = () => {
  return (
    <div>
      
      <Swiper
  spaceBetween={30}
  centeredSlides={true}
  loop={true} 
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper">
  <SwiperSlide><img src={Headphone} alt="" /></SwiperSlide>
  <SwiperSlide><img src={Woman} alt="" /></SwiperSlide>
  <SwiperSlide><img src={First} alt="" /></SwiperSlide>
</Swiper>
    </div>
  )
}

export default Slid