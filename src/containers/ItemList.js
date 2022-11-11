
import Item from "../components/Item"; 
import { Grid } from "@mui/material";


/*

        {
            datosProds.map(item => (
              <Grid item> 
              
                <Product
                    key={item.id}
                    nombre={item.nombre}
                    intro={item.intro}
                    imagen={item.imagen}
                />  
              </Grid> 
            ))
        }

*/


const ItemList = ({ items }) => {

      return (
        <>
        {
          items.length > 0
          ? items.map(item => (<Grid item> <Item key={item.id} nombre={item.nombre} intro={item.intro} imagen={item.imagen} area={item.area} areaid={item.areaid}/></Grid> ))
          : <p>Cargando...</p>
        }
        </>
      )

}
export default ItemList;