import React from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { getCollectionHook } from "../hooks/getCollectionHook";
const CollectionContext = React.createContext();
export const CollectionContextProvider = ({ children }) => {
  const {query,loading} = getCollectionHook(db,"my-notes/4bGwXxiddNvQyrkB1LWv/collection")
  return (
    <CollectionContext.Provider
      value={{ query ,loading}}
    >
        {children}
    </CollectionContext.Provider>
  );
};

export default CollectionContext;
