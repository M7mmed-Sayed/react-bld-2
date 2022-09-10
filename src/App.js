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
import { useMemo } from 'react'
import RoutesPage from './Hooks/RoutesPages'
const CourseData =
    'https://my-json-server.typicode.com/M7mmed-Sayed/myjsondata/python-courses'
function App() {
    return <RoutesPage/>
}

export default App
