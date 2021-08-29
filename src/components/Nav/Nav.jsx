import { NavLink } from "react-router-dom"
import './Nav.scss'

const Nav = ({ links }) => {

    return ( 
        <nav className='nav-bar'>
            {links.map(link =>
            <NavLink className='nav-links' activeClassName='link-active' to={link.to} key={link.to}>{link.icon}{link.name}</NavLink>)}    
        </nav>
    );
}
 
export default Nav;