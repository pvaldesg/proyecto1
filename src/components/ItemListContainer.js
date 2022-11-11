import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import ItemList from "../containers/ItemList";
import { customFetch } from "../utils/customFetch";
import dataProds from "../utils/dataProds";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {


  const [datosProds, setDatosProds] = useState([])
  const {idArea} = useParams();

  useEffect(()=>{
      if(idArea == undefined){
        customFetch(2000, dataProds)
        .then(response => setDatosProds(response))
        .catch(err => console.log(err))
      }else{
        customFetch(2000, dataProds.filter(item => item.areaid == idArea))
        .then(response => setDatosProds(response))
        .catch(err => console.log(err))
      }

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