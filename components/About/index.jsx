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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste mollitia odit velit expedita distinctio tempore magni ratione omnis ea obcaecati ullam quia, libero facere dolorum animi similique corrupti deleniti non a. Debitis, saepe fugit ducimus quis deleniti rerum hic cum. Ratione alias recusandae sunt, architecto repudiandae inventore accusamus itaque fugit officia iste animi? Amet soluta totam maxime facere blanditiis dolores atque labore nesciunt aut saepe. Porro mollitia delectus odio minima dignissimos voluptates, quasi debitis aliquam, enim esse dolores rem qui. Molestias, eaque? Debitis, accusantium. Iste architecto consequuntur non, at, doloremque eos ipsam adipisci eaque officia, assumenda quos cum. Distinctio officiis alias exercitationem dolores placeat molestias veniam quae, cupiditate assumenda numquam impedit porro nemo aliquid reiciendis explicabo? Illum molestiae sint fugiat veritatis similique ad, quo molestias temporibus laborum suscipit hic asperiores quidem quos quibusdam quisquam totam vel. Odit optio voluptate voluptas facilis, error, necessitatibus repudiandae voluptatum rerum veniam officiis alias modi voluptates earum magnam deserunt soluta enim amet minima, nihil nulla. Inventore mollitia delectus nostrum ipsa dolor blanditiis nobis, perferendis cupiditate id iste earum quaerat cum beatae, ratione dolorum corrupti incidunt molestias nesciunt amet doloribus error quam sed, molestiae voluptates! Quae, cupiditate, earum corrupti assumenda temporibus ipsam ipsa reprehenderit, magni illo omnis saepe placeat aperiam harum? Non incidunt similique eveniet iusto, voluptatibus vitae iure, ratione autem error eius esse? Cumque necessitatibus, ut facilis tempore cupiditate similique ipsam facere maxime porro corporis minima odit perspiciatis saepe deserunt cum at nesciunt. Numquam architecto praesentium odio quod, voluptatum adipisci! Corporis quaerat accusantium tenetur commodi, labore incidunt, ab non consequatur velit aperiam eaque vero sed aliquid animi laudantium architecto corrupti. Adipisci quod aperiam explicabo qui debitis vel molestiae alias iste, nostrum, id doloremque necessitatibus. Earum sequi veritatis quia voluptatibus, optio autem eveniet esse minima tempora hic provident temporibus accusamus asperiores libero atque nesciunt. Nisi!</p>
                </article>
            </section>
        </section>
    )
}
