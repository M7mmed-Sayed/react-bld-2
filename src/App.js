import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavScrollExample from './components/NavBar/NavScrollExample'
import { useState, useEffect, useRef } from 'react'

import HomePage from './pages/HomePage'
import useFetch from './Hooks/useFetch'
import CoursePage from './pages/CoursePage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes,
    BrowserRouter,
    Navigate,
} from 'react-router-dom'
import Footer from './components/Footer'
import SideCard from './components/CoursePage/SideCard'
const CourseData =
    'https://my-json-server.typicode.com/M7mmed-Sayed/myjsondata/python-courses'
function App() {
    const [searchInput, setSearchInput] = useState('')
    const [filteredResults, setFilteredResults] = useState([])
    const { data, isLoading, hasError } = useFetch(CourseData)
    const inputEl = useRef('')
    // use call back
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchValue !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item.title)
                    .join('')
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(data)
        }
    }

    let element = useRoutes([
        {
            path: '/udemy-clone-react/',
            element: (
                <>
                    <NavScrollExample searchFunction={searchItems} />
                    <HomePage
                        isLoading={isLoading}
                        hasError={hasError}
                        data={searchInput.length !== 0 ? filteredResults : data}
                    />
                    <Footer />
                </>
            ),
        },
        {
            path: `/udemy-clone-react/course/:id`,
            element: (
                <>
                    <NavScrollExample searchFunction={searchItems} />

                    <CoursePage course={data[0]} />
                    <Footer />
                </>
            ),
        },
        { path: '*', element: <div>lol</div> },
    ])
    return element
    
}

export default App
