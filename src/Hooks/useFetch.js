import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import { useCallback } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const fetchData = useCallback(async () => {
        setIsLoading(true)
        setHasError(false)
        try {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        } catch (error) {
            setHasError(true)
        }
        setIsLoading(false)
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    return { data, isLoading, hasError }
}

export default useFetch
