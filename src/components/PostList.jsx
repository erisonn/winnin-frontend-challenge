import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Post from "./Post";
import LoadingSVG from '../svg/loading.svg'

const PostList = () => {

    //states
    const [isLoading, setIsLoading] = useState(null)
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [after, setAfter] = useState(null)

    //parametros
    const { sub = 'popular' } = useParams()
    const { feed = '' } = useParams()

    //API
    const API_URL = `https://www.reddit.com/r/${sub}/${feed}.json?limit=5`
    const PAGINATED_URL = `https://www.reddit.com/r/${sub}/${feed}/.json?limit=5&after=${after}&count=10`

    useEffect(() => {
        setIsLoading(true)
        setError(null)
        setAfter(null)
        console.log(API_URL)

        fetchAPI(API_URL)
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
    
    return ( 
        <>
        <Header sub ={sub}/>
        <div className="feed">
            {posts.map(post =><Post post={post.data} key={post.data.id}/>)}
            {isLoading && <div className="loading"><img src={LoadingSVG} alt="Loading..." /></div>}
            {after &&  
            <div className="ver-mais">
                <button onClick={() => fetchAPI(PAGINATED_URL)}>Load more</button>
            </div>}
            {error && 
            <div className="error-handling">
                <p>Error on loading posts.</p>
                <button onClick={() => fetchAPI(API_URL)}>Try Again</button>
            </div>}
        </div>
        </>
    );
}
 
export default PostList;