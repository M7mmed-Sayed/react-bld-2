import React from 'react'
import Banner from '../components/homePage/Banner'
import FieldContainer from '../components/homePage/FieldContainer'
import '../Css/HomePage/HomePage.css'
import ControllTabs from '../components/homePage/ControllTabs'
import useFetch from '../Hooks/useFetch'
import NavScrollExample from '../components/NavBar/NavScrollExample'
import { useMemo } from 'react'
import { useState } from 'react'
import Loader from '../components/Common/Loader'
const CourseData =
    'https://my-json-server.typicode.com/M7mmed-Sayed/myjsondata/python-courses'
function HomePage(props) {
    const [searchInput, setSearchInput] = useState('')
    const [filteredResults, setFilteredResults] = useState([])
    const { data, isLoading, hasError } = useFetch(CourseData)
    // use call back
    const SearchItems = (searchValue) => {
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
        return filteredResults
    }
    // Use Memo
    const squaredNum = useMemo(() => {
        return SearchItems(searchInput)
    }, [searchInput])
    return (
        <>
            <NavScrollExample searchFunction={SearchItems} />
            {isLoading ? (
                <Loader />
            ) : (
                <div className="home-body">
                    <Banner />
                    <ControllTabs />
                    <FieldContainer
                        isLoading={isLoading}
                        hasError={hasError}
                        data={
                            filteredResults.length === 0
                                ? data
                                : filteredResults
                        }
                    ></FieldContainer>
                </div>
            )}
        </>
    )
}

export default HomePage
