import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                {/*<p className='footer-subscription-heading'>
                Let me know what do you think? </p>
                <p className='footer-subscription-text'>
                    Feel free to contact. </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Contact Me</Button>

                    </form>
    </div>*/}
            </section>
            <div className='footer-links'>
               {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    
            </div>
            <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    
    </div>*/}
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                   {/* <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                         Vardan Saini
</Link>
                    </div>*/}
                    <small className='website-rights'>Vardan Saini © 2021</small>
                    <div className='social-icons'>
                        <a className='social-icon-link youtube'
                        href="https://www.youtube.com/channel/UC2BX8qSIUK_VeyeuOrTEcWw"
                        aria-label='youtube'>
                            <i className='fab fa-youtube' />
                        </a>
                        <a className='social-icon-link twitter'
                        href="https://twitter.com/vardan_saini"
                        aria-label='twitter'>
                            <i className='fab fa-twitter' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
