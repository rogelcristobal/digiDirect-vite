import React from "react";
import { BiSearch } from "react-icons/bi";
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
        setState(!state);
        inputRef.current.focus();
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [ref && inputRef]);
  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`text-lg h-9 pl-3 gap-3 cursor-pointer  flex items-center justify-center rounded-lg w-fit bg-inherit
      }`}
    >
      <BiSearch className={`flex-shrink-0 ${state ? "text-blue-500":"text-[#7c8494]/50"}`} />
      <input
        ref={inputRef}
        type="text"
        className="placeholder:text-[0.8rem]  placeholder:text-[#7c8494]/50 px-2 text-sm h-full focus:outline-none w-52 cursor-pointer rounded-r-lg"
        placeholder="Press CTRL + 'K' to search"
        onChange={handleInput}
        value={query}
      />
    </div>
  );
};

export default Searchbar;
