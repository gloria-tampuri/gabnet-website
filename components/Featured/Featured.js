"use client"
import React from 'react'
import Image from 'next/image';
import classes from './Featured.module.css'
import Bounce from 'react-reveal/Bounce';
import Flash from 'react-reveal/Flash';
import Link from 'next/link';
import { useFloating } from '@floating-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
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


const Featured = ({products}) => {
  return (
    <div className={classes.Featured}>
      <h1 className={classes.Title}>Popular Machines</h1>
      <Swiper
        className={classes.Slider}
        style={{
          '--swiper-navigation-color': '#028bbd',
        }}
        spaceBetween={50}
        effect='fade'
        freeMode={true}
        speed={1500}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {products.map((product) => <SwiperSlide className={classes.Swiper} key={product.fields.title}>
          <div className={classes.FeaturedProduct}>
            <div className={classes.Image}>
              <Image height='400' width='450' src={'https:' + product.fields.image.fields.file.url} alt={product.fields.title} /></div>
            <div className={classes.description}>
              <h4>{product.fields.title}</h4>
              <p>{product.fields.description}</p>
              <Link className={classes.Button} href={'tel:+233595850394'}>Call now</Link>
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default Featured