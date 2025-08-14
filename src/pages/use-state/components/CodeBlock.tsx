import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'jsx',
  fileName,
  showLineNumbers = true 
}) => {
  const lines = code.trim().split('\n');

  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 shadow-2xl">
      {/* IDE Header */}
      {fileName && (
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono ml-2">{fileName}</span>
          </div>
          <span className="text-gray-500 text-xs">{language.toUpperCase()}</span>
        </div>
      )}
      
      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className="p-4 m-0 text-gray-100 text-sm font-mono">
          {showLineNumbers ? (
            <table className="w-full">
              <tbody>
                {lines.map((line, index) => (
                  <tr key={index} className="hover:bg-gray-800/50 transition-colors">
                    <td className="pr-4 text-gray-600 select-none text-right align-top">
                      {index + 1}
                    </td>
                    <td className="text-gray-100">
                      {line || ' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <code>{code}</code>
          )}
        </pre>
      </div>
    </div>
  );
};