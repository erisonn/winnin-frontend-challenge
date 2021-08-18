import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import './Nav.scss'

const Nav = ({ links }) => {

    useEffect(() => {
        console.log('Render Nav')
    })

    return ( 
        <nav className='nav-bar'>
            {links.map(link => <NavLink className='nav-links' activeClassName='link-active' to={link.to} key={link.to}>{link.name}</NavLink>)}    
        </nav>
    );
}
 
export default Nav;