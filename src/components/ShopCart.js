import { useContext } from "react"
import { CardContext }  from "../context/ProductContextProvider/CartContextProvider"
import { Link } from "react-router-dom"
import Cart from "./Cart"

const ShopCart = () => {

    let {state ,  dispatch} = useContext(CardContext)

    return (
        <>
            <div>
                 {
                     state.selectedItem.map(item => <Cart key={item.id} data={item} />)
                 }   

                 {
                     state.itemCounter > 0 && <div>
                         <p><span>Total Counter : {state.itemCounter}</span></p>
                         <p><span>Total Price : {state.total} $</span></p>

                         <button onClick={() => {dispatch({type : "CLEAR" })}}>Clear</button>
                         <button onClick={() => {dispatch({type : "CHECKOUT"})}}>Checkout</button>
                     </div>
                 }

                 {
                     state.checkout && <div>
                         CheckOut Confirm
                         <Link to="/products">But More</Link>
                     </div>
                 }

                 {
                        !state.checkout && state.itemCounter === 0 && <div>
                        You Want to Buy?
                        <Link to="/products">Go To the Shop</Link>
                    </div>
                 }
                 

            </div>
        </>
    )
}

export default ShopCart
