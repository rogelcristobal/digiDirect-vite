import React from 'react';
import { collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const DBQueryContext = React.createContext()


export const DBQueryContextProvider = ({children}) => {
  const query = collection(db, "my-notes");
  const [docs, loading, error] = useCollectionData(query);
  return (
    <DBQueryContext.Provider value={{docs,loading,error}}>
      {children}
    </DBQueryContext.Provider>
  );
}

export default DBQueryContext;
