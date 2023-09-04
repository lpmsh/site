import SyntaxHighlighter from "react-syntax-highlighter";

import "../app/highlight.css"

export default function CodeText({ code }: { code: string }) {
    return (
        //style={atomOneDark}
        <SyntaxHighlighter language="typescript" useInlineStyles={false} showLineNumbers startingLineNumber={25}>
            {code}
        </SyntaxHighlighter>
    );
}
