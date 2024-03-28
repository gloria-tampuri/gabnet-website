"use client";
import React, { useRef } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const PageScrollProvider = ({ children }) => {
    const lenisRef = useRef()

    useGSAP(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 300)
        }
        gsap.ticker.add(update)

        return () => {
            gsap.ticker.remove(update)
        }
    })

    return (
        <ReactLenis root ref={lenisRef} autoRaf={false}>
            {children}
        </ReactLenis>
    )
}

export default PageScrollProvider