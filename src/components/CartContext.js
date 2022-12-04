import { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([])

    const clearCart = () => {
        setCartList([])                                
    }
    
    const clearItemCart = (id) => {
        let arr = cartList.filter(newCartList => newCartList.id !== id)
        setCartList(arr) 
    }   
    
    const sumCantidadItems = () => { 
        let cantidades =  cartList.map(arr => parseInt(arr.cantidad))    
        const valorInicio = 0
        return cantidades.reduce((acumula, vvalor) => acumula + vvalor,valorInicio)
        
    }

    const sumTotsValProds = () => {

        let cantidades =  cartList.map(arr => parseInt(arr.totvalor))    
        const valorInicio = 0
        let subtotal =  cantidades.reduce((acumula, vvalor) => acumula + vvalor,valorInicio)
        let impuesto = 150
        let total = subtotal + impuesto
        var vv = {
            "subtotal" : subtotal, 
            "impuesto": impuesto, 
            "total": total
        }
        //let valores = 10
        return vv
    }


    const addProdcart = (item,cantidad) => {

        let buscaItem = cartList.find(arr => arr.id === item.id)

        if (buscaItem) {

            buscaItem.cantidad += cantidad;
            buscaItem.totvalor += (cantidad * parseInt(buscaItem.valor));

        } else {

            setCartList([
                ...cartList,
                {
                    id: item.id,
                    imagen: item.imagen,
                    nombre: item.nombre,
                    valor: item.valor,
                    cantidad: cantidad,
                    totvalor: (cantidad * parseInt(item.valor))
                }
            ]);            

        }

    }

    return(
        <CartContext.Provider value={{cartList, addProdcart, clearCart, clearItemCart, sumCantidadItems, sumTotsValProds}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
 