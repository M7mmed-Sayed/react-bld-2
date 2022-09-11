import React from 'react'
import '../../Css//CoursePage/ReviewContainer.css'
import Stars from '../Common/Stars'
import ReviewLike from './ReviewLike'

function ReviewContainer({name ,comment}) {
    return (
       <>
            <div className="student-review">
                <div className="rev-custom-name">
                    <h2>{name[0]}</h2>
                </div>
                <div className="rev-desc">
                    <div className="ev-desc-comment">
                        <h1>{name}</h1>
                    </div>
    
                    <div className="rev-rate-line">
                        <Stars />
                        <h4>3 weeks ago</h4>
                    </div>
                    <div className="ev-desc-comment">
                        {comment}
                    </div>
                    <ReviewLike />
                </div>
                </div>
                <hr/>
       </>
    )
}

export default ReviewContainer
