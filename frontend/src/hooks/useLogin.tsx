import {useEffect, useState} from "react";
import {UserInfo} from "../model/UserInfo";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

export default function useLogin() {


    const [me, setMe] = useState<UserInfo | undefined>()

    const location = useLocation()
    const nav = useNavigate()

    useEffect(() => {

        if (location.pathname !== "/login" && location.pathname !== "/user/RegisterPage")
            handleMe()
        
    }, [location.pathname])

    function handleMe() {
        axios.get("api/user/me")
            .then(response => response.data)
            .then((data) => setMe(data))
            .catch(()=> {
                if(!me){
                    nav("/login")
                }
            })

    }

     function handleLogin(username: string, password: string) {
       axios.get("api/user/login", {auth: {username, password}})
            .then(response =>response.data)
            .then((data) => setMe(data))
            .then(() => nav("/"))
            .catch(() => alert("Das Passwort war falsch!"))

    }

    function handleRegister(username: string, password: string, emailAddress: string) {
        axios.post("api/user/register", {username, password, emailAddress})
            .then(response => response.data)
    }

    function handleLogout() {
        axios.get("api/user/logout")
            .then(() => setMe(undefined))
            .finally(() => window.location.reload())
    }

    return {handleLogin, handleRegister, handleLogout, me}
}