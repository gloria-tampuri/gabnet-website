import Image from 'next/image'
import ShuffleHero from '../shared/shuffleGallery/ShuffleGallery'
import React, { useRef } from 'react'
import styles from './Gallery.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SwipeCarousel } from './SwipeCarousel'

const Gallery = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <>
            <section className={styles.Container}>
                <ShuffleHero />
                <motion.div
                    ref={ref}
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress
                    }}
                    className='my-6'>
                    <Image src={'/images/showroom.webp'} alt={'gabnet showroom'} height={400} width={1200} />
                </motion.div>
            </section>
            <SwipeCarousel />
        </>

    )
}

export default Gallery