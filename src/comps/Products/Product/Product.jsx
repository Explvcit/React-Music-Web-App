import React from 'react';
import Typography from '@material-ui/core/Typography'
import { Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import '../Product/styles.css'
import PlayButton from './PlayButton';
import Box from '@material-ui/core/Box'

const Product = ({ product, onAddToCart }) => {

    console.log(product)
    return (
        <div>
        <Card className='root' sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent className="CardContent" sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {product.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Explvcit
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <CardActions disableSpacing>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}> 
                        <AddShoppingCart className="cardActions" />
                    </IconButton>
                </CardActions>
            <PlayButton product={product}/>
          </Box>
        </Box>
        <CardMedia
          className="pic"
          component="img"
          sx={{ width: 151 }}
          image={product.media.source}
          alt="Live from space album cover"
        />
      </Card>
      </div> 
    )
}

export default Product
