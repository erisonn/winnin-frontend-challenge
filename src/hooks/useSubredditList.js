import { useEffect, useState } from "react"

const useSubredditList = sub  => {

    const [defaultSubs, setDefaultSubs] = useState([])

    const fetchSubs = () => {
        if(!sub) return;
        fetch(`https://www.reddit.com/${sub}/.json?limit=100`)
        .then(response => response.json())
        .then(subReddits => {
            setDefaultSubs(subReddits.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchSubs()
        window.scrollTo(0, 0)
    }, [sub]) // eslint-disable-line


    return { defaultSubs }
}
 
export default useSubredditList;