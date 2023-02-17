import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

const Codeblock = () => {
  return (
    <div>
      <Sandpack
        template="react"
        options={{
          showLineNumbers: false, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 280, // default - 300
          editorWidthPercentage: 60, // default - 50
        }}
      />
    </div>
  );
};

export default Codeblock;
