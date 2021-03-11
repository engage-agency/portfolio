import React from 'react'
import TopHeader from '../components/CaseStudy/TopHeader'
import PageBanner from '../components/Common/PageBanner'
import CaseStudy from '../components/Pages/CaseStudy'
import Footer from '../components/CaseStudy/Footer'
import { Link } from 'gatsby'
import ContactForm from '../components/CaseStudy/ContactForm'
import caseImg from '../components/App/assets/images/case-study/case-study-details1.jpg'

const Portfolio = () => {
    return (
        <React.Fragment>  
            <TopHeader />
            <PageBanner 
                bgText="Our Works" 
                pageTitle="Our Works" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Our Works" 
            /> 

            <CaseStudy />
 
            <Footer />
        </React.Fragment>
    )
}

export default Portfolio