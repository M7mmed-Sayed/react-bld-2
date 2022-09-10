import React, { useEffect, useState } from 'react'
import useFetch from '../../Hooks/useFetch'

function HeaderField() {
    const CourseHeader =
        'https://my-json-server.typicode.com/M7mmed-Sayed/myjsondata/python-header'
      const { data, isLoading, hasError } = useFetch(CourseHeader)

    return (
        <div className="course-header">
            {hasError && <p>Something went wrong.</p>}
            {isLoading ? (
                <div> isLoading HeaderField........</div>
            ) : (
                <>
                    <div className="course-header">
                        <div className="title">
                            <h3>{data.tagline}</h3>
                        </div>
                        <div className="description">
                            <p>{data.description}</p>
                        </div>
                        <button className="explore-btn"> Explor Python</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default HeaderField
