interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  // Simple syntax highlighting
  const highlightedCode = code
    .replace(/\/\/.*/g, '<span class="text-gray-500 italic">$&</span>')
    .replace(
      /(function|return|const|let|var)/g,
      '<span class="text-purple-400">$1</span>'
    )
    .replace(/(".*?"|'.*?')/g, '<span class="text-green-400">$1</span>')
    .replace(
      /(className|onClick|text|variant|children)/g,
      '<span class="text-yellow-400">$1</span>'
    );

  return (
    <div className="bg-slate-800 text-gray-200 p-6 rounded-xl overflow-x-auto font-mono text-sm leading-relaxed">
      <pre dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </div>
  );
}
