import { NavLink } from "react-router-dom";
const Header = ({ sub }) => {

    return ( 
        <header>
            <nav className="flex-wrap">
               <NavLink exact to={`/r/${sub}/hot`} activeClassName="active">Hot</NavLink>
               <NavLink to={`/r/${sub}/new`} activeClassName="active">New</NavLink> 
               <NavLink to={`/r/${sub}/rising`} activeClassName="active">Rising</NavLink>
            </nav>
        </header>
    );
}
 
export default Header;