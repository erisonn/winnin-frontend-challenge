import useApiRequest from "../hooks/useApiRequest";
import { formattedPosts } from "../utils/helpers";
import PostList from "../components/PostList/PostList";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import { useParams } from "react-router-dom";

const Feed = () => {
    
    const { sub } = useParams()
    const { sort } = useParams()
    const subreddit = sub ? `r/${sub}` : ''

    const url = `https://www.reddit.com/${subreddit}${sort ? sort : ''}.json?limit=20`
    const { isLoading, error, data, after, pagination , fetchApi } = useApiRequest(url)


    if(error) {
        return <Error errorMessage={error} handleError={() => fetchApi(url)}/>
    }

    return (
        <div>
            {isLoading && <Loading />}
            <PostList posts={formattedPosts(data)}/>
            {after && <button onClick={()=> fetchApi(pagination)}>Load More.</button>}
        </div>
    );
}
 
export default Feed;