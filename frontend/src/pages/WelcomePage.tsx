import React, {useState} from "react";
import './WelcomePage.css';
import {NavLink, useNavigate} from "react-router-dom";

type WelcomePageProps = {

    handleRegister: (username: string, password: string, emailAddress: string) => void;
    handleLogin: (username: string, password: string) => void;
    handleLogout: () => void;
    me: string;
    role: string;


}

export default function WelcomePage(props: WelcomePageProps) {


    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    const refreshPage = () => {
        window.location.reload();
    }

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

                    <button onClick={() => {

                        if (props.role === "ADMIN") {
                            navigate("/admin/AdminCreationPage")
                        } else {
                            navigate("/user/Homepage")
                        }

                        props.handleLogin(username, password);
                        console.log(props.role + "djsakldjasplö")

                    }}>Login


                    </button>


                </form>
                : <>
                    <p>Angemeldet als: {props.me} {props.role}</p>
                    <button onClick={() => {
                        refreshPage()
                        props.handleLogout();

                    }
                    }>Logout
                    </button>

                </>
            }

            <NavLink to={"user/RegisterPage"}>Create account</NavLink>


        </div>

    )
}
