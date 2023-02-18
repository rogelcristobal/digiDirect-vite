import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TbClipboard, TbClipboardCheck } from "react-icons/tb";
const Codeblock = ({ template }) => {
  const [view, toggleView] = useState(0);
  const [copyIsClicked, setCopyIsClicked] = useState(false);
  const customStyle = {
    paddingLeft: "2rem",
    paddingTop: "1rem",
    borderRadius: "0px",
    fontSize: "13px",
    lineHeight: "24px",
    whiteSpace: "pre",
    tabSize: "4",
    border: "none",
    margin: "0",
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
      className="my-8  rounded-lg overflow-hidden relative"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
      <div className="h-12 relative w-full thin-bottom-divider flex items-center justify-start text-[0.8rem] font-[500]  px-4 gap-2">
        {/* togglers */}
        {Object.keys(template)
          .reverse()
          .map((item, id) => {
            return (
              <button
                onClick={() => handleToggle(id)}
                key={id}
                className={`h-full px-3 relative transition-all duration-300 ease-in-out capitalize ${
                  id === view
                    ? "text-blue-500"
                    : "hover:text-slate-900 text-slate-500/70"
                } font-medium`}
                type="button"
              >
                {item}
                <div
                  className={`absolute h-[3px] transition-all duration-300 ease-in-out w-full bg-blue-500 bottom-0 left-0 ${
                    view === id ? "visible" : "hidden"
                  } rounded-md`}
                ></div>
              </button>
            );
          })}
        <button
          onClick={handleToggleCopyToggle}
          type="button"
          className={` text-xl transition-all duration-300 ease-in-out  absolute top-1/2 -translate-y-1/2 right-2  h-full px-3 ${copyIsClicked?'text-blue-500':'text-slate-500/60 hover:text-slate-900'}`}
        >
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
        style={ghcolors}
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
