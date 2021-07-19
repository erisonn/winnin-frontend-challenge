import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../svg/logo.svg'
import SubsMenu from "./SubsMenu";
const Header = ({ sub, defaultSubs }) => {

    useEffect (() => {
        document.title = sub === '' ? 'reddit: the front page of the internet' : sub
    }, [sub])

    return ( 
        <header>
            <div className="header-wrapper">
                <nav>
                    <NavLink exact to={sub !== ''? `/r/${sub}/` : '/'} className="nav-links" activeClassName="active">Hot</NavLink>
                    <NavLink to={sub !== ''? `/r/${sub}/new` : '/new'} className="nav-links" activeClassName="active">New</NavLink> 
                    <NavLink to={sub !== ''? `/r/${sub}/rising` : '/rising'} className="nav-links" activeClassName="active">Rising</NavLink>
                </nav>
                <SubsMenu sub={sub} defaultSubs={defaultSubs}/>
                <div className="logo">
                    <NavLink to='/' activeClassName=''><img src={Logo} alt="Reddit" className="header-logo-img"/></NavLink>
                </div>
            </div>
        </header>
    );
}
 
export default Header;