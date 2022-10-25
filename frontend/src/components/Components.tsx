
import {Component} from "../model/Component";

type ComponentsProps = {
    component: Component;

}

    export default function Components(props: ComponentsProps){





    return (

        <div className={"Component PopUp"}>

            <p>[{props.component.name}] </p>
            <hr/>

            <p>{props.component.category} </p>
            <hr/>

            <p><em>{props.component.combinationCode}</em></p>
            <hr/>

            <p><em>{props.component.score}</em></p>
            <hr/>


        </div>


    )



}
