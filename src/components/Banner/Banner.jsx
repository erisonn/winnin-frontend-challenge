import './Banner.scss'
import { FcReddit } from 'react-icons/fc'

const Banner = ({ data }) => {

    const bannerImg = data.img ? <img src={data.img} alt=''/> : <FcReddit data-testid='placeholder-icon'/>

    return ( 
        <div className='banner'>
            <div className='banner-title'>
                {bannerImg}
                <div>
                    <h1>{data.title}</h1>
                    <span>{data.subtitle}</span>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;