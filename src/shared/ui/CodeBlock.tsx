import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeBlock({
  code,
  language = "jsx",
  showLineNumbers = true,
  className = "",
}: CodeBlockProps) {
  return (
    <div
      className={`my-4 rounded-xl overflow-x-auto border border-slate-700 bg-[#1e1e1e] ${className}`}
    >
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          background: "transparent",
          fontSize: 15,
          padding: 24,
          borderRadius: 12,
        }}
        lineNumberStyle={{ color: "#6b7280", marginRight: 16 }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
