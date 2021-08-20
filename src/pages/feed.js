import useApiRequest from "../hooks/useRedditApi";
import useSubredditList from "../hooks/useSubredditList";
import { formattedPosts, sortBy } from "../utils/helpers";
import { useParams } from "react-router";
import PostList from "../components/PostList/PostList";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";

const Feed = () => {
    //parametros de url do react router
    const { sub } = useParams()
    const { sort } = useParams()

    const subReddit = sub ? `r/${sub}` : ''
    const subRedditDetails = sub? `r/${sub}/about` : null
    const url = `https://www.reddit.com/${subReddit}/${sort ? sort : ''}.json?limit=35`
    // custom hooks
    const { isLoading, error, data, after, pagination , fetchRedditPosts } = useApiRequest(url)
    const { defaultSubs } = useSubredditList(subRedditDetails)

    if(error) {
        return <Error errorMessage={error} handleError={() => fetchRedditPosts(url)}/>
    }

    return (
        <div className='feed'>
            {isLoading && <Loading />}
            {sub && <Banner img={defaultSubs.icon_img} title={defaultSubs.title}/>}
            <Nav links={sortBy(sub)}/>
            <PostList posts={formattedPosts(data)}/>
            {after && 
            <div className='load-more'>
                <button onClick={()=> fetchRedditPosts(pagination)}>Load More.</button>
            </div>
            }
        </div>
    );
}
 
export default Feed;