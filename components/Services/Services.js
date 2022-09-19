import React from 'react'
import classes from './Services.module.css'
import Layout from '../Layout/Layout'
import Image from 'next/image'
import sellitems from '../../public/access/selling items.jpeg'
import leasing from '../../public/access/leasing.jpg'
import embro from '../../public/access/embro.jpg'
import gallery1 from '../../public/access/pexels-field-engineer-442154.jpg'
import gallery2 from '../../public/access/pexels-pixabay-257736.jpg'
import gallery3 from '../../public/access/gallery 1.jpg'
import brand1 from '../../public/access/brands/1.jpg'
import brand2 from '../../public/access/brands/2.jpg'
import brand3 from '../../public/access/brands/3-1.jpg'
import brand4 from '../../public/access/brands/4.jpg'
import brand5 from '../../public/access/brands/5.jpg'

const Services = () => {
  return (
  <Layout>

<div className={classes.serviceheader}>
            <h2>Our Services</h2>
            <p>We are the authorized distributor for one of the biggest Printer and Photocopier machine companies in
                Germany. Since we purchase huge volumes with leading printer and copier manufacturers like Xerox, Canon,
                Konica Minolta and Hewlett Packard, we receive huge discounts that allow us to offer exceptional
                pricing.</p>
        </div>


        <div className={classes.groupservices}>
            <div className={classes.servicecard}>

                <div className={classes.cardimage}>
                    <Image src={sellitems} alt="selling items"/>
                </div>

                <div className={classes.carddescription}>
                    <div className="shopcart"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg></div>

                    <div>
                        <h3> FOR SALE</h3>
                        <p>We sell all types and brands of Photocopiers, Printers and their accessories </p>
                    </div>
                </div>


            </div>

            <div className={classes.servicecard}>

                <div className={classes.cardimage}>
                    <Image src={leasing} alt="leasing"/>
                </div>

                <div  className={classes.carddescription}>
                    <div className="shopcart"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div>
                        <h3>FOR LEASING</h3>
                        <p>We rent all types and brands of Photocopiers, Printers and their accessories to organisations
                            and individuals</p>
                    </div>
                </div>


            </div>



            <div className={classes.servicecard}>

                <div className={classes.cardimage}>
                    <Image src={embro} alt="embroidery"/>
                </div>

                <div className={classes.carddescription}>
                    <div className="shopcart"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                                clip-rule="evenodd" />
                        </svg></div>

                    <div>
                        <h3>Repair and Maintenance</h3>
                        <p> We repair broken printing machines and also help maintain your machines for longevity </p>
                    </div>
                </div>


            </div>
        </div>

        <div className={classes.servicegallery}>
            <h2>Service Gallery</h2>

            <div className={classes.gallery}>

                <div>
                    <Image src={gallery1} alt="engineer"/>
                </div>
                <div>
                    <Image src={gallery2} alt="switches"/>
                </div>
                <div> <Image src={gallery3} alt="engineer"/></div>
            </div>
        </div>

        <div className={classes.ourbrands}>
            <h2>Our Brands</h2>
            <div>
                <div className="putincenter">
                    <Image src={brand1} alt="epson"/>
                    <Image src={brand2} alt="cannon"/>
                    <Image src={brand3} alt="hp"/>
                    <Image src={brand4} alt="Konica Minolta"/>
                    <Image src={brand5} alt="Xerox"/>
                </div>
            </div>
        </div>

  </Layout>
  )
}

export default Services