import React from 'react'
import { Link } from 'gatsby'
import study1 from '../../components/App/assets/images/case-study/case-study1.jpg'
import study2 from '../../components/App/assets/images/case-study/case-study2.jpg'
import study3 from '../../components/App/assets/images/case-study/case-study3.jpg'

const CaseStudy = () => {
    return (
        <div className="case-study-area pb-200">
            <div className="container">
                <div className="section-title four pt-100 pb-100">
                    <h2>Some In Depth <span>Case Study</span> Of Our Successful Projects</h2>
                </div> 

                <div className="row align-items-center">
                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src={study1} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/projects/case-study-details">
                                            Saas Webdevelopment
                                        </Link>
                                    </h3>
                                    <span>Logo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-content">
                            <h3>
                                <Link to="/projects/case-study-details">
                                    Saas Webdevelopment Logo Design
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>

                            <Link to="/projects/case-study-details" className="case-study-btn">
                                Explore More <i className="flaticon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-content">
                            <h3>
                                <Link to="/projects/case-study-details">
                                    ERP Software Logo
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>
                            
                            <Link to="/projects/case-study-details" className="case-study-btn">
                                Explore More <i className="flaticon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src={study2} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/projects/case-study-details">
                                            ERP Website
                                        </Link>
                                    </h3>
                                    <span>ERP</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src={study3} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/projects/case-study-details">
                                            Restaurant Website Logo Design
                                        </Link>
                                    </h3>
                                    <span>Restaurant</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="case-study-content">
                            <h3>
                                <Link to="/case-study-details">
                                    Restaurant Website Design
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>
                            
                            <Link href="/case-study-details" className="case-study-btn">
                                Explore More <i className="flaticon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center pb-100 pt-100">
                    <Link to="/case-study" className="common-btn three">
                        Explore More
                    </Link>
                </div>
            </div>
        </div>
    )   
}

export default CaseStudy