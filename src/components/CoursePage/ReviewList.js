import React from 'react'
import ReviewContainer from './ReviewContainer'

function ReviewList({ reviews }) {
    const getReview = (key) => {
        let view = reviews.map(({ id, name, comment }) => {
            return <ReviewContainer name={name} key={id} comment={comment} />
        })
        return view
    }
    return (
        <div className="w-100">
            {getReview('a')}
            {getReview('b')}
        </div>
    )
}

export default ReviewList
