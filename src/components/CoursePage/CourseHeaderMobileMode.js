import React from 'react'
import { Link } from 'react-router-dom'
import '../../Css/CoursePage/CourseHeaderMobileMode.css'
import * as Icon from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

const StarRating = () => {
    return [...Array(5)].map((star, index) => {
        index++
        return (
            <li key={index}>
                <i className="fa-solid fa-star star-icon"></i>
            </li>
        )
    })
}
function CourseHeaderMobileMode() {
    return (
        <div className="header-mb-container">
            <div className="hd-mobile-mode">
                <div className="course-path">
                    <Link to={'/'}>Development</Link>
                    {'  >  '}
                    <Link to={'/'}>Programming Languages</Link>
                    {' > '}
                    <Link to={'/'}>Python</Link>
                </div>
                <div className="img-mastercover-mb">
                    <img
                        src="https://archive.org/download/mx-player-icon/mx-player-icon.png"
                        width="54px"
                        alt="Play button"
                        className="play-button"
                    />
                </div>
                <div className="info-mb">
                    <div>
                        <h1>
                            {
                                'Learn Python: The Complete Python Programming Course'
                            }
                        </h1>
                    </div>
                    <div>
                        <h6>
                            Learn A-Z everything about Python, from the basics,
                            to advanced topics like Python GUI, Python Data
                            Analysis, and more!
                        </h6>
                    </div>
                    <div className="rate-container">
                        <h3 className="rating-value  rating-item ">{4.4}</h3>
                        <ul className="stars-list  rating-item">
                            {StarRating()}
                        </ul>
                        <Link to={'/'}>
                            <h6 className="rating-pepole  rating-item">
                                (1252 rating)
                            </h6>
                        </Link>
                        <h6 className="students  rating-item">
                            19,478 students
                        </h6>
                    </div>
                    <div className="author">
                        {'Created by '}{' '}
                        <Link to={'/'}>{'avinsh jani , the Codex'}</Link>
                    </div>
                    <div className="extra-data-mb">
                        <div className="course-date">
                            <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                            Last updated 9/2015
                        </div>
                        <div className="language">
                            <i className="fa-solid fa-globe"></i>
                            English
                        </div>
                        <div className="tran">
                            <i className="fa-solid fa-closed-captioning"></i>
                            English
                        </div>
                        <div className="d-flex flex-row mt-2">
                            <p className="m-1 font-weight-bold h1">E£269.99</p>
                            <s className="m-1 d-d-block">
                                <h4>E£679.99</h4>
                            </s>
                            <h5 className="m-1 d-d-block">60% off</h5>
                        </div>
                        <div className="d-flex flex-row mt-2 time-left">
                            <Icon.Alarm className="m-1" />
                            <div className="m-1">
                                <h6>{'8 hours left at this price!'}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-danger">
                    <span>Add To Card</span>
                </button>
                <h6 className="m-3">30-Day Money-Back Guarantee</h6>
                <div className="side-card-links-mb">
                    <Link to={'/'}>
                        <span>Share</span>
                    </Link>
                    <Link to={'/'}>
                        <span>Gift this course</span>
                    </Link>
                    <Link to={'/'}>
                        <span>Apply Coupon</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseHeaderMobileMode
