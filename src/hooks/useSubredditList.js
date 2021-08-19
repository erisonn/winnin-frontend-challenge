import { useEffect, useState } from "react"

const useSubredditList = () => {

    const [defaultSubs, setDefaultSubs] = useState([])
    const [error, setError] = useState(null)

    const fetchSubs = () => {
        fetch('https://www.reddit.com/subreddits/default/.json?limit=100')
        .then(response => response.json())
        .then(subReddits => {
            setDefaultSubs(subReddits.data.children)
        })
        .catch(error => {
            console.log(error)
            setError('Error retrieving Subreddits list.')
        })
    }

    useEffect(() => {
        fetchSubs()
    },[])


    return { defaultSubs, error }
}
 
export default useSubredditList;