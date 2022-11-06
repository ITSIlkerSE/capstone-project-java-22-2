import {NavLink} from "react-router-dom";
import {AdminComponent} from "../model/AdminComponent";
import React from "react";
import './NavBar.css';

type NavbarProps = {

    isAdmin: boolean;


}


export default function NavBar(props: NavbarProps) {

    const [isDropdown,setIsDropdown] = React.useState(false)

    function toggleNav(){
        isDropdown ? setIsDropdown(false) : setIsDropdown(true);


    }


    return (
        <div className="navbar">
            <h3>Check & Computify</h3>

            <div className="menu-bars" onClick={toggleNav}>
                <div className={!isDropdown ? "menu-bar1" : "menu-bar1 change-menu-bar1"}></div>
                <div className={!isDropdown ? "menu-bar2" : "menu-bar2 change-menu-bar2" }></div>
                <div className={!isDropdown ? "menu-bar3" : "menu-bar3 change-menu-bar3"}></div>

            </div>

            <ul className={isDropdown ? "dropdown__links animateIn" : "dropdown__links animateOut" }>
                <NavLink onClick={toggleNav} to={"admin/AdminCreationPage"}>AdminCreationPage</NavLink>
                <NavLink onClick={toggleNav} to={"admin/AdminEditComponentsPage"}>EditPage</NavLink>
                {/*{props.isAdmin && <NavLink to={"api/admin/AdminCreationPage"}>AdminCreationPage</NavLink>}
            { props.isAdmin && <NavLink to={"api/admin/AdminEditComponentsPage"}>EditPage</NavLink> }*/}
                <NavLink onClick={toggleNav} to={"/"}>WelcomePage</NavLink>
                <NavLink onClick={toggleNav} to={"user/RegisterPage"}>Register</NavLink>
                <NavLink onClick={toggleNav} to={"user/Homepage"}>Homepage</NavLink>
            </ul>
        </div>


    )
}