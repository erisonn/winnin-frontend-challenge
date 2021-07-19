import convertUnix from "../utils/convertUnix";
import { NavLink } from "react-router-dom";
import ReadOnly from '../svg/read.svg'

const Post = ({post}) => {

    return ( 
        <div className="post">
            <div className='post-img'>
                <img src={
                post.thumbnail === "" || 
                post.thumbnail === "self" ||
                post.thumbnail === "default" ||
                post.thumbnail === "spoiler" ||
                post.thumbnail === "image" ||
                post.thumbnail === "nsfw" ? 
                ReadOnly : post.thumbnail} alt="" className={post.over_18 === true ? 'nsfw' : ''}/>
            </div>
            <div className='post-content'>
                <div><NavLink to={`/r/${post.subreddit}`} className='post-subreddit' activeClassName=''>{post.subreddit_name_prefixed}</NavLink></div>
                <div className='post-tags'>
                    {post.over_18 === true || post.thumbnail === "nsfw" ? <span>Nsfw</span> : ''}
                    {post.thumbnail === "spoiler" ? <span>Spoiler</span> : ''}
                </div>
                <h1 className='post-title'>{post.title}</h1>
                <p className='post-author'>Posted {convertUnix(post.created_utc)} by <a href="/#">{post.author}</a></p>
                <a href={post.url_overridden_by_dest} target='_blank' rel="noreferrer" className='post-url'>{post.url_overridden_by_dest}</a>
            </div>
        </div>
    );
}
 
export default Post;