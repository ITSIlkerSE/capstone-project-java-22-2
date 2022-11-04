
type ProductProps = {

    name: string;
    category: string;
    combinationCode: string;
    score: string;
    price: string;
    classification?: string;

}


export default function Product(props:ProductProps){





    return(

        <div>

           <h3>{props.name}</h3>
            <p>{props.category}</p>
            <p>{props.combinationCode}</p>
            <p>{props.score}</p>
            <p>{props.price}</p>
            <p>{props.classification}</p>


        </div>

        )



}