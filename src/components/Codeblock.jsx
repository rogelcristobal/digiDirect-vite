import React ,{useState}from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";

const Codeblock = ({ template }) => {
  const [view,toggleView] = useState(0)
  const customStyle = {
    paddingLeft: "2rem",
    paddingTop: "1rem",
    borderRadius: "10px",
    fontSize: "13px",
    // fontWeight:"400",
    lineHeight: "24px",
    whiteSpace: "pre",
    tabSize: "4",
    // boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    border: "none",
    margin: "0",
  };
  const codeTagProps = {
    style: {
      fontFamily: "Fira Code, monospace",
    },
  };
  const handleToggle=(value)=>{
    toggleView(prev=>prev=value)
  }
  return (
    <div
      className="my-6 rounded-lg overflow-hidden"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
      <div className="h-12 w-full thin-bottom-divider flex items-center justify-start text-[0.8rem] font-[500]  px-4 gap-2">
        {Object.keys(template)
          .reverse()
          .map((item, id) => {
            
            return (
              <button
                onClick={()=>handleToggle(id)}
                key={id}
                className={`h-full px-3 relative capitalize ${id===view?'text-blue-500':'hover:text-slate-900 text-slate-500/70'} font-medium`}
                type="button"
              >
                {item}
               <div className={`absolute h-[3px] w-full bg-blue-500 bottom-0 left-0 ${view===id?'visible':'hidden'} rounded-md`}></div>
              </button>
            );
          })}
      </div>
      <SyntaxHighlighter
        {...(view===0? {language:'html'}: {language:'css'})}
        wrapLongLines
        style={ghcolors}
        customStyle={customStyle}
        codeTagProps={codeTagProps}
      >
         {/* {...(template.text?  (view == 0?template.tags:template.styles):template.text )} */}
         {!template.text?(view == 0?template.tags:template.styles):template.text}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
