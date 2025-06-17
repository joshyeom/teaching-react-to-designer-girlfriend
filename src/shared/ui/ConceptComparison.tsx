interface ConceptComparisonProps {
  leftTitle: string;
  leftContent: string;
  rightTitle: string;
  rightContent: string;
  arrow?: string;
}

export default function ConceptComparison({
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
  arrow = "➡️",
}: ConceptComparisonProps) {
  return (
    <div className="grid grid-cols-3 gap-10 items-center my-8">
      <div className="bg-gray-50 p-8 rounded-xl text-center">
        <h4 className="font-semibold mb-4">{leftTitle}</h4>
        <p className="whitespace-pre-line">{leftContent}</p>
      </div>
      <div className="text-5xl text-indigo-500 text-center">{arrow}</div>
      <div className="bg-gray-50 p-8 rounded-xl text-center">
        <h4 className="font-semibold mb-4">{rightTitle}</h4>
        <p className="whitespace-pre-line">{rightContent}</p>
      </div>
    </div>
  );
}
