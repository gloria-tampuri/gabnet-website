import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


const SlideIn = (props) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}>
            {props.children}
        </motion.div>
    )
}

export default SlideIn