import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import VS from './images/VS_new.jpg'
import GM from './images/GM.png'

function PublicationSection() {
    return (
        <div className='hero-container'>
            <div className='hero-section'>
            
            {/*<div className='image-cropper-projects'><img className='hero-image-projects' src={GM} alt='Vardan Saini' />
            </div> */}
            <div className='hero-text' >
            <h1 >Publications</h1>
            <p> <a href="https://ojs.aaai.org/index.php/AIIDE/article/view/7450/7349"
            style={{color: 'white'}}>
                A Demonstration of Mechanic Maker: An AI for Mechanics Co-Creation</a> | Published in one of AI's best conference</p>
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

export default PublicationSection
