import React, { useState } from 'react'
import CourseContentData from '../../Data/CourseContentData'
import '../../Css/CoursePage/CourseContent.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from './Accordion'

function CourseContent() {
    const { data } = CourseContentData
    const {
        sections,
        num_of_published_lectures,
        estimated_content_length_text,
    } = data
    const [expandBtnValue, setExpandBtnValue] = useState('Expand')
    const lecturesDuration = (content_length) => {
        let hmsFormat = content_length.split(':')
        if (hmsFormat.length < 3) hmsFormat = ['0', ...hmsFormat]
        if (hmsFormat[2] > 0) ++hmsFormat[1]
        let duration = ``
        if (hmsFormat[0] > 0) duration += `${parseInt(hmsFormat[0])}h`
        duration += `${parseInt(hmsFormat[1])}min`
        return duration
    }
    const handleExpandCollapseButton = (e) => {
        let accordionButtons =
            document.getElementsByClassName('accordion-button')
        Array.from(accordionButtons).forEach((item) => {
            item.classList.toggle('collapsed')
        })

        let accordionBodies =
            document.getElementsByClassName('accordion-collapse')
        Array.from(accordionBodies).forEach((item) => {
            item.classList.toggle('collapse')
        })
        setExpandBtnValue(expandBtnValue === 'Collapse' ? 'Expand' : 'Collapse')
    }
    const getAccordions = (key) => {
        let view = sections.map(
            ({ title, items, index, lecture_count, content_length_text }) => {
                return (
                    <Accordion
                        title={title}
                        items={items}
                        key={index}
                        index={index+key}
                        lecture_count={lecture_count}
                        content_length_text={content_length_text}
                        lecturesDuration={lecturesDuration}
                    />
                )
            }
        )
        return view
    }
    return (
        <div className="courseContent">
            <h2>Course content</h2>
            <div className="courseContentHeader">
                <div>
                    {sections.length} sections • {num_of_published_lectures}
                    lectures • {lecturesDuration(
                        estimated_content_length_text
                    )}{' '}
                    total length
                </div>
                <button
                    type="button"
                    data-purpose="expand-toggle"
                    aria-expanded="true"
                    className="expandBtn"
                    onClick={handleExpandCollapseButton}
                >
                    <span>{expandBtnValue} all sections</span>
                </button>
            </div>
            <div className="accordion" id="courseContentAccordion">
                {getAccordions('A')}
                {getAccordions('B')}
                {getAccordions('C')}
            </div>
        </div>
    )
}

export default CourseContent
