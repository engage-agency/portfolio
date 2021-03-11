import React from 'react'
import {Link} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            <div className="common-right-text-two">
                <span>ENGAGE <br /> DIGITAL <br /> HIGHLY <br /> EXPERIENCED <br /> WEB <br /> EXPERTS</span>
            </div>
            
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1><span>Engage</span> Us</h1>
                            <p>Hello we are <span>Engage</span> from everywhere. We have rich experience of 8+ years in web design and development. We love to hear about your unique needs.</p>

                            <div className="banner-btn-area">
                                <Link to="case-study" className="common-btn three">
                                    Portfolio
                                </Link>
                                <AnchorLink offset={() => -1} href="#contact" className="common-btn banner-btn three">
                                    Start Your Project <span>🎉</span>
                                </AnchorLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

        </div>
    )
}

export default MainBanner