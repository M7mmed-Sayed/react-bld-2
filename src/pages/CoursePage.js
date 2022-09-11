import React, { useState } from 'react'
import CourseContent from '../components/CoursePage/CourseContent'
import CourseDescription from '../components/CoursePage/CourseDescription'
import CourseHeader from '../components/CoursePage/CourseHeader'
import CourseRequirements from '../components/CoursePage/CourseRequirements'
import InstructorList from '../components/CoursePage/InstructorList'
import StudentReview from '../components/CoursePage/StudentReview'
import ReviewList from '../components/CoursePage/ReviewList'
import Learning from '../components/CoursePage/Learning'
import '../Css/CoursePage/CoursePage.css'
import SideCard from '../components/CoursePage/SideCard'
import Footer from '../components/Footer'
import HomePage from './HomePage'
import { useParams, useSearchParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import Loader from '../components/Common/Loader'
import { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'

let url = 'https://my-json-server.typicode.com/M7mmed-Sayed/db-courses/courses/1'
function CoursePage(props) {
    const { id } = useParams()
    if (parseInt(id) % 2 === 0) {
        url =
            'https://my-json-server.typicode.com/M7mmed-Sayed/db-courses/courses/2'
    }

    let [searchParams, setSearchParams] = useSearchParams()
    const { data, isLoading, hasError } = useFetch(url)
    console.log(id)
    let {
        data: courseObject,
        title,
        describe,
        Imageurl,
        instractors,
        reviews,
    } = data
    useEffect(() => {
        let {
            data: c,
            title: t,
            describe: d,
            Imageurl: Img,
            instractors: i,
            reviews: r,
        } = data
        courseObject = c
        title = t
        describe = d
        Imageurl = Img
        instractors = i
        reviews = r
    }, [isLoading, data])
    return (
        <>
            <NavBar searchparam={setSearchParams} />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="course-page-main-content">
                        <SideCard Imageurl={Imageurl} />
                        <CourseHeader
                            title={title}
                            describe={describe}
                            instractors={instractors}
                            imgurl={Imageurl}
                        />
                        <div className="centre-body">
                            <Learning />
                            <CourseContent
                                data={courseObject?.curriculum_context?.data}
                            />
                            <CourseRequirements />
                            <CourseDescription />
                            <InstructorList instractors={instractors} />
                            <StudentReview />
                            <ReviewList reviews={reviews} />
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    )
}

export default CoursePage
