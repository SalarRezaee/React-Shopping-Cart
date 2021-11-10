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
            <div className="flex px-5 my-5 items-center justify-between">
                <span className="bg-purple-400 text-purple-700 p-2 text-sm rounded"><Link to={`/products/${productData.id}`}>Details</Link></span>
                <p className="p-2 text-lg">{productData.price} $</p>
            </div>

            <div className="p-5 flex align-center justify-between">
                  
                    {
                        isInCard(state, productData.id) ?
                            <button className="bg-green-600 text-sm p-2 text-white rounded" onClick={() => dispatch({ type: "INCREASE", payload: productData })}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 22 22" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                            </button> :
                            <button className="w-full p-2 shadow-xl text-sm rounded bg-purple-700 text-white" onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add To Cart</button>
                    }

                    {
                        quantitiyCount(state, productData.id) > 1 && <button className="bg-red-600 text-sm h-8 w-8 text-white rounded"  onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                    }

                    {
                        quantitiyCount(state, productData.id) === 1 && <button className="bg-red-600 text-sm p-2 text-white rounded"  onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 22 22" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/></svg>
                        </button>
                    }
            </div>


        </div>
    )
}

export default Product
