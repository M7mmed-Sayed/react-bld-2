import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import '../../Css/Common/Stars.css'
function Stars({rating}) {
    return (
        <div className="rate-container stars">
            <h3 className="rating-value  rating-item stars mx-2 d-block">
                {rating}
            </h3>
            <Icon.StarFill className=" mt-2" />
            <Icon.StarFill className="mt-2" />
            <Icon.StarFill className="mt-2" />
            <Icon.StarFill className="mt-2" />
            <Icon.StarHalf className="mt-2" />
        </div>
    )
}

export default Stars
