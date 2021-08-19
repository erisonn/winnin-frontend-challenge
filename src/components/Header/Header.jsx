import { NavLink } from "react-router-dom";
import './Header.scss'
import Logo from '../../svg/logo.svg'
import useSubredditList from "../../hooks/useSubredditList";
import { formattedSubs } from "../../utils/helpers";
import { useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Nav from "../Nav/Nav";
import feeds from '../../utils/helpers'

const Header = () => {

    const { defaultSubs, error } = useSubredditList()

    useEffect(() => {
        console.log(formattedSubs(defaultSubs))
    })

    return ( 
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <NavLink to='/' activeClassName=''><img src={Logo} alt="Reddit" className="header-logo-img"/></NavLink>
                </div>
                <Dropdown options={formattedSubs(defaultSubs)} menuTitle={'Browse Subreddits'}/>
                <span></span>
            </div>
        </header>
    );
}
 
export default Header;