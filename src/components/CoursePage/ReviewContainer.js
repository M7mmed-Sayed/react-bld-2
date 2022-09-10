import React from 'react'
import '../../Css//CoursePage/ReviewContainer.css'
import ReviewLike from './ReviewLike'

function ReviewContainer() {
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
    return (
        <div className="student-review">
            <div className="rev-custom-name">
                <h2>AH</h2>
            </div>
            <div className="rev-desc">
                <div className="ev-desc-comment">
                    <h1>Asif H</h1>
                </div>

                <div className="rev-rate-line">
                    <ul className="stars-list"> {StarRating()}</ul>
                    <h4>3 weeks ago</h4>
                </div>
                <div className="ev-desc-comment">
                    Sometimes confusing but was able to clarify. Good job
                    nonetheless.
                </div>
                <ReviewLike />
            </div>
        </div>
    )
}

export default ReviewContainer
