import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import VS from './images/VS_new.jpg'

function ProfileSection() {
    return (
        <div className='hero-container'>
            <div className='hero-section'>
            <div className='image-cropper'><img className='hero-image' src={VS} alt='Vardan Saini' />
            </div> 
            <div className='hero-text'>
            <h1 style={{fontSize: 60}}>Software Developer</h1>
            <h3 style={{fontSize: 20, paddingRight:70, paddingLeft:70, paddingTop:10}}>Research Assistant AI LAB | UofA Computer Science</h3>
            <p style={{fontSize: 20}}> <a href="https://www.linkedin.com/in/vardan-saini-697225180/"
            style={{color: 'white'}}>
                Linkedin</a> | <a href="https://github.com/vardansaini" style={{color: 'white'}}>
                Github</a></p>
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

export default ProfileSection
