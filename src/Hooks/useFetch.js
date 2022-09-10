import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'

function useFetch(url) {
   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [hasError, setHasError] = useState(false)
// use call back
   useEffect(() => {
       const fetchData = async () => {
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
       }
       fetchData()
   }, [url])
   return { data, isLoading, hasError }
}

export default useFetch
