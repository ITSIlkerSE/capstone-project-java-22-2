import React, {useState} from "react";
import './LoginPage.css';
import {NavLink, useNavigate} from "react-router-dom";

type LoginPageProps = {

    handleLogin: (username: string, password: string) => void;


}

export default function LoginPage(props: LoginPageProps) {


    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const nav = useNavigate()

    return (


        <div className="content">
            <h2>Welcome</h2>

                <form>
                    <h3>Login</h3>
                    <input placeholder={"username"} value={username}
                           onChange={event => setUsername(event.target.value)}/>
                    <input placeholder={"password"} type="password" value={password}
                           onChange={event => setPassword(event.target.value)}/>

                    <button onClick={() => {

                        props.handleLogin(username, password)

                        nav("user/Homepage")
                    }}>Login

                    </button>

                </form>


            <NavLink to={"user/RegisterPage"}>Create account</NavLink>


        </div>

    )
}
