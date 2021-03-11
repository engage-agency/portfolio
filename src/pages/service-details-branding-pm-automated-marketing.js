import React from 'react'
import TopHeader from '../components/ServiceDetails/TopHeader'
import PageBanner from '../components/Common/PageBanner'
import Footer from '../components/ServiceDetails/Footer'
import ContactForm from '../components/ServiceDetails/ContactForm'
import imgService from '../components/App/assets/images/services/service-details1.jpg'

const ServiceDetailsAutomatedMarketing = () => {
    return (
        <React.Fragment>  
            <TopHeader />
            <PageBanner 
                bgText="Automated Marketing" 
                pageTitle="Automated Marketing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Automated Marketing" 
            /> 

            <div id="service-details" className="service-details-area pt-100 pb-70">
                <div className="container">
                    <div className="details-item">
                        <img src={imgService} alt="Details" />
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ips um dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore mag na aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>

                        <h3>Key Features</h3>

                        <ul className="item">
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </li>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                It is a long established fact that a reader will be distracted by the readable
                            </li>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                Contrary to popular belief, Lorem Ipsum is not simply random text
                            </li>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                There are many variations of passages of Lorem Ipsum available
                            </li>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined
                            </li>
                        </ul>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy tempor invidunt ut labore et dolore</p>
                        
                        <div className="contact-area">
                            <div className="container">
                                <div className="section-title">
                                    <h2>Have Any Project? Just <span>Drop A Line</span>. I Always Love To Hear From You</h2>
                                </div>

                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <ContactForm />
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="contact-content">
                                            <div className="top">
                                                <ul>
                                                <li>
                                                    <span>Email:</span>
                                                    <a href="mailto:hello@engage.com">hello@engage.com</a>
                                                </li>
                                                <li>
                                                    <span>Website:</span>
                                                    <a href="#" target="_blank">www.engage.com</a>
                                                </li>
                                                <li>
                                                    <span>Skype:</span>
                                                    <a href="#" target="_blank">hello@engage.com</a>
                                                </li>
                                                </ul>
                                            </div>

                                            <div className="bottom">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className='bx bxl-linkedin'></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className='bx bxl-github'></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className='bx bxl-upwork'></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </React.Fragment>
    )
}

export default ServiceDetailsAutomatedMarketing