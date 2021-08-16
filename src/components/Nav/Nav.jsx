import { NavLink } from "react-router-dom"
import './Nav.scss'

const Nav = ({ links }) => {
    return ( 
        <nav className='nav-bar'>
            {links.map(link => <NavLink className='nav-links' to={link.to}>{link.name}</NavLink>)}    
        </nav>
    );
}
 
export default Nav;