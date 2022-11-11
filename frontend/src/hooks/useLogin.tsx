import {useState} from "react";
import {UserInfo} from "../model/UserInfo";
import axios from "axios";

export default function useLogin () {


    const [me, setMe] = useState <UserInfo | undefined> ()


    function handleLogin(username: string, password: string) {
        axios.get("api/user/login", {auth: {username, password}})
            .then(response => response.data)
            .then((data) => setMe(data))
            .catch(() => alert("Das Passwort war falsch!"))
    }

    function handleRegister(username: string, password: string, emailAddress: string) {
        axios.post("api/user/register", {username, password, emailAddress})
            .then(response => response.data)
    }

    function handleLogout() {
        axios.get("api/user/logout")
            .then(() => setMe(undefined))
    }

    return {handleLogin, handleRegister, handleLogout, me}
}