import { useContext } from "react"
import { CardContext } from "../context/ProductContextProvider/CartContextProvider"
import { shorten } from "../helper/function"
const Cart = (props) => {

    let { dispatch } = useContext(CardContext)

    const { image, title, price, quantitiy } = props.data


    return (
        <div className="w-full">
            <div class="w-full">
                <div class="flex my-3 items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                    <img alt="mountain" class="w-20  rounded-md " src={image} />
                    <div id="body" class="flex flex-col ml-4">
                        <h4 id="name" class="text-xl font-semibold">{shorten(title)}</h4>
                        <div class="flex mt-5">
                            <p >quantitiy : {quantitiy}</p>
                        </div>
                        <p>Price : {price} $</p>
                    </div>
                    <div className="flex ml-auto flex-col">
                        {
                            quantitiy > 1 ?
                            <button className="bg-red-600 text-sm h-8 w-8 text-white rounded"  onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button> :
                                <button className="bg-red-600 text-sm p-2 text-white rounded" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 22 22" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" /></svg>
                                </button>
                        }
                        <button className="bg-green-600 text-sm p-2 text-white my-2 rounded" onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 22 22" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Cart
