import { useCallback, useEffect, useState } from "react"

const useRedditApi = url => {

    const [firstLoading, setFirstLoading] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [after, setAfter] = useState(null)

    const pagination = after ? url + `&after=${after}&count=100` : ''

    const fetchRedditPosts = useCallback((url) => {
        window.scrollTo(0, 0)
        setFirstLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(posts => {
            setAfter(posts.data.after)
            setData(posts.data.children)
        })   
        .catch(error => {
            console.log(error)
            setError('Our CDN was unable to reach our servers.')
        })
        .finally(() => {
            setFirstLoading(false)
        })
    }, [])

    const handleLoadMorePosts = () => {
        setIsLoading(true)
        fetch(pagination)
        .then(response => response.json())
        .then(posts => {
            setAfter(posts.data.after)
            setData([...data, ...posts.data.children])
        })
        .catch(error => {
            console.log(error)
            setError('Error on loading more posts, please try again.')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        setError(null)
        fetchRedditPosts(url)
    }, [url, fetchRedditPosts])

    return { 
        firstLoading,
        isLoading, 
        error, 
        data, 
        after,  
        fetchRedditPosts, 
        handleLoadMorePosts 
    }
}

export default useRedditApi;