import {useState,useEffect,createContext} from 'react'
import {getProducts} from '../../services/api'

export const ProductsContext = createContext()

const ContextProvider = ({children}) => {

    const [products , setProducts] = useState([])

    useEffect(() => {

        const FetchApi = async () => {
            setProducts(await getProducts())
        }

        FetchApi()

    } , [])



    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ContextProvider
