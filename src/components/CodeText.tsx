import SyntaxHighlighter from "react-syntax-highlighter";

import "../app/highlight.css";

export default function CodeText({ code, showLineNumbers }: { code: string; showLineNumbers?: boolean }) {
  return (
    //style={atomOneDark}
    <div className="overflow-scroll">
      <SyntaxHighlighter
        customStyle={{
          backgroundColor: "#262626",
        }}
        language="typescript"
        useInlineStyles={false}
        showLineNumbers={showLineNumbers}
        startingLineNumber={25}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
