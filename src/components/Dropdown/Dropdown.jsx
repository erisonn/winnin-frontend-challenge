import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Dropdown.scss'

const Dropdown = ({ options, menuTitle }) => {

    const [dropDownDisplay, setDropDownDisplay] = useState(false)

    const handleDisplayChange = () => {
        setDropDownDisplay((dropDownDisplay) => !dropDownDisplay)
    }

    return ( 
        <div className="dropdown">
            <span className="dropdown-menu" role='button' onClick={handleDisplayChange}>{menuTitle}</span>
            {dropDownDisplay && 
                <div className='dropdown-content' role='navigation'>
                    {options && options.map(option => <NavLink 
                    activeClassName='active' 
                    key={option.name} 
                    to={option.to}>{option.name}</NavLink>)}
                </div>}   
        </div>
    );
}
 
export default Dropdown;