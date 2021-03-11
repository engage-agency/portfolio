import React from "react"
import Layout from "../components/App/layout"
import SEO from "../components/App/seo"
import Navbar from "../components/Pages/Navbar"
import MainBanner from "../components/Pages/MainBanner"
import About from "../components/Pages/About"
import Services from "../components/Pages/Services"
import Experience from "../components/Pages/Experience"
import Skills from "../components/Pages/Skills"
import Projects from "../components/Pages/Projects"
import BlogPost from "../components/Pages/BlogPost"
import Testimonials from "../components/Pages/Testimonials"
import ContactForm from "../components/Pages/ContactForm"
import Footer from "../components/Pages/Footer"

const IndexPage = () => (
    <Layout>
        <div className="body-bg-five">
            <div className="main-area two">
                <Navbar />
                <SEO title="Engage Digital Agency - Web Development and Design" />
                <div className="main-content two">
                    <MainBanner />
                    <About />
                    <Services />
                    <Experience />
                    {/* <Skills /> */}
                    <Projects />
                    {/* <BlogPost /> */}
                    <Testimonials />
                    <ContactForm />
                    <Footer />
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage