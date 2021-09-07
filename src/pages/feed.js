import useRedditApi from "../hooks/useRedditApi";
import { formattedPosts, checkRedditUrl } from "../utils/helpers";
import PostList from "../components/PostList/PostList";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import SkeletonPostList from "../components/SkeletonLoading/SkeletonPostList";

const Feed = ({ sub, sort, searchQuery }) => {
    
    const subReddit = sub ? `/r/${sub}` : ''
    const sortPosts = sort ? sort : ''
    const url = checkRedditUrl(searchQuery, subReddit, sortPosts)
    const { firstLoading, isLoading, error, data, after, fetchRedditPosts, handleLoadMorePosts } = useRedditApi(url) // Custom hook

    if(firstLoading) {
        return <SkeletonPostList amountOfPosts={7}/>
    }

    if(error) {
        return <Error errorMessage={error} handleError={() => fetchRedditPosts(url)}/>
    }

    return (
        <div className='feed' data-testid='feed'>
            {isLoading && <Loading />}
            <PostList posts={formattedPosts(data)}/>
            {after && 
            <div className='load-more'>
                <button onClick={handleLoadMorePosts}>Load More.</button>
            </div>}
        </div>
    );
}
 
export default Feed;