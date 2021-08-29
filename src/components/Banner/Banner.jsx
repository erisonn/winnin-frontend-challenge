import './Banner.scss'

const Banner = ( {img, title, subTitle, description} ) => {
   
    return ( 
        <div className='banner'>
            <div className='banner-title'>
                <img src={img} alt=''/>
                <div>
                    <h1>{title}</h1>
                    <span>{subTitle}</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;