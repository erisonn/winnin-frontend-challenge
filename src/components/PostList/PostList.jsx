import Post from "../Post/Post";
import './PostList.scss'

const PostList = ( { posts }) => {
    return ( 
        <div className="post-list">
            {posts && posts.map(post => 
            <Post 
                title={post.title} 
                thumbnail={post.thumbnail} 
                forum={post.forum} 
                date={post.date} 
                mediaUrl={post.mediaurl}
                author={post.author}
                key={post.id}
                pinned={post.pinned}
            />)}
        </div>
    );
}
 
export default PostList;