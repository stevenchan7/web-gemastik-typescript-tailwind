'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ActivityTypeCard from "./ActivityTypeCard"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ActivityTypeSwiper({activities}: {activities: {id: number, title: string, desc: string}[]}) {
  return(
    <Swiper
          // install Swiper modules
          className='h-[400px]'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          breakpoints={{
            992: {
              slidesPerView: 2.5,
              slidesPerGroup: 2,
            },
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1400: {
              slidesPerView: 3.5,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          { activities.map((act, index) => 
          <SwiperSlide key={index}>
            <ActivityTypeCard title={act.title} desc={act.desc} />
          </SwiperSlide>)}
        </Swiper> 
  )
}