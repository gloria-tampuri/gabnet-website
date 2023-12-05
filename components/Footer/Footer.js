
import React from 'react'
import classes from './Footer.module.css'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import Jump from 'react-reveal/Jump';

const Footer = () => {
  return (
    <section>
      <div className={classes.footer}>
        <p>Country/Region: Ghana</p>

        <hr />

        <div className={classes.biggercolumns}>

          <div className={classes.rows}>
            <ul>
              <h4>Abous Us</h4>
              {/* <li>Gabnet Enterprise is a subsidiary</li>
                <li> of House Party Computers.</li>
                <li> We deal in the sale of quality</li>
                <li>Embroidery Machines, Large Format </li>
                <li> Printing Machines, New/Refurbished</li>
                <li> printers/photocopiers</li> */}
              <li className={classes.aboutUs}>Gabnet Enterprise aims at providing our customers with VALUE FOR MONEY deals on   Printers, Copiers and consumables for their printing requirements. We stock a wide range of printing equipment such as Heat press, screen printing, digital embroidery, plasma, fiber laser, DTF printers, roll laminators, CO2 laser and many more.<br></br>
                We adapt an honest and sincere approach to doing business with our customers and we are passionate about supporting small printing shops to grow with and make more profit. <br></br>
                Over the years we have supported small printing businesses to grow their sales and profit by providing them with technical support, appropriate equipment and bringing new technology to their door step at affordable prices.
                We are based in Accra, with a branch in Kumasi in the Ashanti Region.
                We have thousands of satisfied customers across Ghana including Small & medium printing businesses, Hotels and schools.
              </li>
            </ul>

          </div>

          <div className={classes.rows}>
            <ul>
              <h4>Ways to buy</h4>
              <li>Shop online</li>
              <li>Call an GABNET rep</li>
              <li>Find a reseller</li>
              <li>Enterprise store</li>
              <li>Public sector purchasing</li>
            </ul>
          </div>

          <div className={classes.rows}>
            <ul>
              <h4>Partners</h4>
              <li>Hp</li>
              <li>Xerox</li>
              <li>Konica Minolta</li>
              <li>Canon</li>
              <li>Epson</li>
            </ul>
          </div>

          <Jump duration={5000}>
            <div className={classes.rows}>
              <ul>
                <h4>Contact</h4>

                <li className={classes.socialfoot}>
                  <IoIosCall className={classes.socialicon} />
                  <Link href="tel:+233595850394">+233595850394 / 0302243847</Link>
                </li>


                <li className={classes.socialfoot}>
                  <IoIosCall className={classes.socialicon} />
                  <Link href="tel:+233241806223">+233241806223 (Kumasi)</Link>
                </li>

                {/* <li className={classes.socialfoot}>
                  <MdEmail className={classes.socialicon}/>
                  <Link href="mailto: info@gabnetprinting.com"> info@gabnetprinting.com</Link>
                 </li>

                 <li className={classes.socialfoot}>
                  <IoLocationSharp className={classes.socialicon}/>
                 </li> */}

                <li className={classes.socialfoot}>
                  <MdEmail className={classes.socialicon} />
                  <Link href='mailto:info@gabnetprinting.com'>info@gabnetprinting.com</Link>
                </li>
                <li className={classes.socialfoot}>
                  <IoLocationSharp className={classes.socialicon} />
                  <Link href="https://www.google.com/maps/place/House+Party+Computers/@5.5882174,-0.2098218,17z/data=!3m1!4b1!4m5!3m4!1s0xfdf9a38d31c2bd7:0x4c44cda630d1e91e!8m2!3d5.5882174!4d-0.2076331">House Party Main Building, opposite Republic and NIB Banks <br /> New Town, Accra-Ghana. /      Almadiya Roundabout, Kumasi</Link>
                </li>
              </ul>
            </div>
          </Jump>

        </div>

        <div className={classes.copyright}>
          <p>
            copyright <AiOutlineCopyrightCircle /> 2023 GABNET Printing. All rights reserved</p>
        </div>


      </div>
    </section>

  )

}

export default Footer