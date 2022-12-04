import { collection, query, where, orderBy, getDocs} from "firebase/firestore";
import { db } from "./firebaseConfig";


export const firestoreFetch = async (idArea) => {
    let q
    if(idArea){
        //console.log("where "+idArea)
        q = query(collection(db, "Diplomados"), where('areaid', '==', parseInt(idArea)))
        //console.log(q)
    }else{
        //console.log("entra")
        q = query(collection(db, "Diplomados"), orderBy('nombre'))
        //console.log(q)
    }

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs)
    const dataFromFirestore = querySnapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))    
    return dataFromFirestore 
} 