import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import  '../Cart/styles.css'
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom'


const Cart = ({ cart, onRemoveFromCart, onEmptyCart, handleRemoveFromCart, handleEmptyCart, handleUpdateQty }) => {

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">
            <Link to="/">No items in your cart. Start adding some</Link>
        </Typography>
    )

    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateQty}  onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className='cardDetails'>
                    <Typography variant="h4">
                        Subtotal: { cart.subtotal.formatted_with_symbol }
                    </Typography>
                    <div>
                <Button className='emptyButton' size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component={Link} to="/checkout" className='checkoutButton' size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    )

    if(!cart.line_items) return 'Loading...'

    return (
        <Container className="cart">
        <div className='toolbar'/>
        <h4 className='title' gutterBottom>Your Cart</h4>
            { !cart.line_items.length ? renderEmptyCart() : renderCart()}
            
        </Container>
    )
}

export default Cart
