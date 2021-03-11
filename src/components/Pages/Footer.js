import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <div className="copyright-area three">
                <div className="container">
                    <div className="copyright-item">
                        <p>&copy;{currentYear} Design & Developed by <a href="https://www.upwork.com/o/companies/~01341958bbc66cc88f/" target="_blank" rel="noreferrer">Engage</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer