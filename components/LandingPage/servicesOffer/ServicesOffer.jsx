import React from 'react';
import classes from './ServicesOffer.module.css';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { SERVICES } from '../../../constant/data';

export default function ServicesOffer() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section className={classes.ServicesOffer}>
      <h1 className={classes.Title}>Our Services</h1>
      <div className={classes.ServiceWrapper}>
        <section ref={targetRef} className={classes.ServiceSection}>
          <div className={classes.ServiceContainer}>
            <motion.div
              transition={{ type: 'spring', mass: 10000, stiffness: 1 }}
              style={{ x }}
              className={classes.ServiceContent}
            >
              {SERVICES.map((service) => (
                <div className={classes.ServiceItem} key={service.id}>
                  <div className={classes.Image}></div>
                  <div className={classes.ServicesInfo}>
                    <h2>{service.title}</h2>
                    <p>{service.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
