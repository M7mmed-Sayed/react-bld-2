import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { App } from 'react-bootstrap-icons'

function Search() {
    const [searchInput, setSearchInput] = useState('')
    const [filteredResults, setFilteredResults] = useState([])
    const data=App.data;
    function FilteredData({ query }) {
      setSearchInput(query);
        const filteredUsers = useMemo(() =>
            data.filter((item) => {
                return Object.values(item.title)
                    .join('')
                    .toLowerCase()
                    .includes(query.toLowerCase())
            })
            ,setFilteredResults(filteredUsers)
        )
        // ...
    }
    return [FilteredData, searchInput]
}
export default Search
