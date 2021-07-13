import convertUnix from "../utils/convertUnix";

const Post = ({post}) => {
    
    return ( 
        <div className="post">
            <div className='img-wrapper'>
                <img src={post.thumbnail} alt="" />
            </div>
            <div className='content-wrapper'>
                <h1>{post.title}</h1>
                <p>Posted {convertUnix(post.created_utc)} by <a href="/#">{post.author}</a></p>
                <a href={post.url_overridden_by_dest} target='_blank' rel="noreferrer">{post.url_overridden_by_dest}</a>
            </div>
        </div>
    );
}
 
export default Post;