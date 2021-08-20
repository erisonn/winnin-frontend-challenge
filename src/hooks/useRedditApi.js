import { useEffect, useRef, useState } from "react"

const useApiRequest = url => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [after, setAfter] = useState(null)
    const pagination = after ? url + `&after=${after}&count=10` : ''

    const isPaginating = useRef(null)

    const fetchRedditPosts = (url) => {
        setIsLoading(true)
        if(error) {
            setError(null)
        }
        fetch(url)
        .then(response => response.json())
        .then(posts => {
            setAfter(posts.data.after)
            if(!posts.data.before) {
                isPaginating.current = false
                setData(posts.data.children)
            } else {
                isPaginating.current = true
                setData([...data, ...posts.data.children])
            }
        })   
        .catch(error => {
            console.log(error)
            setError('Error on load.')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        setIsLoading(true)
        fetchRedditPosts(url)
        
        if(isPaginating) return;
        window.scrollTo(0, 0)
    }, [url]) // eslint-disable-line

    return { isLoading, error, data, after, pagination , fetchRedditPosts }
}

export default useApiRequest;