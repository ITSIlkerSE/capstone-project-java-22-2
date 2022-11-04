import {useState} from "react";

type RegisterPageProps = {

    handleRegister: (username: string, password: string) => void;

}

export default function RegisterPage(props: RegisterPageProps){

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [newUsername, setNewUsername] = useState("")

    return(
        <div>
            <form>

            <h3>Register Account</h3>
            <input value={newUsername} onChange={event => setNewUsername(event.target.value)}/>
            <input type="password" value={newPassword}
                   onChange={event => setNewPassword(event.target.value)}/>
            <input type="password" value={confirmPassword}
                   onChange={event => setConfirmPassword(event.target.value)}/>

                <button onClick={() => {

                    if (newPassword === confirmPassword) {
                        props.handleRegister(newUsername, newPassword);

                    } else
                        alert("password does not match");
                }
                }> Sign Up!</button>


            </form>
            <h1>Directed here on RegisterClick</h1>
            <button>Press me for nothing</button>
        </div>

    )
}