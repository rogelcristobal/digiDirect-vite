import React from "react";
import { TbSearch } from "react-icons/tb";
const Searchbar = () => {
  const [state, setState] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const ref = React.useRef(null);
  const inputRef = React.useRef(null);
  const handleClick = () => {
    setState(!state);

    inputRef.current.focus();
  };
  const handleInput = (e) => {
    setQuery(e.target.value);
  };
  React.useEffect(() => {
    const handleDocumentClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setState(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        setState(true);
        inputRef.current.focus();
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
      className={`text-lg h-[3rem] px-2 mt-8  thin-box-divider cursor-pointer flex-shrink-0 flex items-center justify-center rounded-lg w-full ${
        state ? "" : ""
      }
      }`}
    >
      <div className=" p-2   ">
        <TbSearch
          className={`flex-shrink-0 text-[1.5rem] ${
            state ? "text-[#c8c8cb]" : "text-[#7c8494]/50"
          }`}
        />
      </div>
      <div className="w-full   rounded-2xl  h-full">
        <input
          ref={inputRef}
          type="text"
          className="placeholder:text-[1.1rem] placeholder:font-medium placeholder:text-[#7c8494]/40  px-2 text-md h-full  focus:outline-none w-full cursor-pointer   rounded-r-lg placeholder:font-plus"
          placeholder="Search"
          onChange={handleInput}
          value={query}
        />
      </div>
    </div>
  );
};

export default Searchbar;
