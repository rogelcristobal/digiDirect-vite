import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Codeblock = ({ template }) => {
  const customStyle = {
    paddingLeft: "1.5rem",
    borderRadius: "5px",
  };
  return (
    <div className="py-4"> 

    <SyntaxHighlighter language="html" style={coldarkDark} customStyle={customStyle}>
    {template.tags}
    </SyntaxHighlighter>
    </div>
    
  );
};

export default Codeblock;
