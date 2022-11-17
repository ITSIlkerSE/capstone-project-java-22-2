import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import './NavBar.css';
import useLogin from "../hooks/useLogin";
import {UserInfo} from "../model/UserInfo";

type NavBarProps = {
    me: UserInfo | undefined;
}

export default function NavBar(props: NavBarProps) {

    const [isDropdown, setIsDropdown] = useState(false)
    const {handleLogout} = useLogin();
    const [animate, setAnimate] = useState("dropdown__links");



    function toggleNav() {
        isDropdown ? setIsDropdown(false) : setIsDropdown(true);

        if(isDropdown){
            setAnimate("dropdown__links animateOut")
        }else{
            setAnimate("dropdown__links animateIn")
        }

    }

    function isAdmin() {
        if (props.me && props.me.roles.find(role => role === "ADMIN")) {
            return true
        } else {
            return false
        }
    }


    return (
        <div className="navbar">
            <h3>Check & Computify</h3>

                <div className="menu-bars" onClick={toggleNav}>
                    <div className={!isDropdown ? "menu-bar1" : "menu-bar1 change-menu-bar1"}></div>
                    <div className={!isDropdown ? "menu-bar2" : "menu-bar2 change-menu-bar2"}></div>
                    <div className={!isDropdown ? "menu-bar3" : "menu-bar3 change-menu-bar3"}></div>

                </div>



            <ul className= {animate}>


                {isAdmin() &&
                    <NavLink onClick={toggleNav} to={"admin/AdminCreationPage"}>AdminCreationPage</NavLink>}
                {isAdmin() &&
                    <NavLink onClick={toggleNav} to={"admin/AdminEditComponentsPage"}>EditPage</NavLink>}

                {props.me &&
                    <>
                        <NavLink onClick={toggleNav} to={"/"}>Homepage</NavLink>
                        <NavLink onClick={toggleNav} to={"/"}>Placeholder</NavLink>
                        <NavLink onClick={toggleNav} to={"/"}>Placeholder</NavLink>
                        <NavLink onClick={toggleNav} to={"user/CheckPcPage"}>Check PC</NavLink>
                        <NavLink onClick={toggleNav} to={"user/ComputifyPcPage"}>Computify PC</NavLink>

                        <p style={{color: "white"}}>Angemeldet als: {props.me?.username}</p>

                        <button onClick={() => {
                            handleLogout()



                        }}>Logout
                        </button>
                    </>
                }

            </ul>
        </div>


    )
}