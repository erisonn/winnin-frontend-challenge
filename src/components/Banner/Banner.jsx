import './Banner.scss'
import { FcReddit } from 'react-icons/fc'

const Banner = ( {img, title, subTitle, description} ) => {
   
    return ( 
        <div className='banner'>
            <div className='banner-title'>
                {img ? <img src={img} alt=''/> : <FcReddit/>}
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