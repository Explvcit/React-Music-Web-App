import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'

const Products = ({ products, onAddToCart }) => {
    return (
        <div>
       <main className="break">
        <Grid className="grid" container justify="center" spacing={1}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}
        </Grid>
    </main> 
    </div>
    )
}

export default Products