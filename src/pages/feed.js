import useRedditApi from "../hooks/useRedditApi";
import { useEffect } from "react";
import { formattedPosts, checkRedditUrl, setDocumentTitle } from "../utils/helpers";
import PostList from "../components/PostList/PostList";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import SkeletonPostList from "../components/SkeletonLoading/SkeletonPostList";

const Feed = ({ sub, subTitle, sort, searchQuery }) => {
    
    const url = checkRedditUrl(searchQuery, sub, sort)
    const { firstLoading, isLoading, error, data, after, fetchRedditPosts, handleLoadMorePosts } = useRedditApi(url) // Custom hook para requisição da api do reddit

    useEffect(() => {
        setDocumentTitle(sub, subTitle, firstLoading);
    })

    if(firstLoading) {
        return <SkeletonPostList amountOfPosts={7}/>
    }

    if(error) {
        return <Error errorMessage={error} handleError={() => fetchRedditPosts(url)} buttonText={'Try again'}/>
    }

    return (
        <div className='feed' data-testid='feed' role='feed'>
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