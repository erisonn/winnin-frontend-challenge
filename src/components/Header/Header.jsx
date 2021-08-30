import { NavLink } from "react-router-dom";
import './Header.scss'
import Logo from './logo.png'
import useSubredditList from "../../hooks/useSubredditList";
import { formattedSubs } from "../../utils/helpers";
import Dropdown from "../Dropdown/Dropdown";
import { FaGithubSquare } from 'react-icons/fa'

const Header = () => {

    const { subRedditInfo } = useSubredditList('subreddits/default')

    return ( 
        <header>
            <div className="header-wrapper">
                <div>
                    <NavLink exact to='/' activeClassName='active'><img src={Logo} alt="Reddit" className="header-logo-img"/></NavLink>
                </div>
                <nav>
                    <Dropdown options={formattedSubs(subRedditInfo.children)} menuTitle={'Browse Subreddits'}/>
                    <NavLink className='default-feeds' to='/r/popular'>Popular</NavLink>
                    <NavLink className='default-feeds' to='/r/all'>All</NavLink>
                </nav>
                <a href="https://github.com/erisonn/reddit-reactjs" target='_blank' rel='noreferrer' className='my-github'><FaGithubSquare/></a>
            </div>
        </header>
    );
}
 
export default Header;