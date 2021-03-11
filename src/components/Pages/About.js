import React from 'react'
import aboutImg from '../../components/App/assets/images/about-engage-gradient.svg'

const About = () => {
    return (
        <div id="about" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="about-img-three">
                            <img src={aboutImg} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title three">
                                <span className="sub-title">ABOUT US</span>
                                <h2>Make a memorable experience. Let your project act in a way that will exceeds users' expectations. See what we can do to help you.</h2>
                                <p>Highly skilled in communication, project management and web development we work with tech stacks from Javascript, NodeJs, React, VueJs and PHP with MySql and MongoDb on the backend side. We love Design tools like Adobe Photoshop, Illustrator, Affinty Designer too.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="left">
                                        <ul>
                                            <li>
                                                <span>UI & UX Development</span>
                                                ✅
                                            </li>
                                            <li>
                                                <span>UI & UX Design</span>
                                                ✅
                                            </li>
                                            <li>
                                                <span>Digital Design</span>
                                                ✅
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <span>Front-end Development</span>
                                                ✅
                                            </li>
                                            <li>
                                                <span>Back-end development</span>
                                                ✅
                                            </li>
                                            <li>
                                                <span>Project Management</span>
                                                ✅
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
    )
}

export default About