import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const CartWidget = (props) => {
    return(
        <>
        <Badge badgeContent={props.num} color="error">
        <ShoppingCart color="white" />
        </Badge>         
        </>
    )
}

export default CartWidget;