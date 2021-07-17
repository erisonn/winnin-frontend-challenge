import { NavLink } from "react-router-dom";
import Logo from '../svg/logo.svg'
import SubsMenu from "./SubsMenu";
const Header = ({ sub, defaultSubs }) => {

    return ( 
        <header>
            <div className="header-wrap">
                <nav className="nav-links">
                    <NavLink exact to={sub !== ''? `/r/${sub}/` : '/'} activeClassName="active">Hot</NavLink>
                    <NavLink to={sub !== ''? `/r/${sub}/new` : '/new'} activeClassName="active">New</NavLink> 
                    <NavLink to={sub !== ''? `/r/${sub}/rising` : '/rising'} activeClassName="active">Rising</NavLink>
                </nav>
                <SubsMenu sub={sub} defaultSubs={defaultSubs}/>
                <div className="logo">
                    <NavLink to='/' activeClassName=''><img src={Logo} alt="Reddit" className="logo-img"/></NavLink>
                </div>
            </div>
        </header>
    );
}
 
export default Header;