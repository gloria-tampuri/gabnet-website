
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
  const currentYear = new Date().getFullYear()
  return (
    <section>
      <div className={classes.footer}>
        <p>Country/Region: Ghana</p>

        <hr />

        <div className={classes.biggercolumns}>
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
            copyright <AiOutlineCopyrightCircle /> {`${currentYear}`} GABNET Printing. All rights reserved</p>
        </div>


      </div>
    </section>

  )

}

export default Footer