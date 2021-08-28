import './SkeletonLoading.scss'

const SkeletonLoading = () => {
    return ( 
        <div className="skeleton">
            <div className='skeleton-img'>
            </div>
            <div className='skeleton-content'>
                <span className='skeleton-title'></span>
                <span className='skeleton-text'></span>
                <span className='skeleton-text'></span>
            </div>
        </div>
    );
}
 
export default SkeletonLoading;