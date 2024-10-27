import { Swiper, SwiperSlide } from 'swiper/react';
import { sale } from '../img';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Sale = () =>{
    return(
    
        <div className='w-full swiper-container '>
            <Swiper  
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={80}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}>
              
      <div className='max-w-full'>
      <SwiperSlide><img src={sale} alt="" className='w-[2000px]' /></SwiperSlide>
      <SwiperSlide><img src={sale} alt="" className='w-[2000px]' /></SwiperSlide>
      <SwiperSlide><img src={sale} alt="" className='w-[2000px]'/></SwiperSlide>
      <SwiperSlide><img src={sale} alt="" className='w-[2000px]'/></SwiperSlide>
      <SwiperSlide><img src={sale} alt="" className='w-[2000px]'/></SwiperSlide>
      <SwiperSlide><img src={sale} alt="" className='w-[2000px]'/></SwiperSlide>
      </div>
    </Swiper>
        </div>
    
        
    )
}
export default Sale;


