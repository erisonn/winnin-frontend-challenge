import './SkeletonLoading.scss'

const SkeletonLoading = () => {
    return ( 
        <div className="skeleton">
            <div className='skeleton-img'>
            </div>
            <div className='skeleton-content'>
                <h1 className='skeleton-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget sapien eu tellus semper vestibulum ut nec velit.</h1>
                <span className='skeleton-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</span>
                <span className='skeleton-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</span>
            </div>
        </div>
    );
}
 
export default SkeletonLoading;