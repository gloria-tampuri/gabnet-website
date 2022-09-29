import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'
import Typewriter from 'typewriter-effect';
import Hero from '../components/Hero/Hero'

const CarouselPage = () => {
  return (
    <><Carousel autoplay={true} autoplayReverse={true}>
    <Hero/>
    <Hero/>
    <Hero/>
    <Hero/>
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