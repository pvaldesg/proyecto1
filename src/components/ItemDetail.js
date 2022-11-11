import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";

const ItemDetail = ({item}) => {
    return (
        <Container>
            <Box>
                    <Box
                    component="img"
                    sx={{
                    height: 233,
                    width: 350,
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
            </Box>
            
        </Container>
    )
}
export default ItemDetail;