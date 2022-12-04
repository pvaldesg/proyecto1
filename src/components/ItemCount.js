import { useEffect,useState } from "react";
import { AddCircleRounded, RemoveCircleRounded} from "@mui/icons-material";
import { Button } from "@mui/material";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [count , setCount] = useState(0)

    useEffect(() => {
        setCount(initial)
    },[initial])

    const increment = () =>{
        count < stock && setCount(count+1)
    }


    const decrement = () =>{
        count > (initial+1) && setCount(count-1)
    }    

    return(
        <>
            <button onClick={increment}><AddCircleRounded color="primary" fontSize="large"/></button>&nbsp;
            <button onClick={decrement}><RemoveCircleRounded color="error" fontSize="large"/> </button> {count} 
            {
                stock && count
                ? <Button variant="contained" color="success" onClick={() => onAdd(count)}>Agregar al Carro</Button>
                : <Button disabled>Agregar al Carro</Button>
            }

        </>
    )

}

export default ItemCount;