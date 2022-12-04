import { Button } from "@mui/material";
import { useContext } from "react"
import { CartContext } from "./CartContext"


const Cart = () => {
    const test = useContext(CartContext)
    //console.log(test.cartList);
    
    return (
        <>
            {
                test.cartList.length === 0 
                ? <li>No hay Productos en el Carro de compra</li>
                : test.cartList.map(item => <li key={item.id}>{item.nombre} - {item.cantidad} - {item.valor} - total: {item.totvalor} <Button color="error" onClick={() => test.clearItemCart(item.id)}>Quitar</Button></li>)
            }
            <br/><br/>
            {
                 test.cartList.length > 0 
                 ?   <Button color="warning" onClick={test.clearCart}>Limpiar Carro de Compras</Button>
                 :   <span>&nbsp;</span>

            }
            <br/><br/><br/>
            Resumen de orden de compra:
            <br/>
            Subtotal: {test.sumTotsValProds().subtotal}
            <br/>
            impuesto: {test.sumTotsValProds().impuesto}
            <br/>
            total: {test.sumTotsValProds().total}

        </>
    )
}

export default Cart