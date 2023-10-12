'use client';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImageHeroPengajuan from './ImageHeroPengajuan';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HeroPengajuan() {
	return (
		<Swiper
			// install Swiper modules
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
			<SwiperSlide>
				<ImageHeroPengajuan />
			</SwiperSlide>
			<SwiperSlide>
				<ImageHeroPengajuan />
			</SwiperSlide>
			<SwiperSlide>
				<ImageHeroPengajuan />
			</SwiperSlide>
			<SwiperSlide>
				<ImageHeroPengajuan />
			</SwiperSlide>
		</Swiper>
	);
}
