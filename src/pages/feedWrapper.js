import React, { useMemo } from "react";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";
import Feed from "./feed";
import { useParams } from "react-router-dom";
import { sortBy } from "../utils/helpers";
import useSubredditList from "../hooks/useSubredditList";

const FeedWrapper = () => {

    const { sub, sort } = useParams()
    const subRedditDetails = sub? `r/${sub}/about` : null
    const { subRedditInfo } = useSubredditList(subRedditDetails)

    const memoizedNav = useMemo(() => 
        <Nav links={sortBy(sub)}/>, 
        [sub])

    return ( 
        <React.Fragment>
            {sub && sub !== 'popular' && sub !== 'all' &&
            <Banner 
                img={subRedditInfo.icon_img} 
                title={subRedditInfo.title} 
                subTitle={subRedditInfo.display_name_prefixed} 
                description={subRedditInfo.public_description}/>}
            {memoizedNav}
            <Feed sub={sub} sort={sort}/>
        </React.Fragment>
    );
}
 
export default FeedWrapper;