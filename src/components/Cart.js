import { Button } from "@mui/material";
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
//import { async } from "@firebase/util";


const Cart = () => {
    const test = useContext(CartContext)
    //console.log(test.cartList);
    
    const createOC = () => {
        let order = {
            buyer: {
                name: 'Perico Palotes',
                email: 'ppalotes@gmail.com',
                phone: '123456'
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => ({
                id: item.id,
                price: item.valor,
                title: item.nombre,
                qty: item.cantidad
            })),
            total: test.sumTotsValProds().total
        }
        console.log(order)

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'))
            await setDoc(newOrderRef, order)   
            return newOrderRef 
        }

        createOrderInFirestore()
            .then(response => {
                alert('Order ID: ' + response.id)
                test.cartList.forEach(async(item) => {
                    const itemRef = doc(db, "Diplomados", item.id);
                    //console.log(item)
                    await updateDoc(itemRef, {
                        stock: increment(-parseInt(item.cantidad))
                      })

                })
                test.clearCart()
            })
            .catch(err => console.log(err))
    }

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
            <br/><br/>
            <Button onClick={createOC}>Crear Orden de Compra</Button>

        </>
    )
}

export default Cart