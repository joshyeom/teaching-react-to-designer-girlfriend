import {
  CheckList as ChecklistItem,
  CodeExample,
  ContentCard,
} from "~/shared/ui";
import PracticeProblems from "./PracticeProblem";

export const Step3Component = () => {
  const code = `// 버튼 컴포넌트 만들기
function Button() {
  return (
    <button className="cool-button">
      Click me! ✨
    </button>
  );
}

// 여러 번 사용하기
<Button />
<Button />
<Button />`;

  const result = (
    <div className="space-y-2">
      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-0.5 transform transition">
        Click me! ✨
      </button>
      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-0.5 transform transition">
        Click me! ✨
      </button>
      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-0.5 transform transition">
        Click me! ✨
      </button>
    </div>
  );

  const problems = [
    {
      title: "나만의 버튼 컴포넌트 만들기",
      description:
        "Hello!라는 텍스트가 보이는 MyButton 컴포넌트를 만들어보세요.",
      starterCode: `// 여기에 MyButton 컴포넌트를 만들어보세요.`,
      hint: "function MyButton() { ... } 형태로 만드세요.",
      solution: `function MyButton() {\n  return <button>Hello!</button>;\n}`,
    },
    {
      title: "컴포넌트 여러 번 사용하기",
      description: "MyButton 컴포넌트를 3번 화면에 보여주세요.",
      starterCode: `function MyButton() {\n  return <button>Hello!</button>;\n}\n\n// 아래에 MyButton을 3번 사용해보세요.`,
      hint: "<MyButton />를 여러 번 사용하세요.",
      solution: `function MyButton() {\n  return <button>Hello!</button>;\n}\n\nexport default function App() {\n  return (\n    <div>\n      <MyButton />\n      <MyButton />\n      <MyButton />\n    </div>\n  );\n}`,
    },
    {
      title: "props로 버튼 색상 바꾸기",
      description:
        'color라는 props로 버튼의 배경색을 바꿔보세요. (예: <ColorButton color="red" />)',
      starterCode: `function ColorButton({ color }) {\n  // 여기에 코드를 작성하세요\n  return <button>색상 버튼</button>;\n}`,
      hint: "style 속성에 color를 적용하세요.",
      solution: `function ColorButton({ color }) {\n  return <button style={{ backgroundColor: color }}>색상 버튼</button>;\n}`,
    },
  ];

  return (
    <ContentCard>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        🧩 컴포넌트: 레고 블록처럼!
      </h2>

      <CodeExample code={code} result={result} />

      <div className="bg-green-50 border-2 border-green-300 p-8 rounded-xl mt-8">
        <h4 className="text-green-800 font-semibold mb-5 text-lg">
          ✅ 실습 체크리스트
        </h4>
        <div className="space-y-3">
          <ChecklistItem id="check1" label="첫 컴포넌트 만들기" />
          <ChecklistItem id="check2" label="CSS 스타일 적용하기" />
          <ChecklistItem id="check3" label="여러 개 복사해서 사용하기" />
        </div>
      </div>
      <PracticeProblems problems={problems} />
    </ContentCard>
  );
};
