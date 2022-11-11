//import { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";


const Item = (props) => {

    /*const [rate, setRate] = useState(0);
    const rateProd = () => {
        setRate(rate + 1);
        //console.log(rate);
    }

    useEffect(()=>{
        //console.log("se actualiza el rate");
    },[rate])*/


    return (
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={props.imagen}
            alt="Imagen Tarjeta"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.nombre}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary"  component="div">
                {props.intro}
            </Typography>
            <Typography variant="body2" component="div">
                <b>Area:</b> {props.area}
            </Typography>
            </CardContent>
            <CardActions>
            <Link to={`item/${props.areaid}`}><Button size="small">Ver Detalle</Button></Link>
            </CardActions>
        </Card>
    )
}

export default Item;