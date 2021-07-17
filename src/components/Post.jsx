import convertUnix from "../utils/convertUnix";
import { NavLink } from "react-router-dom";

const Post = ({post}) => {

    return ( 
        <div className="post">
            <div className='post-img'>
                <img src={post.thumbnail} alt="" className={`${post.over_18 && 'nsfw'}`}/>
            </div>
            <div className='post-content'>
                <div className='subreddit'><NavLink to={`/r/${post.subreddit}`} activeClassName=''>{post.subreddit_name_prefixed}</NavLink></div>
                <h1 className='post-title'>{post.title}</h1>
                <p className='post-author'>Posted {convertUnix(post.created_utc)} by <a href="/#">{post.author}</a></p>
                <a href={post.url_overridden_by_dest} target='_blank' rel="noreferrer" className='post-url'>{post.url_overridden_by_dest}</a>
            </div>
        </div>
    );
}
 
export default Post;