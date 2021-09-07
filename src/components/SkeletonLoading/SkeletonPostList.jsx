import SkeletonLoading from './SkeletonLoading'

const SkeletonPostList = ( {amountOfPosts} ) => {

    const skeletonPosts = Array(amountOfPosts).fill(0)

    return ( 
        <div className='skeleton-post-list' data-testid="skeleton-post-list">
            {skeletonPosts.map((_, i) => <SkeletonLoading key={i}/>)}
        </div>
    );
}
 
export default SkeletonPostList;