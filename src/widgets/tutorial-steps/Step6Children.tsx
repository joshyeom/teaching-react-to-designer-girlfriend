import PracticeProblems from "./PracticeProblem";
import { CodeBlock, ContentCard } from "~/shared/ui";

export const Step6Children = () => {
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

  const problems = [
    {
      title: "Card 컴포넌트에 내용 담기",
      description: "children을 받아서 감싸는 Card 컴포넌트를 만들어보세요.",
      starterCode: `// Card 컴포넌트를 완성해보세요.\nfunction Card({ children }) {\n  // 여기에 코드를 작성하세요\n}`,
      hint: "children을 div로 감싸서 반환하세요.",
      solution: `function Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}`,
    },
    {
      title: "Card 안에 여러 요소 넣기",
      description:
        "Card 컴포넌트 안에 h3, p, button을 넣어서 화면에 보여보세요.",
      starterCode: `function Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n\n// Card를 사용해서 여러 요소를 넣어보세요.`,
      hint: "<Card> ... </Card> 안에 원하는 요소를 넣으세요.",
      solution: `function Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n\n<Card>\n  <h3>제목</h3>\n  <p>내용</p>\n  <button>버튼</button>\n</Card>`,
    },
    {
      title: "Card에 제목 props 추가하기",
      description:
        "Card에 title이라는 props를 추가해서, 제목은 props로 받고 내용은 children으로 받아보세요.",
      starterCode: `function Card({ title, children }) {\n  // 여기에 코드를 작성하세요\n}`,
      hint: "props로 받은 title을 div 안에 h2 등으로 표시하세요.",
      solution: `function Card({ title, children }) {\n  return (\n    <div className=\"card\">\n      <h2>{title}</h2>\n      {children}\n    </div>\n  );\n}`,
    },
  ];

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
      <PracticeProblems problems={problems} />
    </ContentCard>
  );
};
