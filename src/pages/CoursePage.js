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
import { useSearchParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import Loader from '../components/Common/Loader'
import { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'

fetch(`http://localhost:3009/courses/1`)
    .then(async (response) => response.json())
    .then(async (course) => {})
function CoursePage(props) {
    let [searchParams, setSearchParams] = useSearchParams()
           const { data, isLoading, hasError } = useFetch(
        `http://localhost:3009/courses/1`
    )
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
                reviews:r,
            } = data
            courseObject = c
            title = t
            describe = d
            Imageurl = Img
            instractors = i
            reviews=r
        
    }, [isLoading,data])
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
