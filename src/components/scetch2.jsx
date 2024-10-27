import { scetcard } from "../utli/constants";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { styles } from "../utli/style";


const Scetcht = () =>{
   return( 
           <div className="mx-3">
                       <div className="text-center font-montserrat font-bold sm:text-[30px] text-[15px]">
                       <h1>DC Shoes популярное в коллекции</h1>
                       </div>
                    <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {scetcard.map((card) =>(  
        <SwiperSlide key={card.id}>
                <div className={`${styles.paddingY} sm:w-[300px] w-[200px]`}>
                <div className="bg-slate-200 sm:w-[300px] w-[100px] p-3 relative">
                <img src={card.img} alt=""/>
                <img className='absolute sm:top-2 top-1 sm:left-[90%] left-[80%] sm:w-[20px] w-[10px]' src={card.icon} alt="" />
                </div>
                <h3 className="text-black sm:text-[20px] text-[12px]">{card.title}</h3>
                <p className="sm:text-[20px] text-[10px]">{card.text}</p>
                <span>{card.price}</span>
                </div>
        </SwiperSlide>
        
        ))} 
    </Swiper>
    <div className="text-center">
        <button className="bg-black text-white sm:px-11.py-3 px-3 py-1">Показать больше</button>
    </div>
           
           </div> 
    
   )
}

export default Scetcht;