import { NavLink } from "react-router-dom";
import './Header.scss'
import Logo from './logo.png'
import useSubredditList from "../../hooks/useSubredditList";
import { formattedSubs } from "../../utils/helpers";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {

    const { defaultSubs } = useSubredditList('subreddits/default')

    return ( 
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <NavLink exact to='/' activeClassName='active'><img src={Logo} alt="Reddit" className="header-logo-img"/></NavLink>
                </div>
                <Dropdown options={formattedSubs(defaultSubs.children)} menuTitle={'Browse Subreddits'}/>
                <a href="https://github.com/erisonn/reddit-reactjs" target='_blank' rel='noreferrer' className='my-github'>Github</a>
            </div>
        </header>
    );
}
 
export default Header;