import React, { useState, useContext } from 'react'

import classes from './ExploreList.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import ListSubCategoryMobile from '../Header/Explore/ListSubCategoryMobile'
import { IoIosClose } from 'react-icons/io'
import { SubcategoryContext } from '../../context/SubcategoryContext'
import Fade from 'react-reveal/Fade';
import { slugify } from '../../Helpers/slugify'
import Link from 'next/link'
import { MobileModalContext } from '../../context/MobileModalContext'

const ExploreList = () => {
  const mobileModalC = useContext(MobileModalContext)
  const { hideMobileModal } = mobileModalC;

  const [openSP, setOpenSp] = useState(false)
  const [openSHT, setOpenSHT] = useState(false)
  const [openP, setOpenP] = useState(false)
  const [openPSP, setOpenPSP] = useState(false)
  const [openPF, setOpenPF] = useState(false)
  const [openTI, setOpenTI] = useState(false)
  const [openPC, setOpenPC] = useState(false)



  const [isopen, setIsopen] = useState(false)

  // const toShowCategory = (category) => {
  //   console.log(category);
  //   // console.log(event.target);
  //   setIsopen(true)
  // }
  // 

  return (
    <div>
      <Fade left>
        <div>
          <div className={classes.ExploreList}>
            <p>SCREEN PRINTING</p> {openSP ? <span>< IoIosClose className={classes.ExploreListSpan} onClick={() => setOpenSp(false)} />  </span> : <span><AiOutlinePlus className={classes.ExploreListSpan} onClick={() => setOpenSp(true)} /></span>}
          </div>
          {openSP && <ListSubCategoryMobile className={classes.sublist} category="SCREEN PRINTING" />}
        </div>

        <div>
          <div className={classes.ExploreList}>
            <p>SUBLIMATION AND HEAT TRANSFER</p> {openSHT ? <span>< IoIosClose className={classes.ExploreListSpan} onClick={() => setOpenSHT(false)} />  </span> : <span><AiOutlinePlus className={classes.ExploreListSpan} onClick={() => setOpenSHT(true)} /></span>}
          </div>
          {openSHT && <ListSubCategoryMobile className={classes.sublist} category="SUBLIMATION AND HEAT TRANSFER" />}
        </div>

        <div>
          <div className={classes.ExploreList}>
            <p>PRINTERS</p> {openP ? <span>< IoIosClose className={classes.ExploreListSpan} onClick={() => setOpenP(false)} />  </span> : <span><AiOutlinePlus className={classes.ExploreListSpan} onClick={() => setOpenP(true)} /></span>}
          </div>
          {openP && <ListSubCategoryMobile className={classes.sublist} category="PRINTERS" />}
        </div>

        <div>
          <div className={classes.ExploreList}>
            <p>PRINTER SPARE PARTS</p> {openPSP ? <span>< IoIosClose className={classes.ExploreListSpan} onClick={() => setOpenPSP(false)} />  </span> : <span><AiOutlinePlus className={classes.ExploreListSpan} onClick={() => setOpenPSP(true)} /></span>}
          </div>
          {openPSP && <ListSubCategoryMobile className={classes.sublist} category="PRINTER SPARE PARTS" />}
        </div>

        <div>
          <div className={classes.ExploreList}>
            <p>PRINTING FINISHING</p> {openPF ? <span>< IoIosClose className={classes.ExploreListSpan} onClick={() => setOpenPF(false)} />  </span> : <span><AiOutlinePlus className={classes.ExploreListSpan} onClick={() => setOpenPF(true)} /></span>}
          </div>
          {openPF && <ListSubCategoryMobile className={classes.sublist} category="PRINTING FINISHING" />}
        </div>

        <div>
          <div className={classes.ExploreList}>
            <p>TONERS AND INKS</p> {openTI ? <span><IoIosClose className={classes.ExploreListSpan} onClick={() => setOpenTI(false)} />  </span> : <span><AiOutlinePlus className={classes.ExploreListSpan} onClick={() => setOpenTI(true)} /></span>}
          </div>
          {openTI && <ListSubCategoryMobile className={classes.sublist} category="TONERS AND INKS" />}
        </div>

        <div>
          <div className={classes.ExploreList}>
            <p>INDUSTRIAL PRINTERS/ SPECIAL COMMMERCIAL MACHINES</p> {openTI ? <span><IoIosClose className={classes.ExploreListSpan} onClick={() => setOpenPC(false)} />  </span> : <span><AiOutlinePlus className={classes.ExploreListSpan} onClick={() => setOpenPC(true)} /></span>}
          </div>
          {openPC && <ListSubCategoryMobile className={classes.sublist} category="INDUSTRIAL PRINTERS/ SPECIAL COMMMERCIAL MACHINES" />}
        </div>


        

        <div>
          <div className={classes.ExploreList}>
            <Link href={`/${slugify('HEAVY DUTY MACHINES')}`}>
              <li className={classes.linkList} onClick={hideMobileModal} >HEAVY DUTY MACHINES</li>
            </Link>
          </div>
        </div>

        <div>
          <div className={classes.ExploreList}>
            <Link href={`/${slugify('EMBROIDERY MACHINES')}`}>
              <li className={classes.linkList} onClick={hideMobileModal} >EMBROIDERY MACHINES</li>
            </Link>
            <p></p>
          </div>
        </div>

      </Fade>
    </div>
  )
}

export default ExploreList