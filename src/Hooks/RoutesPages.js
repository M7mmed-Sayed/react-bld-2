import React from 'react'
import { useRoutes } from 'react-router-dom'
import NotFoundPage from '../components/Common/NotFoundPage'
import CoursePage from '../pages/CoursePage'
import HomePage from '../pages/HomePage'
function RoutesPage() {
    let element = useRoutes([
        {
            path: '/react-bld-2/',
            element: <HomePage />,
        },
        {
            path: `/react-bld-2/course/:id`,
            element: <CoursePage />,
        },
        { path: '*', element:<NotFoundPage/> },
    ])
    return element
}

export default RoutesPage
