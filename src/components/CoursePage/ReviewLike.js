import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../../Css//CoursePage/ReviewLike.css'
function ReviewLike() {
    const [isLiked, setIsLiked] = useState(0)
    return (
        <div className='useful-review'>
            <h5>Was this review useful ?</h5>
            <button
                className="btn border-light like"
                onClick={() => setIsLiked(isLiked === 1 ? 0 : 1)}
            >
                <i
                    className={`${
                        isLiked !== 1 ? 'fa-regular' : 'fa-solid'
                    } fa-thumbs-up like`}
                ></i>
            </button>
            <button
                className="btn border-light like"
                onClick={() => setIsLiked(isLiked === 2 ? 0 : 2)}
            >
                <i
                    className={`${
                        isLiked !== 2 ? 'fa-regular' : 'fa-solid'
                    } fa-thumbs-down dislike`}
                ></i>
            </button>
        </div>
    )
}

export default ReviewLike
