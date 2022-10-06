import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'
import Hero from '../Hero/Hero'
import Hero1 from '../Hero1/Hero1'
import Hero2 from '../Hero2/Hero2'

const CarouselPage = () => {
  return (
    <div>
      <Carousel autoplay withoutControls={true}>
        <Hero />
        <Hero1 />
        <Hero2 />
      </Carousel>
    </div>
  )
}

export default CarouselPage