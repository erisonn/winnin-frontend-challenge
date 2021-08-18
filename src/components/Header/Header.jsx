import { NavLink } from "react-router-dom";
import './Header.scss'
import Logo from '../../svg/logo.svg'

const Header = () => {

    return ( 
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <NavLink to='/' activeClassName=''><img src={Logo} alt="Reddit" className="header-logo-img"/></NavLink>
                </div>
            </div>
        </header>
    );
}
 
export default Header;