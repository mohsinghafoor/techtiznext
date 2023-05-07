import React, { useEffect } from 'react'
import { Banner } from './components/about-us/banner/Banner'
import { DoMore } from './components/about-us/banner/DoMore'

export default function AboutUs () {
    useEffect(() => {
        document.title = `About Us - Behtari`
      },[])
    return(
        <>
            <Banner />
            <DoMore />
        </>
    )
}