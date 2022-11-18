import {NavLink} from "react-router-dom";
import React, {useState} from "react";
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

        if (isDropdown) {
            setAnimate("dropdown__links animateOut")
        } else {
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

            { props.me &&

                <div className="menu-bars" onClick={toggleNav}>
                    <div className={!isDropdown ? "menu-bar1" : "menu-bar1 change-menu-bar1"}></div>
                    <div className={!isDropdown ? "menu-bar2" : "menu-bar2 change-menu-bar2"}></div>
                    <div className={!isDropdown ? "menu-bar3" : "menu-bar3 change-menu-bar3"}></div>

                </div>

            }

            <ul className={animate}>


                {isAdmin() &&
                    <NavLink onClick={toggleNav} to={"admin/AdminCreationPage"}>AdminCreationPage</NavLink>}
                {isAdmin() &&
                    <NavLink onClick={toggleNav} to={"admin/AdminEditComponentsPage"}>EditPage</NavLink>}

                {props.me &&
                    <>
                        <NavLink onClick={toggleNav} to={"/"}>Homepage</NavLink>
                        <NavLink onClick={toggleNav} to={"user/GenerateSetupPage"}>Setup generator</NavLink>
                        <NavLink onClick={toggleNav} to={"user/CheckComponentsPage"}>Check Components</NavLink>
                        <NavLink onClick={toggleNav} to={"user/SetupCheckerPage"}>Setup checker</NavLink>
                        <NavLink onClick={toggleNav} to={"user/ComputifyPcPage"}>Computify your PC</NavLink>

                        <p style={{color: "white"}}>Angemeldet als: {props.me?.username}</p>

                        <button onClick={() => {
                            handleLogout()


                        }}>Logout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>

                        </button>
                    </>
                }

            </ul>
        </div>


    )
}