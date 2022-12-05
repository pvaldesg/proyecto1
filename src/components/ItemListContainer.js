import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import ItemList from "../containers/ItemList";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";



const ItemListContainer = () => { 


  const [datosProds, setDatosProds] = useState([])
  const {idArea} = useParams();


  useEffect(()=>{

    firestoreFetch(idArea)
        .then(result=>setDatosProds(result))
        .catch(err => console.log(err))
    },[idArea])


    return(

      <Box p={5}>
        <Grid container spacing={5}> 
              <ItemList items={datosProds}/>
        </Grid>
      </Box>   
    )
} 

export default ItemListContainer;