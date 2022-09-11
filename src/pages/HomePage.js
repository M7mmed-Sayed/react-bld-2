import React from 'react'
import Banner from '../components/homePage/Banner'
import FieldContainer from '../components/homePage/FieldContainer'
import '../Css/HomePage/HomePage.css'
import ControllTabs from '../components/homePage/ControllTabs'
import useFetch from '../Hooks/useFetch'
import NavBar from '../components/NavBar/NavBar'
import { useMemo } from 'react'
import { useState } from 'react'
import Loader from '../components/Common/Loader'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
const CourseData =
    'https://my-json-server.typicode.com/M7mmed-Sayed/myjsondata/python-courses'
function HomePage(props) {
    let [searchParams, setSearchParams] = useSearchParams()
    let [query, setQuery] = useState('')
    const [filteredResults, setFilteredResults] = useState([])
    const { data, isLoading, hasError } = useFetch(CourseData)
    
    // use call back
    useEffect(() => {
        setQuery(searchParams.get('query'))
        if (query!==null) SearchItems(query)
    }, [searchParams, isLoading,query])
    const SearchItems = (searchValue) => {
        console.log('lol ' + searchValue)
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
        return filteredResults
    }
    return (
        <>
            <NavBar searchparam={setSearchParams} />
            {isLoading ? (
                <Loader />
            ) : (
                <div className="home-body">
                    <Banner />
                    <FieldContainer
                        isLoading={isLoading}
                        hasError={hasError}
                        data={query === null ? data : filteredResults}
                    ></FieldContainer>
                </div>
            )}
        </>
    )
}

export default HomePage
