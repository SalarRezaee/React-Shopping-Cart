import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductsContext } from '../context/ProductContextProvider/ContextProvider'

const Productdetails = (props) => {

    const id = useParams("id").id
    const data = useContext(ProductsContext)
    const product = data[id - 1]
    const {image , title , description , category , price} = product || {};

    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>category : {category}</p>
                <p>price : {price} $</p>
                <Link to="/products">Back to Shop</Link>
            </div>
        </div>
    )
}

export default Productdetails
