import React, {useState} from "react";
import './WelcomePage.css';
import {NavLink} from "react-router-dom";

type WelcomePageProps = {

    handleRegister: (username: string, password: string, emailAddress: string) => void;
    handleLogin: (username: string, password: string) => void;
    handleLogout: () => void;
    isAdmin: boolean;
    setAdmin: () => void;
    me: string;
    role: string;


}

export default function WelcomePage(props: WelcomePageProps) {


    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    return (
        <div className="content">
            <h2>Welcome</h2>


            {!props.me ?
                <form>
                    <h3>Login</h3>
                    <input placeholder={"username"} value={username}
                           onChange={event => setUsername(event.target.value)}/>
                    <input placeholder={"password"} type="password" value={password}
                           onChange={event => setPassword(event.target.value)}/>

                    <NavLink to={"user/Homepage"}> <button onClick={() => {
                        props.handleLogin(username, password);
                        props.setAdmin();}}>Login



                    </button></NavLink>


                </form>
                : <>
                    <p>Angemeldet als: {props.role}</p>
                    <button onClick={() => {


                        props.handleLogout();
                        props.setAdmin();

                    }
                    }>Logout
                    </button>

                </>
            }

            <NavLink to={"user/RegisterPage"}>Create account</NavLink>

        </div>

    )
}
