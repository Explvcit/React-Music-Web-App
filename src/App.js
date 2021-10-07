import React, { useState, useEffect } from 'react'
import Products from './comps/Products/Products'
import { commerce } from './lib/commerce'
import Nav from './comps/Products/Nav/Nav'
import Cart from './comps/Cart/Cart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles.css'
import MoreLinks from './comps/MoreLinks/More'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()
        setProducts(data)
    }

    const fetchCart = async () => {
         
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const res = await commerce.cart.add(productId, quantity)

        setCart(res.cart)
    }

    const handleUpdateQty = async (productId, quantity) => {
        const res = await commerce.cart.update(productId, { quantity })

        setCart(res.cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const res = await commerce.cart.remove(productId)

        setCart(res.cart)
    }

    const handleEmptyCart = async () => {
        const res = await commerce.cart.empty()
        setCart(res.cart)
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])
        console.log(cart)
    return (
        <Router>
        <div>
            <Nav totalItems={cart.total_items}/>
            <Switch>
                <Route exact path="/">
                    <Products products={products} onAddToCart={handleAddToCart}/>
                    <MoreLinks />
                </Route>
                <Route exact path="/cart">
                    <Cart cart={cart} 
                    handleUpdateQty={handleUpdateQty}
                    handleEmptyCart={handleEmptyCart}
                    handleRemoveFromCart={handleRemoveFromCart}/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default App
