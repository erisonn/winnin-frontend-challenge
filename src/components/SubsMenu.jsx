import { useState } from "react";
import { NavLink } from "react-router-dom";

const SubsMenu = ({ sub, defaultSubs }) => {

    const [dropDownDisplay, setDropDownDisplay] = useState(false)

    return ( 
        <div className="subs-menu">
            <span className="dropdown-menu" onClick={() => setDropDownDisplay(dropDownDisplay => !dropDownDisplay)}>r/{sub}</span>
            <div className={`dropdown-content ${dropDownDisplay || 'hidden'}`}>
                {defaultSubs.map(subName => <NavLink to={`/r/${subName.data.display_name}/hot`} activeClassName=''>{subName.data.display_name_prefixed}</NavLink>)}
            </div>   
        </div>
    );
}
 
export default SubsMenu;