import { NavLink, useParams } from "react-router-dom";
import Logo from '../svg/logo.svg'
import Nav from "./Nav/Nav";

const Header = () => {

    const links = [
        {'name': 'Hot', 'to': '/hot/'},
        {'name': 'New', 'to': '/new/'},
        {'name': 'Rising', 'to': '/rising/'}
    ]

    return ( 
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <NavLink to='/' activeClassName=''><img src={Logo} alt="Reddit" className="header-logo-img"/></NavLink>
                </div>
                <Nav links={links}/>
            </div>
        </header>
    );
}
 
export default Header;