import {NavLink} from "react-router-dom";
import {AdminComponent} from "../model/AdminComponent";
import React from "react";
import './NavBar.css';

type NavbarProps = {

    isAdmin: boolean;


}


export default function NavBar(props: NavbarProps) {


    return (
        <div className="navbar">
            <NavLink to={"api/admin/AdminCreationPage"}>AdminCreationPage</NavLink>
            <NavLink to={"api/admin/AdminEditComponentsPage"}>EditPage</NavLink>
            {/*{props.isAdmin && <NavLink to={"api/admin/AdminCreationPage"}>AdminCreationPage</NavLink>}
            { props.isAdmin && <NavLink to={"api/admin/AdminEditComponentsPage"}>EditPage</NavLink> }*/}
            <NavLink to={"/"}>WelcomePage</NavLink>
            <NavLink to={"/api/user/RegisterPage"}>Register</NavLink>
            <NavLink to={"api/user/Homepage"}>Homepage</NavLink>

        </div>

    )
}