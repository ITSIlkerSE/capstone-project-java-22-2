import {useState} from "react";

type RegisterPageProps = {

    handleRegister: (username: string, password: string) => void;

}

export default function RegisterPage(props: RegisterPageProps){

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [newUsername, setNewUsername] = useState("")

    return(
        <div className="content">
            <form>

            <h3>Register Account</h3>
            <input placeholder="username" value={newUsername} onChange={event => setNewUsername(event.target.value)}/>
            <input placeholder="password" type="password" value={newPassword}
                   onChange={event => setNewPassword(event.target.value)}/>
            <input placeholder={"confirm password"} type="password" value={confirmPassword}
                   onChange={event => setConfirmPassword(event.target.value)}/>

                <button onClick={() => {

                    if (newPassword === confirmPassword) {
                        props.handleRegister(newUsername, newPassword);

                    } else
                        alert("password does not match");
                }
                }> Sign Up!</button>


            </form>

        </div>

    )
}