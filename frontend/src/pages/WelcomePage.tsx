import {useState} from "react";

type WelcomePageProps = {

    handleRegister: (username: string, password: string) => void;
    handleLogin: (username: string, password: string) => void;
    handleLogout: () => void;

}

export default function WelcomePage(props: WelcomePageProps) {


    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [me, setMe] = useState("")

    return (
        <div className="App">
            <header className="App-header">

                {!me ?
                    <>
                        <h3>Login</h3>
                        <input value={username} onChange={event => setUsername(event.target.value)}/>
                        <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                        <button onClick={() => props.handleLogin(username, password)}>Login</button>
                        <h3>Register Account</h3>
                        <input value={newUsername} onChange={event => setNewUsername(event.target.value)}/>
                        <input type="password" value={newPassword}
                               onChange={event => setNewPassword(event.target.value)}/>
                        <button onClick={() => props.handleRegister(newUsername, newPassword)}>Sign up!</button>
                        <button onClick={props.handleLogout}>Logout</button>
                    </>
                    : <>
                        <p>Angemeldet als: {me}</p>



                    </>
                }


            </header>
        </div>

    )
}