import { useContext } from "react"
import { ProductsContext } from '../context/ProductContextProvider/ContextProvider'
import Product from "../shared/Product"
const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className="grid lg:grid-cols-4 md:gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 lg:gap-6 lg:auto-cols-max md:auto-cols-max sm:auto-cols-max">
            {
                products.map(product => <Product 
                    key={product.id} 
                    productData={product} />)
            }
        </div>
    )
}

export default Store
