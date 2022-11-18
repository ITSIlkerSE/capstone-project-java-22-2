type myResultProps = {

    result: any
}

function ResultCalc(props: myResultProps) {

    let price = 0;
    let score = 0;

    props.result.forEach((item: any) => price += item.price);
    props.result.forEach((item: any) => score += item.score);

    let display = "";
    let info = "";

    if (score >= 5045) {
        display = "High-End Setup!"
        info = "After we've checked your chosen components we figured out that this one is a solid High-End PC! FullHD, WQHD, 4k all above 60 FPS! Go for it !"
    } else if (score >= 3500 && score < 5045) {
        display = "Mid-Tier Setup!"
        info = "Judging by the components, this makes a Mid-Tier PC setup! We recommend playing in FullHD to get above smooth 60 FPS. WQHD is rendered up to 60 FPS. "
    } else {
        display = "Budget-Setup!"
        info = "We would list this PC as a Low-Tier Setup. You should be able to play games in FullHD, but the smooth 60 FPS are not guaranteed. WQHD and 4k will be hard to master for this one!"
    }


    return (
        <>
            <h2 id={"result"}>Result</h2>
            <div className={"edit__card pop-in"}>
                {props.result.map((item: any) => <div style={{display: "flex"}}><p
                    style={{flex: "1"}}>{item.category}</p>
                    <p style={{flex: "1"}}>{item.name}</p></div>)}

            </div>
            <div className={"result pop-in"}>
                <h3>Estimated price: {price} €</h3>
                <h3>Score: {score} Points</h3>

                <h3>Classification: {display}</h3>
                <p>{info}</p>
            </div>

        </>
    )
}

export default ResultCalc;