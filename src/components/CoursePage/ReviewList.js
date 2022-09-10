import React from 'react'
import ReviewContainer from './ReviewContainer'

function ReviewList() {
  return (
      <div className="w-100">
          <h1>Review</h1>
          <ReviewContainer />
          <hr />
          <ReviewContainer />
          <hr />
          <ReviewContainer />
          <hr />
          <ReviewContainer />
      </div>
  )
}

export default ReviewList
