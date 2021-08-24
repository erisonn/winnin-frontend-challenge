import useRedditApi from "../hooks/useRedditApi";
import { formattedPosts } from "../utils/helpers";
import PostList from "../components/PostList/PostList";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";

const Feed = ({ sub, sort }) => {
    
    const subReddit = sub ? `r/${sub}` : ''
    const url = `https://www.reddit.com/${subReddit}/${sort ? sort : ''}.json?limit=35`
    const { isLoading, error, data, after, fetchRedditPosts, handleLoadMorePosts } = useRedditApi(url) // Custom hook

    if(error) {
        return <Error errorMessage={error} handleError={() => fetchRedditPosts(url)}/>
    }

    return (
        <div className='feed'>
            {isLoading && <Loading />}
            <PostList posts={formattedPosts(data)}/>
            {after && 
            <div className='load-more'>
                <button onClick={handleLoadMorePosts}>Load More.</button>
            </div>
            }
        </div>
    );
}
 
export default Feed;