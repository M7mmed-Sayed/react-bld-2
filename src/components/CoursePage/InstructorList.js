import React from 'react'
import Instructor from './Instructor'

function InstructorList({ instractors }) {
     const getInstructor = (key) => {
        
         let view = instractors.map(
             ({
                 id,
                 name,
                 about,
                 rating,
                 review,
                 student,
                 courses,
                 profile,
             }) => {
                 return (
                     <Instructor
                         id={id}
                         name={name}
                         key={id + key}
                         rating={rating}
                         about={about}
                         review={review}
                         student={student}
                         courses={courses}
                         profile={profile}
                     />
                 )
             }
         )
         return view
     }
    return (
        <div className="instractors-container">
            <h1>Instructors</h1>
            {getInstructor('a')}
        </div>
    )
}

export default InstructorList
