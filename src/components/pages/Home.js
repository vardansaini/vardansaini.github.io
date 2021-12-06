import React from 'react'
import '../../App.css'
import ProfileSection from '../ProfileSection'
import ProjectsSection from '../ProjectsSection'
import PublicationSection from '../PublicationSection'
import Cards from '../Cards'
import Footer from '../Footer'

function Home () {
    return(
        <>
        <ProfileSection />
        <ProjectsSection />
        <PublicationSection />
        {/*<Cards />*/}
        <Footer />
        </>

    )
}

export default Home;
