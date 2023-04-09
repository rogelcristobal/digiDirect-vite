import React from 'react';
import { db } from '../firebase/firebase';
import { collection,getDocs } from 'firebase/firestore';
const DebugTwo = ({path}) => {
 

  const [query, setQuery] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const noteItemCollectionRef = collection(db, path)
  React.useEffect(()=>{
    const fetch=async()=>{
        const data = await getDocs(noteItemCollectionRef)
         setQuery(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
         setLoading(false);  
    }
    fetch()
  },[])
    // if (!loading) {
    //   console.log("DebugTwo.jsx",query);
    // }


  return (
    <div>
      
    </div>
  );
}

export default DebugTwo;
