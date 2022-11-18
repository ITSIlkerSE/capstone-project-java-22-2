import {useNavigate} from "react-router-dom";

export default function AboutPage() {

    const nav = useNavigate()


    return (


        <div className={"about"}>
            <img src="https://avatars.githubusercontent.com/u/111722018?v=4" alt={"author"}/>
            <h2>Hi Visitor!</h2>
            <p>My name is Ilker Yildirim, I'm 31 years old and the founder of
                Check & Computify.</p>
            <p>I've made this tool to ease your PC creations!</p>
            <p>Have fun !</p>
            <button className="button__back" onClick={() => nav("/login")}>Back</button>
        </div>


    )

}