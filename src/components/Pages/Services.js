import React from 'react'
import {Link} from 'gatsby'

const Services = () => {
    return (
        <div className="what-area three border-bottom-two pt-100 pb-70">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">SERVICES</span>
                    <h2>We Offer Special Service To Our Clients For Their Ultimate Satisfaction</h2>
                    <p>Our speciality is producing clean, valid code, transferring project from design state to pixel perfect and fully responsive UI, backed up by latest technologies.</p>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <i className="flaticon-global icon"></i>
                            <h3>
                                <Link to="/service-details-webdesign">
                                    Web & App Design
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda at doloribus dolore quae quibusdam</p>

                            <Link to="/service-details-webdesign" className="what-btn">
                                Explore More <i className="flaticon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <i className="flaticon-smartphone icon"></i>
                            <h3>
                                <Link to="/service-details-webdevelopment">
                                    Web Development
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda at doloribus dolore quae quibusdam</p>
                            
                            <Link to="/service-details-webdevelopment"className="what-btn">
                                Explore More <i className="flaticon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <i className="flaticon-paintbrush icon"></i>
                            <h3>
                                <Link to="/service-details-ui-ux-social-media">
                                    UI/UX and Social Media Design
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda at doloribus dolore quae quibusdam</p>
                            
                            <Link to="/service-details-ui-ux-social-media" className="what-btn">
                                Explore More <i className="flaticon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <i className="flaticon-branding icon"></i>
                            <h3>
                                <Link to="/service-details-branding-pm-automated-marketing">
                                    Branding, PM & Automated Marketing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda at doloribus dolore quae quibusdam</p>
                            
                            <Link href="/service-details-branding-pm-automated-marketing" className="what-btn">
                                Explore More <i className="flaticon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services