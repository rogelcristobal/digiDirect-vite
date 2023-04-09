import React from 'react';
import { db } from '../firebase/firebase';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const DebugTwo = ({path}) => {
 

    const query = collection(db, path)
    const [docs,loading] = useCollectionData(query)
    if(!loading){
        console.log("DebugTwo.jsx",docs)
    }
  return (
    <div>
      
    </div>
  );
}

export default DebugTwo;
