import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import VS from './images/VS_new.jpg'
import GM from './images/GM.png'

function AboutSection() {
    return (
        <div className='hero-container-projects'>
            <div className='hero-section'>
            
            {/*<div className='image-cropper-projects'><img className='hero-image-projects' src={GM} alt='Vardan Saini' />
            </div> */}
            <div className='hero-text-projects' >
            <h1 >About</h1>
            <p style={{paddingRight:30, paddingLeft:30, textAlign:'center', fontWeight: 'bold',justifyContent: 'center',
        alignItems: 'center', lineHeight: 3, wordSpacing: 5, marginLeft: 'auto',marginRight: 'auto'}}> I built my first Android app for my school in India at the age of 15. Since then, my interest in technology has only grown exponentially. 
                Following my passion to build technical products as well as to help builders build technical products more easily, I started collaborating 
                on a no-code platform for building games using AI. I’m looking for an opportunity to apply my learning at a product-focused technical 
                organization.</p>
            </div>
            
            </div>       
           
            
            <div className="hero-btns">
                {/*<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>*/}
                {/*<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer <i className='far fa-play-circle'/> </Button>*/}
                </div>
        {/*<div className='check'>
        <h1>Heading for the section</h1>
    </div>*/}
            </div>
        
    )
}

export default AboutSection
