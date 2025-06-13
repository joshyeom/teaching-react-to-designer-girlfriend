interface TipsBoxProps {
  title: string;
  content: React.ReactNode;
}

export default function TipsBox({ title, content }: TipsBoxProps) {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-lg mt-6">
      <h4 className="font-semibold text-yellow-900 mb-2">{title}</h4>
      <div className="text-gray-700">{content}</div>
    </div>
  );
}
