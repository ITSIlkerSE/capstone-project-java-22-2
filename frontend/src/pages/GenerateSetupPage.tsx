import React, {useState} from "react";
import {highSetups, midSetups, budgetSetups} from "../model/Computers";


export default function GenerateSetupPage() {


    const [buttons, setButtons] = useState([false, false, false])
    const [randomNumber, setRandomNumber] = useState(0)
    const [showClear, setShowClear] = useState(false);

    function handleClick(event: any) {

        if (event.target.name === "high") {
            setButtons([true, false, false]);
            const random = Math.floor(Math.random() * highSetups.length);
            setRandomNumber(random);
            setShowClear(true)
        }
        if (event.target.name === "mid") {
            setButtons([false, true, false]);
            const random = Math.floor(Math.random() * midSetups.length);
            setRandomNumber(random);
            setShowClear(true)
        }

        if (event.target.name === "budget") {
            setButtons([false, false, true]);
            const random = Math.floor(Math.random() * budgetSetups.length);
            setRandomNumber(random);
            setShowClear(true)
        }

    }

    function handleClear() {
        setButtons([false, false, false])
        setShowClear(false)
    }

    return (

        <>

            {!showClear &&

                <div className={"generate__buttons"}>
                    <h2>What setup do u prefer?</h2>
                    <button onClick={handleClick} name={"high"}>high-end</button>
                    <button onClick={handleClick} name={"mid"}>mid</button>
                    <button onClick={handleClick} name={"budget"}>budget</button>
                </div>

            }

            {buttons[0] &&

                <div className={"generate__card pop-in"}>
                    <h3>High-End recommendation for you!</h3>
                    <div className={"edit__card"}>

                        <div className="edit__card__row">
                            <p>Mainboard</p>
                            <p>{highSetups[randomNumber].mainboard}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>CPU</p>
                            <p>{highSetups[randomNumber].cpu}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>CPU cooler</p>
                            <p>{highSetups[randomNumber].cooler}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Graphics card</p>
                            <p>{highSetups[randomNumber].grafikarte}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>RAM</p>
                            <p>{highSetups[randomNumber].ram}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Hard disk</p>
                            <p>{highSetups[randomNumber].festplatte}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Soundcard</p>
                            <p>{highSetups[randomNumber].soundkarte}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Power adapter</p>
                            <p>{highSetups[randomNumber].powerAdapter}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Tower</p>
                            <p>{highSetups[randomNumber].tower}</p>
                        </div>


                    </div>


                    <div className="edit__card__row">
                        <p>Estimated price: {highSetups[randomNumber].price}€ (Nov.2022)</p>
                    </div>
                </div>


            }

            {buttons[1] &&
                <div className={"generate__card pop-in"}>
                    <h3>Mid-Tier recommendation for you!</h3>
                    <div className={"edit__card"}>


                        <div className="edit__card__row">
                            <p>Mainboard</p>
                            <p>{midSetups[randomNumber].mainboard}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>CPU</p>
                            <p>{midSetups[randomNumber].cpu}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>CPU Cooler</p>
                            <p>{midSetups[randomNumber].cooler}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Graphics card</p>
                            <p>{midSetups[randomNumber].grafikarte}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>RAM</p>
                            <p>{midSetups[randomNumber].ram}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Hard disk</p>
                            <p>{midSetups[randomNumber].festplatte}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Soundcard</p>
                            <p>{midSetups[randomNumber].soundkarte}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Power adapter</p>
                            <p>{midSetups[randomNumber].powerAdapter}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Tower</p>
                            <p>{midSetups[randomNumber].tower}</p>
                        </div>


                    </div>
                    <div className="edit__card__row">
                        <p>Estimated price: {midSetups[randomNumber].price}€ (Nov.2022)</p>
                    </div>

                </div>


            }

            {buttons[2] &&

                <div className={"generate__card pop-in"}>
                    <h3>Budget Setup recommended fou you!</h3>
                    <div className={"edit__card"}>

                        <div className="edit__card__row">
                            <p>Mainboard</p>
                            <p>{budgetSetups[randomNumber].mainboard}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>CPU</p>
                            <p>{budgetSetups[randomNumber].cpu}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>CPU Cooler</p>
                            <p>{budgetSetups[randomNumber].cooler}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Graphics card</p>
                            <p>{budgetSetups[randomNumber].grafikarte}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>RAM</p>
                            <p>{budgetSetups[randomNumber].ram}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Hard disk</p>
                            <p>{budgetSetups[randomNumber].festplatte}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Soundcard</p>
                            <p>{budgetSetups[randomNumber].soundkarte}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Power adapter</p>
                            <p>{budgetSetups[randomNumber].powerAdapter}</p>
                        </div>

                        <div className="edit__card__row">
                            <p>Tower</p>
                            <p>{budgetSetups[randomNumber].tower}</p>
                        </div>


                    </div>
                    <div className="edit__card__row">
                        <p>Estimated price: {budgetSetups[randomNumber].price}€ (Nov.2022)</p>
                    </div>
                </div>


            }
            {
                showClear &&
                <button onClick={handleClear}>again?</button>
            }


        </>
    )


}