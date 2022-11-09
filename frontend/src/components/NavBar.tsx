import {NavLink} from "react-router-dom";
import React from "react";
import './NavBar.css';

type NavbarProps = {

    isAdmin: boolean;
    isLoggedIn: boolean;
    role: string;

    //TODO mit me ersetzen

}


export default function NavBar(props: NavbarProps) {

    const [isDropdown, setIsDropdown] = React.useState(false)

    function toggleNav() {
        isDropdown ? setIsDropdown(false) : setIsDropdown(true);


    }

    let myBool = props.isAdmin && props.isLoggedIn

    return (
        <div className="navbar">
            <h3>Check & Computify</h3>

            <div className="menu-bars" onClick={toggleNav}>
                <div className={!isDropdown ? "menu-bar1" : "menu-bar1 change-menu-bar1"}></div>
                <div className={!isDropdown ? "menu-bar2" : "menu-bar2 change-menu-bar2"}></div>
                <div className={!isDropdown ? "menu-bar3" : "menu-bar3 change-menu-bar3"}></div>

            </div>

            <ul className={isDropdown ? "dropdown__links animateIn" : "dropdown__links animateOut"}>
                <NavLink onClick={toggleNav} to={"/"}>WelcomePage</NavLink>
                <NavLink onClick={toggleNav} to={"user/RegisterPage"}>Register</NavLink>
                <NavLink onClick={toggleNav} to={"user/Homepage"}>Homepage</NavLink>
                {myBool && (
                    <NavLink onClick={toggleNav} to={"admin/AdminCreationPage"}>AdminCreationPage</NavLink>)}
                {myBool &&
                    <NavLink onClick={toggleNav} to={"admin/AdminEditComponentsPage"}>EditPage</NavLink>}

            </ul>
        </div>


    )
}