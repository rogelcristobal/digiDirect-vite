import React from "react";
import { TbSearch } from "react-icons/tb";
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
    // return () => {
    //   document.removeEventListener("keydown", handleKeyDown);
    //   document.removeEventListener("mousedown", handleDocumentClick);
    // };
  }, [ref && inputRef]);



  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`text-lg h-[3rem]  px-1   cursor-pointer flex-shrink-0 flex items-center justify-start rounded-xl w-full ${
        state ? "" : ""
      }
      }`}
    >
      <div className=" p-3 mr-1 rounded-full ">
        <TbSearch
          className={`flex-shrink-0 text-[1.25rem] `}
        />
      </div>
      <div className={`w-full bg-[#f6f6f6]/30  rounded-xl mr-2  h-full  ${state? '':''}`}>
        <input
          ref={inputRef}
          type="text"
          className="placeholder:text-[1rem]  placeholder:font-medium placeholder:text-[#1b2838]/20  px-4 text-md h-full  focus:outline-none w-full cursor-pointer text-[0.975rem] placeholder:tracking-wider rounded-r-lg placeholder:font-plus"
          placeholder={`Search  `}
          onChange={handleInput}
          value={query}
        />
      </div>
    </div>
  );
};

export default Searchbar;
