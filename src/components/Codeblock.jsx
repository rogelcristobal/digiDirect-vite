import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Codeblock = ({ template }) => {
  const customStyle = {
    paddingLeft: "1.5rem",
    borderRadius: "10px",
    fontSize: "0.850rem",
    fontWeight:"400",
    lineHeight: "24px",
    whiteSpace:"pre",
    tabSize:"4"
  };
  return (
    <div className="py-6">
      <SyntaxHighlighter
        language="html"
        wrapLongLines
        style={coldarkDark}
        customStyle={customStyle}
        
      >
        {template.tags}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
