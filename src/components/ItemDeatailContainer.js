import { useEffect, useState } from "react";
import dataProds from "../utils/dataProds";
import { customFetch } from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { Params, useParams } from "react-router-dom";

const ItemDeatailContainer = () => {

    const [datoProd, setDatoProd] = useState({})
    const {idItem} = useParams()


    useEffect(()=>{
        customFetch(2000, dataProds.find(item => item.id == idItem))
        .then(response => setDatoProd(response))
        .catch(err => console.log(err))
      },[])
  
  
      return(
        <ItemDetail item={datoProd}/>
      )


}
export default ItemDeatailContainer;