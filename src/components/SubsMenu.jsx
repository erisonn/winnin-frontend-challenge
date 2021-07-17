import { useState } from "react";
import { NavLink } from "react-router-dom";

const SubsMenu = ({ sub, defaultSubs }) => {

    const [dropDownDisplay, setDropDownDisplay] = useState(false)

    return ( 
        <div className="subs-menu">
            <span className="dropdown-menu" onClick={() => setDropDownDisplay(dropDownDisplay => !dropDownDisplay)}>{sub === ''? 'Home' : `r/${sub}`}</span>
            <div className={`dropdown-content ${dropDownDisplay === false ? 'hidden': ''}`}>
                {defaultSubs.map(subName => <NavLink to={`/${subName.data.display_name_prefixed}/`} activeClassName='' key={subName.data.id}>{subName.data.display_name_prefixed}</NavLink>)}
                <span className="dropdown-feed"><b>Feeds</b></span>
                <NavLink to='/' activeClassName='' className='home-btn'><b>Home</b></NavLink>
                <NavLink to='/r/popular' activeClassName=''><b>Popular</b></NavLink>
                <NavLink to='/r/all' activeClassName=''><b>All</b></NavLink>
            </div>   
        </div>
    );
}
 
export default SubsMenu;