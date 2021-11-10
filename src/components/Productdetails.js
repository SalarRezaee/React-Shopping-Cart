import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductsContext } from '../context/ProductContextProvider/ContextProvider'

const Productdetails = (props) => {

    const id = useParams("id").id
    const data = useContext(ProductsContext)
    const product = data[id - 1]
    const { image, title, description, category, price } = product || {};

    return (
        <div className="flex xs-responsive items-center justify-between lg:flex-row xl:flex-row md:flex-col sm:flex-col xs:flex-col  space-x-6 mt-5 bg-white shadow-2xl p-5 rounded">
            <div>
                <img src={image} height="200" alt="product" />
            </div>
            <div>
                <h1 className="my-4 text-bold text-xl">{title}</h1>
                <p className="text-justify my-5">{description}</p>
                <div className="flex space-x-6 mb-4">
                    <p>Category : {category}</p>
                    <p>Price : {price} $</p>
                </div>
                <p className="bg-purple-500 my-2  text-white text-center p-2 rounded"><Link to="/products">Back to Shop</Link></p>
            </div>
        </div>
    )
}

export default Productdetails
