import Post from "./Post";

const PostList = ( {posts} ) => {
    
    return ( 
        <div className="feed">
            {posts.map(post => <Post post={post.data} key={post.data.id}/>)}
        </div>
    );
}
 
export default PostList;