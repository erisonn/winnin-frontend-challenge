import { useEffect, useState } from "react"

const useApiRequest = url => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    // const [defaultSubs, setDefaultSubs] = useState([])
    const [after, setAfter] = useState(null)
    const pagination = after ? url + `&after=${after}&count=10` : ''    

    const fetchApi = (url) => {
        setIsLoading(true)
        if(error) {
            setError(null)
        }
        fetch(url)
        .then(response => response.json())
        .then(posts => {
            setAfter(posts.data.after)
            if(!posts.data.before) {
                setData(posts.data.children)
            } else {
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

    // const fetchSUBS = () => {
    //     fetch('https://www.reddit.com/subreddits/default/.json?limit=100')
    //     .then(response => response.json())
    //     .then(newResponse => setDefaultSubs(newResponse.data.children))
    //     .catch(error => console.log(error))
    // }

    useEffect(() => {
        setIsLoading(true)

        fetchApi(url)
    }, [url])

    return { isLoading, error, data, after, pagination , fetchApi }
}

export default useApiRequest;