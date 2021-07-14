import { NavLink } from "react-router-dom";
const Header = () => {

    return ( 
        <header>
            <nav className="flex-wrap">
               <NavLink to="/reactjs/hot" activeClassName="active">Hot</NavLink>
               <NavLink to="/reactjs/new" activeClassName="active">New</NavLink> 
               <NavLink to="/reactjs/rising" activeClassName="active">Rising</NavLink>
            </nav>
        </header>
    );
}
 
export default Header;