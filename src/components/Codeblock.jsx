import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TbClipboard, TbClipboardCheck } from "react-icons/tb";

const Codeblock = ({ template }) => {
  const [view, toggleView] = useState(0);
  const [copyIsClicked, setCopyIsClicked] = useState(false);
  const customStyle = {
    paddingLeft: "1.5rem",
    paddingTop: "1.5rem",
    paddingRight:'3rem',
        // paddingBottom:'1.5rem',
    // borderRadius: "0px",
    fontSize: "0.785rem",
    lineHeight: "1.4rem",
    whiteSpace: "pre",
    tabSize: "4",
    border: "none",
    minHeight:"3.5rem",
    margin: "0",
    // boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
    boxShadow: "rgba(0, 0, 0, 0.03) 0px 1px 1px 0px, rgba(27, 31, 35, 0.1) 0px 0px 0px 1px"
  };
  const codeTagProps = {
    style: {
      fontFamily: "Fira Code, monospace",
    },
  };
  const handleToggle = (value) => {
    toggleView((prev) => (prev = value));
  };
  const mergeTagsAndStyles = ({ tags, styles }) => {
    if (!template.text) {
      if (!styles) {
        return tags;
      } else {
        return `<style>${styles}</style>` + tags;
      }
    } else {
      return template.text;
    }
  };
  const handleToggleCopyToggle = () => {
    navigator.clipboard.writeText(mergeTagsAndStyles(template));
    setCopyIsClicked(true);
  };
  useEffect(() => {
    let timeoutCall;
    if (copyIsClicked) {
      timeoutCall = setTimeout(() => {
        setCopyIsClicked(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutCall);
    };
  }, [copyIsClicked]);
  return (
    <div
      className="mb-8 mt-6   relative  "
    >
       <div className="h-12  relative w-full  flex items-center justify-start text-[0.8rem]   gap-0">
        
        {Object.keys(template)
          .reverse()
          .map((item, id) => {
            return (
              <button
                onClick={() => handleToggle(id)}
                key={id}
                className={`h-full px-3 font-inter tracking-tight font-medium relative transition-all duration-300 ease-in-out capitalize ${
                  id === view
                    ? "text-blue-500 "
                    : "hover:text-neutral-400 text-neutral-400/70 "
                } font-[400] `}
                type="button"
              >
                {item}
              
              </button>
            );
          })}
        <button
          onClick={handleToggleCopyToggle}
          type="button"
          className={`bg-blue-500 text-lg transition-all duration-300 ease-in-out flex items-start justify-center absolute -bottom-[3.775rem] -translate-y-1/2 right-2.5  py-2 px-[0.575rem] rounded-[5px] gap-2   ${copyIsClicked?'text-white':'text-gray-50'}`}
        >
          {/* <span className={`text-blue-500 text-sm text-[0.775rem] font-[500]  font-inter  ${!copyIsClicked?'invisible ':'visible'}`}>Copied!</span> */}
          {!copyIsClicked ? (
            <TbClipboard></TbClipboard>
          ) : (
            <TbClipboardCheck></TbClipboardCheck>
          )}
          
        </button>
      </div> 
      <SyntaxHighlighter
        {...(view === 0 ? { language: "html" } : { language: "css" })}
        wrapLongLines
        style={coldarkDark}
        customStyle={customStyle}
        codeTagProps={codeTagProps}
        
      >
        {/* {...(template.text?  (view == 0?template.tags:template.styles):template.text )} */}
        {!template.text
          ? view == 0
            ? template.tags
            : template.styles
          : template.text}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
