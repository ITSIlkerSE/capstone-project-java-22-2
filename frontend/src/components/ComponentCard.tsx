
type ProductProps = {

    name: string;
    category: string;
    combinationCode: string;
    score: string;
    price: string;
    classification?: string;

}


export default function ComponentCard(props:ProductProps){





    return(

        <div  className="edit__card">
            <h3>{props.name}</h3>
            <div className="edit__card__row">
                <p>Category: </p>
                <p>{props.category}</p>
            </div>
            <div className="edit__card__row">
                <p>C-Code: </p>
                <p>{props.combinationCode}</p>
            </div>
            <div className="edit__card__row">
                <p>Score: </p>
                <p>{props.score}</p>
            </div>
            <div className="edit__card__row">
                <p>Price: </p>
                <p>{props.price}</p>
            </div>
            <div className="edit__card__row">
                <p>Classification: </p>
                <p>{props.classification}</p>
            </div>








        </div>

        )



}