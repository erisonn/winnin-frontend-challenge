import React, { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { checkIfSubreddit, formattedSubredditInfo } from "../utils/helpers";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";
import Feed from "./feed";
import useSubredditList from "../hooks/useSubredditList";
import queryString from 'query-string'

const FeedWrapper = () => {

    const { sub, sort } = useParams()
    const subRedditDetails = sub && `r/${sub}/about`
    const { subRedditInfo } = useSubredditList(subRedditDetails)

    //query de busca
    const { search = null } = useLocation()
    const { q } = queryString.parse(search)

    const memoizedBanner = useMemo(() => 
        <Banner data={formattedSubredditInfo(subRedditInfo)}/>,
        [subRedditInfo]) 

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
            <Feed sub={sub} sort={sort} searchQuery={search} subTitle={subRedditInfo.title}/>
        </React.Fragment>
    );
}
 
export default FeedWrapper;