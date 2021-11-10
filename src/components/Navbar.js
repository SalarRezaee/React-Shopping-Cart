import { useContext } from "react"
import { Link } from "react-router-dom"
import { CardContext } from "../context/ProductContextProvider/CartContextProvider"

const Navbar = () => {

    const { state } = useContext(CardContext)

    return (
        <div className="container mx-auto mb-10 flex justify-between py-4">
            <Link to="/products">Products</Link>

            <Link to="/cart">
                
            <span class="relative inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">{state.itemCounter}</span>
            </span>
            </Link>

        </div>
    )
}

export default Navbar
