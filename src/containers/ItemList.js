
import Item from "../components/Item"; 
import { Grid } from "@mui/material";

const ItemList = ({ items }) => {

      return (
        <>
        {
          items.length > 0
          ? items.map(item => (<Grid item key={item.id}> <Item nn={item.id} nombre={item.nombre} intro={item.intro} imagen={item.imagen} area={item.area} areaid={item.areaid} stock={item.stock}/></Grid> ))
          : <p>Cargando...</p>
        }
        </>
      )

}
export default ItemList;