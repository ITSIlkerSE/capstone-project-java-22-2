import {useState} from "react";
import {NavLink} from "react-router-dom";

type RegisterPageProps = {

    handleRegister: (username: string, password: string, emailAddress: string) => void;

}

export default function RegisterPage(props: RegisterPageProps) {

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newEmailAddress, setNewEmailAddress] = useState("")

    const onRegisterNewUser = () => {
        setNewEmailAddress("")
        setConfirmPassword("")
        setNewUsername("")
        setNewPassword("")

    }

    return (
        <div className="content">
            <form>

                <h3>Register Account</h3>
                <input placeholder="username" value={newUsername}
                       onChange={event => setNewUsername(event.target.value)}/>
                <input placeholder="password" type="password" value={newPassword}
                       onChange={event => setNewPassword(event.target.value)}/>
                <input placeholder={"confirm password"} type="password" value={confirmPassword}
                       onChange={event => setConfirmPassword(event.target.value)}/>
                <input placeholder={"Email address"} type="email" value={newEmailAddress}
                       onChange={event => setNewEmailAddress(event.target.value)}/>

                <NavLink to={"/"}>
                    <button onClick={() => {

                        if (newPassword === confirmPassword) {
                            props.handleRegister(newUsername, newPassword, newEmailAddress);

                        } else
                            alert("password does not match");
                        onRegisterNewUser();


                    }}> Sign Up!
                    </button>
                </NavLink>


            </form>

        </div>

    )
}