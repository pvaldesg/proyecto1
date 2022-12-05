import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";


//import { customFetch } from "../utils/customFetch";
//import dataProds from "../utils/dataProds";



const ItemDeatailContainer = () => {

    const [datoProd, setDatoProd] = useState({})
    const {idItem} = useParams()


    useEffect(()=>{
        //console.log("llega 1-->"+idItem);


        /*customFetch(500, dataProds.find(item => item.id === idItem))
        .then(response => setDatoProd(response))
        .catch(err => console.log(err))*/


        firestoreFetchOne(idItem)
          .then(result => setDatoProd(result))
          .catch(err => console.log(err))

      },[idItem])
  
  
      return(
        <ItemDetail item={datoProd}/>
      )


}
export default ItemDeatailContainer; 