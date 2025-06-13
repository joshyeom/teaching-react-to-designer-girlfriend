import CodeBlock from "./ui/CodeBlock";
import ContentCard from "./ui/ContentCard";

function ChildrenSection() {
  const code = `// Card 컴포넌트 (Frame 역할)
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// 사용할 때 - 안에 뭐든 넣기!
<Card>
  <h3>제목</h3>
  <p>내용</p>
  <button>버튼</button>
</Card>`;

  return (
    <ContentCard>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        🎁 Children: Frame처럼 뭐든 담기!
      </h2>

      <div className="text-center mb-8">
        <div className="inline-block bg-gray-50 p-8 rounded-xl">
          <h4 className="font-semibold mb-5">Figma Frame = React Children</h4>
          <div className="border-2 border-dashed border-indigo-500 p-5 rounded-lg">
            <p className="text-gray-600">
              Frame 안에 뭐든 넣을 수 있듯이
              <br />
              Component 안에 뭐든 넣을 수 있어요!
            </p>
          </div>
        </div>
      </div>

      <CodeBlock code={code} />

      <div className="bg-blue-50 p-6 rounded-xl mt-8">
        <h4 className="text-blue-800 font-semibold mb-4">
          📋 Props vs Children
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2">📦</span>
            <span>
              <strong>Props</strong> = 설정값 (색상, 크기, 텍스트)
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🎁</span>
            <span>
              <strong>Children</strong> = 내용물 (Frame 안의 콘텐츠)
            </span>
          </li>
        </ul>
      </div>
    </ContentCard>
  );
}

export default ChildrenSection;
