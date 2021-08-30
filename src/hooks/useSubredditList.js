import { useEffect, useState } from "react"

const useSubredditList = sub  => {

    const [subRedditInfo, setsubRedditInfo] = useState([])

    const fetchSubs = () => {
        fetch(`https://www.reddit.com/${sub}/.json?limit=100`)
        .then(response => response.json())
        .then(subReddits => {
            setsubRedditInfo(subReddits.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        if(!sub || sub === 'r/popular/about' || sub === 'r/all/about') return;
        fetchSubs()
    }, [sub]) // eslint-disable-line


    return { subRedditInfo }
}
 
export default useSubredditList;