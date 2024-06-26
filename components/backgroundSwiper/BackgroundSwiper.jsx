import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper/modules';

import styles from './BackgroundSwiper.module.css';
import { BACKGROUND_SLIDER_IMAGES } from '../../constant/data';

// const SLIDER_DATA = [
//   {
//     id: 1,
//     content: '',
//     bg_url: '/images/slider-1.webp',
//   },
//   {
//     id: 2,
//     content: '',
//     bg_url: '/images/slider-2.webp',
//   }
// ];

export default function BackgroundSwiper() {
  return (
    <div className={styles.BackgroundSwiper}>
      <>
        <Swiper
          className={styles.Slider}
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#028bbd',
          }}
          spaceBetween={0}
          effect='creative'
          freeMode={true}
          speed={3000}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {BACKGROUND_SLIDER_IMAGES.map((slider) => (
            <SwiperSlide className={styles.Swiper} key={slider.id}>
              <div className={`${styles.Content}`}>
                <Image
                  className={styles.Image}
                  src={slider.src}
                  alt={`Background slider ${slider.id}`}
                  height={1000}
                  width={2000}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
