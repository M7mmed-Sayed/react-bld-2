import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Css//CoursePage/CourseHeader.css'
import CourseHeaderMobileMode from './CourseHeaderMobileMode'
import SideCard from './SideCard'
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
function CourseHeader(props) {
    const [course, setCourse] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        if (props.data != null) {
            setisLoading(false)
            setCourse(props.data)
        }
    }, [props.data])
    return isLoading ? (
        <div>looodaing----</div>
    ) : (
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
                    <h2>{course.title}</h2>
                </div>
                <div>
                    <h6>
                        Learn A-Z everything about Python, from the basics, to
                        advanced topics like Python GUI, Python Data Analysis,
                        and more!
                    </h6>
                </div>
                <div className="rate-container">
                    <h3 className="rating-value  rating-item ">
                        {course.rating}
                    </h3>
                    <ul className="stars-list  rating-item">{StarRating()}</ul>
                    <Link to={'/'}>
                        <h6 className="rating-pepole  rating-item">
                            (1252 rating)
                        </h6>
                    </Link>
                    <h6 className="students  rating-item">19,478 students</h6>
                </div>
                <div className="author">
                    {'Created by '} <Link to={'/'}>{course.author}</Link>
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
            <CourseHeaderMobileMode/>
        </div>
    )
}

export default CourseHeader
