import React from 'react'
import Link from 'gatsby-link'
import About from '../components/About'
import Stack from '../components/Stack'
import Info from '../components/Info'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Frase from '../components/Frase'
import Footer from '../components/Footer'

export default () => (
    <div id="index">
        <About/>
        <Stack/>
        <Frase/>
        <Skills/>
        <Info/>
        <Contact/>
        <Footer/>
    </div>

)

