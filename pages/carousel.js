import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'
import Typewriter from 'typewriter-effect';
import Hero from '../components/Hero/Hero'
import Hero1 from '../components/Hero1/Hero1';
import Hero2 from '../components/Hero2/Hero2';

const CarouselPage = () => {
  return (
    <>
    <Carousel autoplay={true} autoplayReverse={true}>
    <Hero/>
   <Hero1/>
   <Hero2/>
 </Carousel>

 <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .start();
  }}
/>
 </>
  )
}

export default CarouselPage