import React from 'react'

import review1 from '../../components/App/assets/images/review/review1.jpg'
import review2 from '../../components/App/assets/images/review/review2.jpg'
import review3 from '../../components/App/assets/images/review/review3.jpg'

import Loadable from "@loadable/component"
const OwlCarousel = Loadable(() => import("react-owl-carousel3"))

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
}

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="review-area two three five border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">TESTIMONIALS</span>
                    <h2>Some Generous Words Of Our Satisfied Clients Who Love Our Work</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et.</p>
                </div>

                {display ? <OwlCarousel 
                    className="review-slider owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="review-item">
                        <i className='bx bxs-quote-right'></i>
                        <p>Great work, very friendly, and wonderful designs. I give my highest recommendations! Thanks, Thomas</p>
                        <img src={review1} alt="Review" />
                        <h3>Thomas Smith</h3>
                        <span>SM Institute, Denmark</span>
                    </div>

                    <div className="review-item">
                        <i className='bx bxs-quote-right'></i>
                        <p>Good job</p>
                        <img src={review2} alt="Review" />
                        <h3>Tom Henry</h3>
                        <span>Medical Research Institute</span>
                    </div>

                    <div className="review-item">
                        <i className='bx bxs-quote-right'></i>
                        <p>This is the 2nd project we have with Engage. They did a 100% perfect work, within agreed budget and timeframe. The quality of the design work far exceeded our expectations again, so we will be happy to work with Engage on more projects.</p>
                        <img src={review3} alt="Review" />
                        <h3>Jac Jacson</h3>
                        <span>SEO Expert</span>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Testimonials