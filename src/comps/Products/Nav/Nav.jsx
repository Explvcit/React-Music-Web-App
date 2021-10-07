import { AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from 'react-router-dom'
import '../Nav/styles.css'

const Nav = ({totalItems}) => {
    const location = useLocation()
    return (
        <>
            <AppBar  className="nav appBar" position="fixed" color="inherit" >
                <Toolbar>
                    <Typography className="title" component={Link} to="/" variant="h6" color="black">
                        Explvcit
                    </Typography>
                    <div className='grow'></div>
                    {/*IF WE ARE ON HOME PAGE THEN SHOW CART LINK*/}
                        {location.pathname === '/' && (
                        <div>
                    <IconButton className="addToCart" component={Link} to="/cart" aria-label="Show cart items" color="default" >
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
            <br></br>
        </>
    )
}
export default Nav