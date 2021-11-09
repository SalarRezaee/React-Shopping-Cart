import React from 'react'
import Store from './components/Store'
import ContextProvider from './context/ProductContextProvider/ContextProvider'
import CartContextProvider from './context/ProductContextProvider/CartContextProvider'
import { Routes, Route, Navigate } from 'react-router-dom'
import Productdetails from './components/Productdetails'
import Navbar from './components/Navbar'
import ShopCart from './components/ShopCart'
const App = () => {
    return (
            <ContextProvider>
                <CartContextProvider>
                    <div className="w-100 bg-gray-100"> <Navbar /> </div>
                    <div className="w-100">
                        <div className="container mx-auto">
                            <Routes>
                                <Route path="/products" exact element={<Store />} />
                                <Route path="/products/:id" element={<Productdetails />} />
                                <Route path="/cart" element={<ShopCart />} />
                                <Route path="/" element={<Navigate to="/products" />} />
                            </Routes>
                        </div>
                    </div>
                </CartContextProvider>
            </ContextProvider>
    )
}

export default App
