import { collection, query, where, orderBy, getDocs, getDoc, doc} from "firebase/firestore";
import { db } from "./firebaseConfig";


export const firestoreFetch = async (idArea) => {
    let q
    if(idArea){
        q = query(collection(db, "Diplomados"), where('areaid', '==', parseInt(idArea)))
    }else{
        q = query(collection(db, "Diplomados"), orderBy('nombre'))
    }

    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))    
    return dataFromFirestore 
} 

export const firestoreFetchOne = async (idItem) => {

    const docRef = doc(db, "Diplomados", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: idItem,
        ...docSnap.data()
        }      
    } else {
      console.log("No such document!");
    }


}
