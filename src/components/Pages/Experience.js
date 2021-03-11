import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Experience = () => {
    return (
        <div className="experience-area three border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">EXPERIENCE AND TEAM</span>
                    <h2>We Have 10+ Years Of Experience With Many Awards</h2>
                    <p>Since beginning our journey nearly 10 years ago, we've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. We are quietly confident, naturally curious, and perpetually improving our chops.</p>
                </div>

                <div className="experience-content">
                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>Adina Pana</span>
                            </li>
                            <li>
                                <span>Senior Project Manager, Automated Marketing and Communication Expert</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>Pual Mustacescu</span>
                            </li>
                            <li>
                                <span>Fullstack Developer</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>Silviu Stefanescu</span>
                            </li>
                            <li>
                                <span>Frontend Developer, UI & UX Designer</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <AnchorLink offset={() => -1} href="#portfolio" className="common-btn three">
                            Our Featured Case Studies
                        </AnchorLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience