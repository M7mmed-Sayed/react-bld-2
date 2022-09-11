import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Css//CoursePage/CourseHeader.css'
import Stars from '../Common/Stars'
import CourseHeaderMobileMode from './CourseHeaderMobileMode'
import SideCard from './SideCard'

function CourseHeader({ title, describe, instractors ,imgurl }) {
    let CourseInsetractorsName='';
    instractors.forEach((element) => {CourseInsetractorsName+=element.name})
    return (
        <div className="Header">
            <div className="header-content">
                <div className="course-path">
                    <Link to={'/'}>Development</Link>
                    {'  >  '}
                    <Link to={'/'}>Programming Languages</Link>
                    {' > '}
                    <Link to={'/'}>Python</Link>
                </div>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <h6>{describe}</h6>
                </div>
                <div className="rate-container">
                    <Stars rating={4.4} />
                    <Link to={'/'}>
                        <h6 className="rating-pepole  rating-item">
                            (1252 rating)
                        </h6>
                    </Link>
                    <h6 className="students  rating-item">19,478 students</h6>
                </div>
                <div className="author">
                    {'Created by '}{' '}
                    <Link to={'/'}>{CourseInsetractorsName}</Link>
                </div>
                <div className="extra-data">
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
                </div>
            </div>
            <CourseHeaderMobileMode
                title={title}
                describe={describe}
                instractors={instractors}
                Imageurl={imgurl}
            />
        </div>
    )
}

export default CourseHeader
