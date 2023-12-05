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
  EffectCoverflow,
} from 'swiper/modules';

import styles from './BackgroundSwiper.module.css';

const SLIDER_DATA = [
  {
    id: 1,
    content: 'Reliable Sea Freight Services Cargo services with a global reach',
    bg_url: '/images/slider-1.webp',
  },
  {
    id: 2,
    content: 'Streamlined air freight services secure and reliable deliveries',
    bg_url: '/images/slider-2.webp',
  },
  {
    id: 3,
    content: 'Extensive links for safe and secure transportation of goods',
    bg_url: '/images/slider-3.webp',
  },
  {
    id: 4,
    content: 'Extensive links for safe and secure transportation of goods',
    bg_url: '/images/slider-3.webp',
  },
  {
    id: 5,
    content: 'Extensive links for safe and secure transportation of goods',
    bg_url: '/images/slider-3.webp',
  },
];

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
          effect='fade'
          freeMode={true}
          speed={3000}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {SLIDER_DATA.map((slider) => (
            <SwiperSlide className={styles.Swiper} key={slider.id}>
              <div className={`${styles.Content}`}>
                <Image
                  className={styles.Image}
                  src={slider.bg_url}
                  alt={slider.content}
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
