import { Swiper, SwiperSlide } from 'swiper/react';
import { blocs } from '../utli/constants';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Bloc = () =>{
    return(
        <div className='w-full'>
            
            <Swiper 
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               spaceBetween={80}
               slidesPerView={1}
               navigation
               pagination={{ clickable: true }}
               scrollbar={{ draggable: true }}
               onSwiper={(swiper) => console.log(swiper)}
               onSlideChange={() => console.log('slide change')}
            >
            
                {blocs.map((idx) =>(
                    <SwiperSlide key={idx.id}>
                        <div className='flex'>
                            <div>
                                <img className='sm:w-[1000px] w-[400px]' src={idx.img} alt="" />
                            </div>
                            <div className='bg-black sm:w-[1000px] w-[400px] sm:pt-[200px] pt-[10px]'>
                                <div className="sm:w-[500px] w-[200px]">
                                <h2 className={`text-white sm:text-[32px] text-[15px]`}>{idx.title}</h2>
                                <p className={`text-white sm:text-[14px] text-[5px] sm:mt-6 mt-3`}>{idx.text}</p>
                                
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
                

            </Swiper>
        </div>
    )
}
export default Bloc;