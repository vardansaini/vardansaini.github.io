import React from 'react'
import '../../App.css'
import ProfileSection from '../ProfileSection'
import ProjectsSection from '../ProjectsSection'
import PublicationSection from '../PublicationSection'
import AboutSection from '../AboutSection'
import Cards from '../Cards'
import Footer from '../Footer'

function Home () {
    return(
        <>
        
        <ProfileSection />

       
        <AboutSection />
        
        
       
        <PublicationSection />

        <ProjectsSection />
        {/*<Cards />*/}
        
        <Footer />

        </>

    )
}


export default Home;
