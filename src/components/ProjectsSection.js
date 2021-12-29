import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import VS from './images/VS_new.jpg'
import GM from './images/GM.png'
import Cards from './Cards'

function ProjectsSection() {
    return (
        <div className='hero-container-projects'>
            <div className='hero-section'>
            <div className='hero-text-projects' >
            <h1 >Projects</h1>
            </div>
            <Cards />
            {/*<div className='image-cropper-projects'><img className='hero-image-projects' src={GM} alt='Vardan Saini' />
            </div> */}
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

export default ProjectsSection
