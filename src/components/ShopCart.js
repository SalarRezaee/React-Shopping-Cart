import { useContext } from "react"
import { CardContext } from "../context/ProductContextProvider/CartContextProvider"
import { Link } from "react-router-dom"
import Cart from "./Cart"

import success from "../assets/success.png"



const ShopCart = () => {

    let { state, dispatch } = useContext(CardContext)

    return (
        <>
            <div dir="rtl" >
                <div className="grid gap-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
                    {
                        state.itemCounter > 0 && <div dir="ltr" className="ml-auto mt-2 rounded border-2 lg:w-3/4 md:w-full sm:w-full xs:w-full h-52 p-5">
                            <h1 className="text-2xl mb-3 rounded">Shopping Cart</h1>
                            <p className="py-2"><span>Total Counter : {state.itemCounter}</span></p>
                            <p className="py-2"><span>Total Price : {state.total} $</span></p>
                            <div className="flex justify-between my-2">
                                <button className="p-2 shadow-xl text-sm rounded bg-red-700 text-white" onClick={() => { dispatch({ type: "CLEAR" }) }}>Clear</button>
                                <button className="p-2 shadow-xl text-sm rounded bg-green-700 text-white" onClick={() => { dispatch({ type: "CHECKOUT" }) }}>Checkout</button>
                            </div>
                        </div>
                    }

                    {
                        state.selectedItem && <div className="w-full" dir="ltr">
                            {state.selectedItem.map(item => <Cart key={item.id} data={item} />)}
                        </div>
                    }
                </div>

                {
                    state.checkout && <div dir="ltr" className="w-full mx-auto flex flex-col items-center space-y-5" >
                        <img src={success} className="my-4 mx-1" />
                        <p className="my-5">Your payment was successful</p>
                        <button className="p-2 shadow-xl text-sm rounded bg-green-700 text-white"><Link to="/products">Buy More</Link></button>
                    </div>
                }

                {
                    !state.checkout && state.itemCounter === 0 && <div dir="ltr" className="w-full mx-auto flex flex-col items-center space-y-5" >
                        <p className="my-5">Your Shopping Cart is Empty</p>
                        <button className="p-2 shadow-xl text-sm rounded bg-green-700 text-white"><Link to="/products">Buy More</Link></button>
                    </div>
                }


            </div>
        </>
    )
}

export default ShopCart
