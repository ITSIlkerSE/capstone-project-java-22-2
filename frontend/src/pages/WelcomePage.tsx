import React, {useState} from "react";
import './WelcomePage.css';
import {NavLink, Route} from "react-router-dom";

type WelcomePageProps = {

    handleRegister: (username: string, password: string, emailAddress: string) => void;
    handleLogin: (username: string, password: string) => void;
    handleLogout: () => void;
    isAdmin: boolean;
    setAdmin: () => void;


}

export default function WelcomePage(props: WelcomePageProps) {


    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const [me, setMe] = useState("")


    return (
        <div className="content">
            <h2>Welcome</h2>


            {!me ?
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


                    <button onClick={() => {


                        props.handleLogout();
                        props.setAdmin();

                    }
                    }>Logout
                    </button>
                </form>
                : <>
                    <p>Angemeldet als: {me}</p>


                </>
            }

            <NavLink to={"user/RegisterPage"}>Create account</NavLink>

        </div>

    )
}

/*
const navigateToLogin = () => {
        return <Route path={"/"}/>
    }

 */