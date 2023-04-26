import React from "react";
import { FiSearch,FiX } from "react-icons/fi";
const Searchbar = () => {
  const [state, setState] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const ref = React.useRef(null);
  const inputRef = React.useRef(null);
  const handleClick = () => {
    setState(!state);
    inputRef.current.placeholder=""
    inputRef.current.focus();
  };
  const handleInput = (e) => {
    setQuery(e.target.value);
  };
  const handleClear=(e)=>{
    e.stopPropagation()
    if(query){
      setQuery("")
      setState(false)
    }
  }
  React.useEffect(() => {
    const handleDocumentClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setState(false);
        inputRef.current.placeholder=`Search`
      }
    };
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        setState(true);
        inputRef.current.focus();
         inputRef.current.placeholder=""
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleDocumentClick);
  }, [ref && inputRef]);



  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`text-lg h-14  px-1 py-1.5  cursor-pointer flex-shrink-0 flex items-center justify-start rounded-xl w-full ${
        state ? "" : ""
      }
      }`}
    >
      <div className=" p-3 mr-0 rounded-full ">
        <FiSearch
          className={`flex-shrink-0 text-[1.5rem] ${state&&'text-[#2c84fb]'} `}
        />
      </div>
      <div className={`w-full relative  rounded-xl mr-0  h-full  ${state? '':''}`}>
        <input
          ref={inputRef}
          type="text"
          className={`placeholder:text-[1.2rem] max-w-[90%] placeholder:font-semibold placeholder:text-[#1b2838]/30  px-4 text-md h-full  focus:outline-none w-full cursor-pointer text-[1.2rem] placeholder:tracking-wider rounded-r-lg placeholder:font-plus `}
          placeholder={`Search  `}
          onChange={handleInput}
          value={query}
        />
        {query&& <div onClick={(e)=>handleClear(e)} className="absolute  text-xl rounded-full p-1.5 top-1/2 -translate-y-1/2 hover:text-[#2c84fb] text-[#1b2838]/20 medium-box-divider  right-2 "><FiX /></div>}
      </div>
    </div>
  );
};

export default Searchbar;
