import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Post from "./Post";
import LoadingSVG from '../svg/loading.svg'

const PostList = () => {

    //states
    const [isLoading, setIsLoading] = useState(null)
    const [posts, setPosts] = useState([])
    const [defaultSubs, setDefaultSubs] = useState([])
    const [error, setError] = useState(null)
    const [after, setAfter] = useState(null)

    //parametros
    const { sub = 'popular' } = useParams()
    const { feed = '' } = useParams()

    //API
    const DEFAULT_SUBS = `https://www.reddit.com/subreddits/default/.json?limit=100`
    const API_URL = `https://www.reddit.com/r/${sub}/${feed}.json?limit=10`
    const PAGINATED_URL = `https://www.reddit.com/r/${sub}/${feed}/.json?limit=10&after=${after}&count=10`

    useEffect(() => {
        setIsLoading(true)
        setError(null)
        setAfter(null)
        console.log(API_URL)

        fetchAPI(API_URL)
        fetchSUBS()
    },[feed, sub])

    const fetchAPI = (url) => {
        setIsLoading(true)
        if(error) {
        setError(null)
        }

        fetch(url)
        .then(response => response.json())
        .then(newResponse => {
        setAfter(newResponse.data.after)
        if (newResponse.data.before === null) {
            setPosts(newResponse.data.children)
        } else {
            setPosts([...posts, ...newResponse.data.children])
        }
        })
        .catch(error => {
        setError(error)
        })
        .finally(() => {
        setIsLoading(false)
        })
    }
    const fetchSUBS = () => {
        fetch(DEFAULT_SUBS)
        .then(response => response.json())
        .then(newResponse => setDefaultSubs(newResponse.data.children))
        .catch(error => console.log(error))
    }
    
    return ( 
        <>
        <Header sub ={sub} defaultSubs={defaultSubs}/>
        <div className="feed">

            {error === null ? 
            posts.map(post =><Post post={post.data} key={post.data.id}/>) 
            : 
            <div className="error-handling">
                <p>Error on loading posts.</p>
                <button onClick={() => fetchAPI(API_URL)}>Try Again</button>
            </div>
            }

            {isLoading && <div className="loading"><img src={LoadingSVG} alt="Loading..." /></div>}

            {after &&  
            <div className="ver-mais">
                <button onClick={() => fetchAPI(PAGINATED_URL)}>Load more</button>
            </div>}
        </div>
        </>
    );
}
 
export default PostList;