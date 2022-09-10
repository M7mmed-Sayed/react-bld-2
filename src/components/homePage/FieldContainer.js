import React, { useEffect, useState } from 'react'
import '../../Css//HomePage/FieldContainer.css'
import Card from './Card'
import HeaderField from './HeaderField'
function FieldContainer(props) {
    const { data, isLoading, hasError } = props
    const [CoursesBody, setCoursesBody] = useState('')
    useEffect(() => {
        if (!isLoading) {
            let res = genrateCoursesCard()
            setCoursesBody(res)
        }
    }, [data])
    const genrateCoursesCard = () => {
        /*copy the courses form props.data
            map to courses an set id of course as key 
            then call each item from courses to create small card
            */
        let courses = data
        let view = courses.map((course) => {
            return <Card data={course} key={course.id}></Card>
        })
        return view
    }
    // assign header data to FieldContainer then call genrateCoursesCard
    return (
        <div className="filed-box">
            <HeaderField />
            {hasError && <p>Something went wrong.</p>}
            {isLoading ? (
                <div> isLoading Courses........</div>
            ) : (
                <div className="cards-parent">{CoursesBody}</div>
            )}
        </div>
    )
}

export default FieldContainer
