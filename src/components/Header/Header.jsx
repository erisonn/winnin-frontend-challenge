import { NavLink } from "react-router-dom";
import './Header.scss'
import Logo from '../../static/logo.png'
import useSubredditList from "../../hooks/useSubredditList";
import { formattedSubs } from "../../utils/helpers";
import Dropdown from "../Dropdown/Dropdown";
import { FaGithubSquare, FaCreativeCommonsSampling, FaArrowCircleUp } from 'react-icons/fa'
import Search from "../Search/Search";

const Header = () => {
    
    const { subRedditInfo } = useSubredditList('subreddits/default')

    return ( 
        <header>
            <div className="header-wrapper">
                <div>
                    <NavLink exact to='/' activeClassName='active'><img src={Logo} alt="Reddit" className="header-logo-img"/></NavLink>
                </div>
                <nav>
                    <Search/>
                    <Dropdown options={formattedSubs(subRedditInfo.children)} menuTitle={'Browse Subreddits'}/>
                    <NavLink className='default-feeds' activeClassName='active' to='/r/popular'><FaArrowCircleUp/> Popular</NavLink>
                    <NavLink className='default-feeds' activeClassName='active' to='/r/all'><FaCreativeCommonsSampling/> All</NavLink>
                </nav>
                <a href="https://github.com/erisonn/reddit-reactjs" target='_blank' rel='noreferrer' className='my-github'><FaGithubSquare/></a>
            </div>
        </header>
    );
}
 
export default Header;