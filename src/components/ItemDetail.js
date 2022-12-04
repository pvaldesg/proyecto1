import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

 

const ItemDetail = ({item}) => {

    const [contadorItem, setContadorItem] = useState(0); 
    const test = useContext(CartContext)

    const onAdd = (cantidad) => {
        alert("selecciono " + cantidad + " items")
        setContadorItem(cantidad) 
        test.addProdcart(item,cantidad)
    }


    return (
        <Container>
            <Box>
                    <Box
                    component="img"
                    sx={{
                    height: 233,
                    width: 1000,
                    maxHeight: { xs: 233, md: 1000 },
                    maxWidth: { xs: 350, md: 2000 },
                    }}
                    alt="Imagen"
                    src={item.imagen}
                    />

                    <Typography gutterBottom variant="h3" component="div">{item.nombre}</Typography>
                    <Typography gutterBottom variant="body4" color="text.secondary"  component="div">Detalle</Typography>
                    <Typography gutterBottom variant="body4" color="text.secondary"  component="div">Fecha Inicio: {item.fecha_inicio}</Typography>
                    <Typography gutterBottom variant="body4" color="text.secondary"  component="div">Duración: {item.duracion}</Typography>
                    <Typography gutterBottom variant="body4" color="text.secondary"  component="div">Modalidad: {item.modalidad}</Typography>
                    <Typography gutterBottom variant="body4" color="text.secondary"  component="div">Horario: {item.horario}</Typography>
                    <Typography gutterBottom variant="body4" color="text.secondary"  component="div">Area: {item.area}</Typography>
                    <Typography gutterBottom variant="body4" color="text.secondary"  component="div">Stock: {item.stock}</Typography>
                    <Typography gutterBottom variant="body4" color="text.secondary"  component="div">Valor: {item.valor}</Typography>

                    {
                        contadorItem === 0  
                        ? <ItemCount stock={item.stock} initial={contadorItem} onAdd={onAdd} />
                        : <Link to='/cart'><button color="secondary">Ir al Carro</button></Link>

                    }
                    
                    

            </Box>
            
        </Container>
    )
}
export default ItemDetail;