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
    const { defaultSubs } = useSubredditList(subRedditDetails)

    const memoizedBanner = useMemo(() => <Banner img={defaultSubs.icon_img} title={defaultSubs.title}/>, [defaultSubs.icon_img, defaultSubs.title])
    const memoizedNav = useMemo(() => <Nav links={sortBy(sub)}/>, [sub])

    return ( 
        <React.Fragment>
            {sub && memoizedBanner}
            {memoizedNav}
            <Feed sub={sub} sort={sort}/>
        </React.Fragment>
    );
}
 
export default FeedWrapper;