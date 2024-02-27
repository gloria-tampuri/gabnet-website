import React, { useState, useRef } from 'react'
import classes from './Contact.module.css'
import Layout from '../Layout/Layout'
import Link from 'next/link'
import Rotate from 'react-reveal/Rotate';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail } from 'react-icons/md'
import { IoIosCall } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { FiFacebook } from 'react-icons/fi'
import { TbBrandTwitter } from 'react-icons/tb'
import { TbBrandInstagram } from 'react-icons/tb'

const Contact = () => {
    const form = useRef();

    const notify = () => toast.success("Great! Form has been submited",{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
    });

    const[firstName, setFirstName]=useState('')
    const[lastName, setLastname]= useState('')
    const[email, setEmail]=useState('')
    const[phone, setPhone] =useState('')
    const [message, setMessage]= useState('')

    const[isLoading, setIsLoading]=useState(false)

    const onFormSubmit=(e)=>{
        e.preventDefault()
        setIsLoading(true)
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                result.text === "OK" && setIsLoading(false)
            }, (error) => {
                console.log(error.text);
            });

        const recievedMsg={
            firstName,
            lastName,
            email,
            phone,
            message
        }

        setEmail('')
        setFirstName('')
        setLastname('')
        setMessage('')
        setPhone('')

        notify()
    }

    return (
        <Layout>

            <div className={classes.topic}>
                <h1>Contact Us</h1>
                <p>Any question or remarks? Just write us a message!</p>
            </div>

            <div className={classes.mainlayout}>
                <Rotate left>
                    <div className={classes.ourcontact}>
                        <h2>
                            Contact Information
                        </h2>
                        <p> Fill up the form and our team will get back to you within 24 hours</p>

                        <div className={classes.contactsection}>
                            <IoIosCall className={classes.socialicon} />
                            <Link href="tel:+233595850394">+233595850394 / 0302243847</Link>
                        </div>

                        <div className={classes.contactsection}>
                            <IoIosCall className={classes.socialicon} />
                            <Link href="tel:+233241806223">+233241806223 (Kumasi)</Link>
                        </div>

                        <div className={classes.contactsection}>
                            <MdEmail className={classes.socialicon} />
                            <Link href='mailto:info@gabnetprinting.com'>info@gabnetprinting.com</Link>
                        </div>

                        <div className={classes.contactsection}>
                            <IoLocationSharp className={classes.location} />
                            <Link href='https://www.google.com/maps/place/House+Party+Computers/@5.5882174,-0.2098218,17z/data=!3m1!4b1!4m5!3m4!1s0xfdf9a38d31c2bd7:0x4c44cda630d1e91e!8m2!3d5.5882174!4d-0.2076331'>House Party Main Building,opposite Republic and NIB Banks, Accra-Ghana / Almadiya Roundabout, Kumasi</Link>
                        </div>

                        {/* <div className={socials}>
                    <img src="/svgfiles/facebook.svg" alt="facebook">
                    <img src="/svgfiles/twitter.svg" alt="twitter">
                    <img src="/svgfiles/instagram.svg" alt="instagram">
                </div> */}

                        <div className={classes.socials}>
                            <FiFacebook className={classes.socialmedia} />
                            <TbBrandTwitter className={classes.socialmedia} />
                            <TbBrandInstagram className={classes.socialmedia} />
                        </div>

                        <div className={classes.cone}>
                        </div>
                        <div className={classes.circle}>
                        </div>
                    </div>
                </Rotate>

                <div className={classes.yourcontact}>
                    <form ref={form} className={classes.form} onSubmit={onFormSubmit}>
                        <div className={classes.formsection}>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" name="first-name" id="first-name" placeholder="John" required value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                        </div>

                        <div className={classes.formsection}>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" name="last-name" id="last-name" placeholder="Doe" required value={lastName} onChange={(e)=>{setLastname(e.target.value)}} />
                        </div>

                        <div className={classes.formsection}>
                            <label htmlFor="mail">Mail</label>
                            <input type="email" name="mail" id="mail" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>

                        <div className={classes.formsection}>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" placeholder="Enter phone number" value={phone} required onChange={(e)=>{setPhone(e.target.value)}} />
                        </div>
                        <div className={`${classes.formsection} ${classes.textarea}`}>
                            <label htmlFor="message"> Message</label>
                            <textarea name="message" id="" cols="30" rows="10" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                        </div>
                        <button className={classes.button} disabled={isLoading}>{isLoading ? 'Send... ':'Send Message'}</button>
                    </form>

                    {/* <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form> */}

                </div>

            </div>
            <ToastContainer />
        </Layout>
    )
}

export default Contact