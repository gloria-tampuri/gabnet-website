import React from 'react'
import classes from './About.module.css'
import Image from 'next/image'

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className={classes.About}>
            <div className={classes.AboutBanner}>
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Image src={'/images/showroom.webp'} alt='gabnet banner' width={1000} height={550} />
                </motion.div>
            </div>
            <section className={classes.AboutContent}>
                <h2>About Us</h2>
                <article>
                    <p>Gabnet Enterprise aims at providing our customers with VALUE FOR MONEY deals on   Printers, Copiers and consumables for their printing requirements. We stock a wide range of printing equipment such as Heat press, screen printing, digital embroidery, plasma, fiber laser, DTF printers, roll laminators, CO2 laser and many more.<br></br>
                We adapt an honest and sincere approach to doing business with our customers and we are passionate about supporting small printing shops to grow with and make more profit. <br></br>
                Over the years we have supported small printing businesses to grow their sales and profit by providing them with technical support, appropriate equipment and bringing new technology to their door step at affordable prices.
                We are based in Accra, with a branch in Kumasi in the Ashanti Region.
                We have thousands of satisfied customers across Ghana including Small & medium printing businesses, Hotels and schools.</p>
                </article>
            </section>
        </section>
    )
}
