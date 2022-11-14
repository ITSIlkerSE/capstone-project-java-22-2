import React, {useState} from "react";
import {AdminComponent} from "../model/AdminComponent";
import ResultCalc from "../components/ResultCalc";

type GeneratePcPageProps = {

    components: AdminComponent[];

}

export default function GeneratePcPage(props: GeneratePcPageProps) {


    const [counter, setCounter] = useState(0);

    const initalComponents =

        {
            mainboard: "",
            cpu: "",
            cooler: "",
            power: "",
            graphic: "",
            tower: "",
            ram: "",
            sound: "",
            hd: ""

        }


    const [selectedComponents, setSelectedComponents] = useState(initalComponents)

    const [allComponents] = useState(props.components);
    const [result, setResult] = useState([]);
    const [combCode, setCombCode] = useState("");
    const [classificationValue, setClassificationValue] = useState("");
    const [isShowResult, setIsShowResult] = useState(false);


    const filterOnCode = allComponents.filter((SynCpuMb) => SynCpuMb.combinationCode.includes(combCode))
    const filterOnClassifcation = allComponents.filter((SynGraPa) => SynGraPa.classification.includes(classificationValue))

    const mainboardFilter = allComponents.filter((component) => (component.category === "Mainboard"))

    const cpuFilter = filterOnCode.filter((component) => (component.category === "CPU"))

    const cpuCoolerFilter = props.components.filter((component) => (component.category === "CPU cooler"))

    const graphicCardsFilter = allComponents.filter((component) => (component.category === "Graphics card"))

    const ramFilter = filterOnCode.filter((component) => (component.category === "RAM"))

    const hardDiskFilter = props.components.filter((component) => (component.category === "Hard disk"))

    const soundcardFilter = props.components.filter((component) => (component.category === "Sound card"))

    const powerAdapterFilter = filterOnClassifcation.filter((component) => (component.category === "Power adapter"))

    const towerFilter = props.components.filter((component) => (component.category === "Tower"))

    console.log(counter)

    function handleSocketValue(event: any) {

        setSelectedComponents((prevState) => {
            return {
                ...prevState,
                [event.target.name]: myComponent


            }
        })


        let myComponent = allComponents.find((component) => component.id === event.target.value);

        if (myComponent) {
            let code = myComponent.combinationCode
            setCombCode(code)
        }
    }

    function handlePowerAdapterValue(event: any) {


        let myComponent = allComponents.find((component) => component.id === event.target.value);

        setSelectedComponents((prevState) => {
            return {
                ...prevState,
                [event.target.name]: myComponent


            }
        })


        if (myComponent) {
            let classificationValue = myComponent.classification;
            setClassificationValue(classificationValue);
        }
    }

    function handleChange(event: any) {

        let myComponent = allComponents.find((component) => component.id === event.target.value);

        setSelectedComponents((prevState) => {
            return {
                ...prevState,
                [event.target.name]: myComponent


            }
        })

    }


    return (


        <div className="content">
            {!isShowResult &&

                <form onSubmit={(event) => event.preventDefault()}>
                    <div className={"admin__row"}>
                        <p>Choose your mainboard :</p>
                        <select name="mainboard" onChange={handleSocketValue}>
                            <option defaultValue="" disabled selected>Select your option</option>
                            {mainboardFilter.map((component) =>

                                <option key={component.id}
                                        value={component.id}>{component.name}</option>)}
                        </select>
                        <button disabled={selectedComponents.mainboard === ""} name="mainboard" onClick={(event) => {

                            setCounter(1);

                        }}>Add
                        </button>
                    </div>

                    {counter >= 1 &&


                        <div className={"admin__row"}>

                            <p>CPU's</p>
                            <select name="cpu" onChange={handleChange}>
                                <option defaultValue=""  disabled selected>Select your option</option>
                                {cpuFilter.map((component) => <option key={component.id}
                                                                      value={component.id}>{component.name}</option>)}
                            </select>
                            <button disabled={selectedComponents.cpu === ""} onClick={() => setCounter(2)}>Add</button>

                        </div>

                    }

                    {counter >= 2 &&
                        <div className={"admin__row"}>

                            <p>CPU coolers</p>
                            <select name="cooler" onChange={handleChange}>
                                <option defaultValue=""  disabled selected>Select your option</option>
                                {cpuCoolerFilter.map((component) => <option key={component.id}
                                                                            value={component.id}>{component.name}</option>)}
                            </select>
                            <button disabled={selectedComponents.cooler === ""} onClick={() => setCounter(3)}>Add
                            </button>

                        </div>
                    }

                    {counter >= 3 &&
                        <div className={"admin__row"}>

                            <p>Graphics cards</p>
                            <select name="graphic" onChange={handlePowerAdapterValue}>
                                <option defaultValue=""  disabled selected>Select your option</option>
                                {graphicCardsFilter.map((component) => <option key={component.id}
                                                                               value={component.id}>{component.name}</option>)}
                            </select>
                            <button disabled={selectedComponents.graphic === ""} onClick={() => setCounter(4)}>Add
                            </button>

                        </div>
                    }


                    {counter >= 4 &&
                        <div className={"admin__row"}>

                            <p>RAM's</p>
                            <select name="ram" onChange={handleChange}>
                                <option defaultValue=""  disabled selected>Select your option</option>
                                {ramFilter.map((component) => <option key={component.id}
                                                                      value={component.id}>{component.name}</option>)}
                            </select>
                            <button disabled={selectedComponents.ram === ""} onClick={() => setCounter(5)}>Add</button>

                        </div>

                    }

                    {counter >= 5 &&
                        <div className="admin__row">


                            <p>Hard disks</p>
                            <select name="hd" onChange={handleChange}>
                                <option defaultValue=""  disabled selected>Select your option</option>
                                {hardDiskFilter.map((component) => <option key={component.id}
                                                                           value={component.id}>{component.name}</option>)}
                            </select>
                            <button disabled={selectedComponents.hd === ""} onClick={() => setCounter(6)}>Add</button>
                        </div>
                    }


                    {counter >= 6 &&
                        <div className="admin__row">
                            <p>Soundcards</p>
                            <select name="sound" onChange={handleChange}>
                                <option defaultValue=""  disabled selected>Select your option</option>
                                {soundcardFilter.map((component) => <option key={component.id}
                                                                            value={component.id}>{component.name}</option>)}
                            </select>
                            <button disabled={selectedComponents.sound === ""} onClick={() => setCounter(7)}>Add
                            </button>
                        </div>
                    }

                    {counter >= 7 &&
                        <div className="admin__row">

                            <p>Power adapters</p>
                            <select name="power" onChange={handleChange}>
                                <option defaultValue=""  disabled selected>Select your option</option>
                                {powerAdapterFilter.map((component) => <option key={component.id}
                                                                               value={component.id}>{component.name}</option>)}
                            </select>

                            <button disabled={selectedComponents.power === ""} onClick={() => setCounter(8)}>Add
                            </button>
                        </div>
                    }
                    {counter >= 8 &&

                        <div className="admin__row">

                            <p>Towers</p>
                            <select name="tower" onChange={handleChange}>
                                <option defaultValue=""  disabled selected>Select your option</option>
                                {towerFilter.map((component) => <option key={component.id}
                                                                        value={component.id}>{component.name}</option>)}
                            </select>
                            <button disabled={selectedComponents.tower === ""} onClick={() => setCounter(9)}>Add
                            </button>


                        </div>
                    }


                    {counter === 9 &&

                        <button onClick={() => {

                            let myResult: any = []
                            myResult = Object.values(selectedComponents);


                            setResult(myResult);

                            setIsShowResult(true);


                        }}>Computify
                        </button>


                    }


                    <button type="submit" onClick={() => {
                        setCounter(0);
                        setSelectedComponents(initalComponents);

                    }}>Clear
                    </button>
                </form>

            }

            {isShowResult && <> <ResultCalc result={result}/>

                <button onClick={() => {
                    setIsShowResult(false);
                    setCounter(0);
                    setSelectedComponents(initalComponents);


                }}>Back
                </button>
            </>


            }


        </div>


    )


}
