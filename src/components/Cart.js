import { useContext } from "react"
import { CardContext } from "../context/ProductContextProvider/CartContextProvider"
import { shorten } from "../helper/function"
const Cart = (props) => {

    let { dispatch } = useContext(CardContext)

    const { image, title, price, quantitiy } = props.data


    return (
        <div className="w-100 bg-white shadow-xl flex items-center my-2 p-5">
            <div>
            <img className="object-contain w-32 h-32" src={image} />
                <h1 className="text-lg my-2">{shorten(title)}</h1>
                <p>{price} $</p>
                <span>{quantitiy}</span>
            </div>
            <div className="flex">
                {
                    quantitiy > 1 ?
                        <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button> :
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>delete</button>
                }
                <button onClick={() => dispatch({ tyoe: "INCREASE", payload: props.data })}>+</button>
            </div>
        </div>
    )


}

export default Cart
