import SkeletonLoading from './SkeletonLoading'

const SkeletonPostList = ( {amountOfPosts} ) => {
    return ( 
        <div className='skeleton-post-list'>
            {Array(amountOfPosts).fill(<SkeletonLoading/>)}
        </div>
    );
}
 
export default SkeletonPostList;