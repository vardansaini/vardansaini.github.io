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
        <a name="Profile"><ProfileSection /></a>
        <a name="About"><AboutSection /></a>
        <a name="Publications"><PublicationSection /></a>
        <a name="Projects"><ProjectsSection /></a>
        {/*<Cards />*/}
        <Footer />

        </>

    )
}


export default Home;
