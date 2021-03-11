import React from 'react'
import { Link } from 'gatsby'
import logo from '../App/assets/images/engage-small-logo.svg'

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <ul>
                            <li>
                                <Link to="#blog">
                                    <a>Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader