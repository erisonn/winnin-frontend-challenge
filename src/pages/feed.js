import useRedditApi from "../hooks/useRedditApi";
import { formattedPosts } from "../utils/helpers";
import PostList from "../components/PostList/PostList";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import SkeletonPostList from "../components/SkeletonLoading/SkeletonPostList";
import React from "react";

const Feed = ({ sub, sort }) => {
    
    const subReddit = sub ? `r/${sub}` : ''
    const url = `https://www.reddit.com/${subReddit}/${sort ? sort : ''}.json?limit=35`
    const { isLoading, error, data, after, isPaginating, fetchRedditPosts, handleLoadMorePosts } = useRedditApi(url) // Custom hook

    if(isLoading) {
        return <SkeletonPostList/>
    }

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