import { useContext } from "react"
import { CardContext }  from "../context/ProductContextProvider/CartContextProvider"
import { shorten } from "../helper/function"
const Cart = (props) => {

    let { dispatch } = useContext(CardContext)

    const {image , title , price , quantitiy } = props.data


    return (
        <div>
            <img src={image}/>
            <div>
                <h1>{shorten(title)}</h1>
                <p>{price} $</p>
                <span>{quantitiy}</span>
            </div>
            <div>
                {
                    quantitiy > 1 ?
                    <button onClick={() => dispatch({type : "DECREASE" , payload :  props.data})}>-</button> : 
                    <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload :  props.data})}>delete</button>
                }
                 <button onClick={() => dispatch({tyoe : "INCREASE" , payload : props.data})}>+</button>
            </div>
        </div>
    )


}

export default Cart
