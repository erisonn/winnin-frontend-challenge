import React, { useMemo } from "react";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";
import Feed from "./feed";
import { useParams } from "react-router-dom";
import { sortBy } from "../utils/helpers";
import useSubredditList from "../hooks/useSubredditList";

const FeedWrapper = () => {

    const { sub, sort, searchQuery } = useParams()
    const subRedditDetails = sub? `r/${sub}/about` : null
    const { subRedditInfo } = useSubredditList(subRedditDetails)

    const memoizedBanner = useMemo(() => 
        <Banner 
        img={subRedditInfo.icon_img} 
        title={subRedditInfo.title} 
        subTitle={subRedditInfo.display_name_prefixed} 
        description={subRedditInfo.public_description}/>,
        [subRedditInfo.icon_img, subRedditInfo.title, subRedditInfo.display_name_prefixed, subRedditInfo.public_description]) 

    const memoizedNav = useMemo(() => 
        <Nav links={sortBy(sub, searchQuery)}/>, 
        [sub, searchQuery])

    return ( 
        <React.Fragment>
            {sub && sub !== 'popular' && sub !== 'all' && memoizedBanner}
            {searchQuery && 
            <div className='search-titles'>
                <h1>{searchQuery}</h1>
                <p>Search results</p>
            </div>}
            {memoizedNav}
            <Feed sub={sub} sort={sort} searchQuery={searchQuery}/>
        </React.Fragment>
    );
}
 
export default FeedWrapper;