import React from "react";
import DebugTwo from "./DebugTwo";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
const Debug = () => {
  const [query, setQuery] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const notesCollectionRef = collection(db, "notes");

  React.useEffect(() => {
    const fetch = async () => {
      const data = await getDocs(notesCollectionRef);
      setQuery(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    fetch();
  }, []);
    if (!loading) {
      console.log("Debug.jsx",query[0]);
    }


  const handleClick = () => {};
  return <div onClick={handleClick}>
    {!loading && <DebugTwo path={`notes/${query[0].id}/data`}></DebugTwo>}
    </div>;
};

export default Debug;
