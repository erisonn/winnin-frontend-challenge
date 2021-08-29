import SkeletonLoading from './SkeletonLoading'

const SkeletonPostList = () => {
    return ( 
        <div className='skeleton-post-list'>
            <SkeletonLoading/>
            <SkeletonLoading/>
            <SkeletonLoading/>
            <SkeletonLoading/>
            <SkeletonLoading/>
            <SkeletonLoading/>
            <SkeletonLoading/>
        </div>
    );
}
 
export default SkeletonPostList;