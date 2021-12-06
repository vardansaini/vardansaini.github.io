import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import VS from './images/VS_new.jpg'
import GM from './images/GM.png'

function ProjectsSection() {
    return (
        <div className='hero-container-projects'>
            <div className='hero-section'>
            
            {/*<div className='image-cropper-projects'><img className='hero-image-projects' src={GM} alt='Vardan Saini' />
            </div> */}
            <div className='hero-text-projects' >
            <h1 >Projects</h1>
            <p style={{color: 'black'}}> <a href=""
            style={{color: 'black'}}>
                Mechanic Maker</a> | Github Link will be provided soon after human subject study</p>
                <p> <a href="https://github.com/Techno-cratz/Inclusify"
            style={{color: 'black'}}>
                Inclusify</a> | Hack The North Hootsuite API Sponser Prize Winner</p>
                <p> <a href="https://github.com/Techno-cratz/BestPrice"
            style={{color: 'black'}}>
                Best Price</a> | Top 5 in hip,hack[array] Hackathon </p>
                <p> <a href="https://github.com/vardansaini/med_assist"
            style={{color: 'black'}}>
                Med Assist</a> | An app made with flutter for assisting people in need</p>
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

export default ProjectsSection
