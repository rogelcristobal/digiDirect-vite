import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TbClipboard, TbClipboardCheck } from "react-icons/tb";

const Codeblock = ({ template }) => {
  const [view, toggleView] = useState(0);
  const [copyIsClicked, setCopyIsClicked] = useState(false);
  const customStyle = {
    paddingLeft: "1.5rem",
    paddingTop: "1rem",
    paddingRight: "3rem",
    // paddingBottom:'1.5rem',
    // borderRadius: "10px",
    maxWidth: "45rem",
    minHeight: "3.5rem",
    fontSize: "0.785rem",
    lineHeight: "1.4rem",
    whiteSpace: "pre",
    tabSize: "4",
    border: "none",
    margin: "0",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    // boxShadow: "rgba(0, 0, 0, 0.03) 0px 1px 1px 0px, rgba(27, 31, 35, 0.1) 0px 0px 0px 1px"
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
    <div className="mb-12 mt-8   relative  max-w-[45rem]">
      <div className="h-12   relative w-full  flex items-center pl-2 justify-start text-[0.8rem]  bg-[#fffff] gap-0">
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
      </div>
      <div className="relative">
         <button
          onClick={handleToggleCopyToggle}
          type="button"
          className={`bg-[#29334C] text-lg transition-all duration-300 ease-in-out flex items-start justify-center z-10 absolute top-2  right-2  p-2.5  rounded-md gap-2   ${
            copyIsClicked ? "text-white" : "text-gray-50"
          }`}
        >
          {!copyIsClicked ? (
            <div className="flex items-center justify-center gap-2">
              {/* <span className="text-xs capitalize"> copy</span> */}
              <TbClipboard></TbClipboard>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              {/* <span className="text-xs capitalize"> copied!</span> */}
              <TbClipboardCheck></TbClipboardCheck>
            </div>
          )}
        </button>
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
    </div>
  );
};

export default Codeblock;
