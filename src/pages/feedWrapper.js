import React, { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { checkIfSubreddit } from "../utils/helpers";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";
import Feed from "./feed";
import useSubredditList from "../hooks/useSubredditList";
import queryString from 'query-string'

const FeedWrapper = () => {

    const { sub, sort } = useParams()
    const subRedditDetails = sub? `r/${sub}/about` : null
    const { subRedditInfo } = useSubredditList(subRedditDetails)

    //query de busca
    const { search = null } = useLocation()
    const { q } = queryString.parse(search)

    const memoizedBanner = useMemo(() => 
        <Banner 
        img={subRedditInfo.icon_img} 
        title={subRedditInfo.title} 
        subTitle={subRedditInfo.display_name_prefixed} 
        description={subRedditInfo.public_description}/>,
        [subRedditInfo.icon_img, subRedditInfo.title, subRedditInfo.display_name_prefixed, subRedditInfo.public_description]) 

    const memoizedNav = useMemo(() => 
        <Nav links={checkIfSubreddit(sub, search)}/>, 
        [sub, search])

    return ( 
        <React.Fragment>
            {sub && sub !== 'popular' && sub !== 'all' && memoizedBanner}
            {search && 
            <div className='search-titles'>
                <h1>{q}</h1>
                <p>Search results</p>
            </div>}
            {search || memoizedNav}
            <Feed sub={sub} sort={sort} searchQuery={search}/>
        </React.Fragment>
    );
}
 
export default FeedWrapper;