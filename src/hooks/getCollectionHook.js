import React from "react";
import { collection, onSnapshot } from "firebase/firestore";
export const getCollectionHook=(db,path)=>{
    const [loading,setLoading] = React.useState(true)
    const [query,setQuery] = React.useState([])
    const collectionPathRef = collection(db,path)
    React.useEffect(() => {
      const unsubscribe = onSnapshot(collectionPathRef, (snapshot) => {
        setQuery(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false)
    });
      return () => {
        unsubscribe();
      };
    
  }, [path]);
    return {loading,query}
}