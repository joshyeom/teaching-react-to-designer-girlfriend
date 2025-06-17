import CodeBlock from "./CodeBlock";

interface CodeExampleProps {
  code: string;
  result: React.ReactNode;
  codeLabel?: string;
  resultLabel?: string;
}

export default function CodeExample({
  code,
  result,
  codeLabel = "React 컴포넌트",
  resultLabel = "결과",
}: CodeExampleProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 my-8">
      <div>
        <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          {codeLabel}
        </div>
        <CodeBlock code={code} />
      </div>
      <div>
        <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          {resultLabel}
        </div>
        <div className="bg-gray-100 p-8 rounded-xl text-center">{result}</div>
      </div>
    </div>
  );
}
