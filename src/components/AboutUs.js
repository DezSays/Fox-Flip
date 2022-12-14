import React from 'react'
import {FaCocktail} from 'react-icons/fa'
import {FaGithub, FaLinkedin, FaFingerprint} from 'react-icons/fa'
import '../styles/aboutus.css'
import placeholder from '../styles/placeholder.png'

const AboutUs = () => {
  return (
    <div class="row">
        <div class="content col-md-offset-6 col-lg-offset-6">
            <center><h1 class="contentHead">ABOUT US</h1></center>
        </div>
        <div class="containers col-lg-6 col-md-6">
            <div class="pic"><img src={placeholder} alt='placeholder'/></div>
            <div class="box1"><FaCocktail className='fa-cocktail' size={20} /></div>
            <div class="box2"></div>
            <div class="social1">
                <i class="fa fa-linkedin" aria-hidden="true"><a href="https://www.linkedin.com/in/dezarea-bryan/" target="_blank" rel="noreferrer"><FaLinkedin className='icons' size={50} /></a>
</i> 
            </div>
            <div class="social2">
                <i class="fa fa-dribbble" aria-hidden="true"><a href="https://dezthedev.netlify.app/" target="_blank" rel="noreferrer"><FaFingerprint className='icons' size={50} /></a></i>
            </div>
            <div class="social3">
                <i class="fa fa-github" aria-hidden="true"><a href="http://www.github.com/DezSays" target="_blank" rel="noreferrer"><FaGithub className='icons' size={50} /></a></i>
            </div>
        </div>

    </div>   
  )
}

export default AboutUs