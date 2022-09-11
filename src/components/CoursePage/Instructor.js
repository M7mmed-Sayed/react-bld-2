import React from 'react'
import { Link } from 'react-router-dom'
import '../../Css/CoursePage/Instructor.css'
function Instructor({
    id,
    name,
    about,
    rating,
    review,
    student,
    courses,
    profile,
}) {
    return (
        <div className="instructor">
            <Link to={'/'}>
                <h2>{name}</h2>
            </Link>
            <h4>{about}</h4>
            <div className="inst-personal">
                <div className="inst-image">
                    <img
                        src={profile}
                        alt="a1"
                    />
                </div>
                <div className="inst-udemy-info">
                    <div className="inst-rating">
                        <i className="fa-solid fa-star inst-info-icon"></i>
                        <h3>{rating} Instructor Rating</h3>
                    </div>
                    <div className="inst-review">
                        <i className="fa-sharp fa-solid fa-award inst-info-icon"></i>
                        <h3> {review} Reviews</h3>
                    </div>
                    <div className="inst-students">
                        <i className="fa-solid fa-user-group inst-info-icon"></i>
                        <h3>{student} Students</h3>
                    </div>
                    <div className="inst-courses">
                        <i className="fa-solid fa-circle-play inst-info-icon"></i>
                        <h3>{courses} Courses</h3>
                    </div>
                </div>
            </div>
            <div className="description">
                Avinash Jain is currently a senior at UC Berkeley majoring in
                Electrical Engineering and Computer Science. He's the CEO and
                Founder of TheCodex, an online educational platform focused on
                bringing the best programming content to hundreds of thousands
                of students around the world. His programming journey began at
                the age of 10, starting off with simple Python scripts to crawl
                the weather. Since then, he's worked at numerous
            </div>
        </div>
    )
}

export default Instructor
