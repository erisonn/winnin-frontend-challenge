import './Banner.scss'

const Banner = ( {img, title} ) => {
    return ( 
        <div className='banner'>
            <div className='banner-title'>
                <img src={img} alt=''/>
                <h1>{title}</h1>
            </div>
        </div>
    );
}
 
export default Banner;