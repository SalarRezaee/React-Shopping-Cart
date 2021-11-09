// Functions
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { shorten, isInCard, quantitiyCount } from '../helper/function'
import { CardContext } from '../context/ProductContextProvider/CartContextProvider'
const Product = ({ productData }) => {

    let { state, dispatch } = useContext(CardContext)

    return (
        <div className="bg-white rounded-xl	 filter drop-shadow-2xl	">
            <img src={productData.image} alt="" style={{ width: '200px' , height : '200px' }} className="mx-auto m-5"/>
            <h1 className="text-center text-lg text-bold">{shorten(productData.title)}</h1>
            <div className="flex px-5 my-5 justify-between">
                <p className="bg-red-600 p-2 text-sm text-white text-opacity-90 rounded">{productData.price} $</p>
            </div>

            <div className="flex justify-between p-5">
                    <span className="bg-purple-400 p-2 text-white rounded"><Link to={`/products/${productData.id}`}>Datiles</Link></span>
                    {
                        isInCard(state, productData.id) ?
                            <button className="bg-green-600 text-sm p-2 text-white rounded" onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                            <button className="bg-purple-600 text-sm p-2 text-white rounded" onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add To Cart</button>
                    }

                    {
                        quantitiyCount(state, productData.id) > 1 && <button className="bg-red-600 text-sm p-2 text-white rounded"  onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                    }

                    {
                        quantitiyCount(state, productData.id) === 1 && <button className="bg-red-600 text-sm p-2 text-white rounded"  onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}>Remvoe Item</button>
                    }
            </div>


        </div>
    )
}

export default Product
