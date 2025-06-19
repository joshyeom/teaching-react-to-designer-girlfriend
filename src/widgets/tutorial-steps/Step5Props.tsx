import {
  CodeExample,
  ConceptComparison,
  ContentCard,
  TipsBox,
} from "~/shared/ui";
import PracticeProblems from "./PracticeProblem";

export const Step5Props = () => {
  const code = `<Button 
  text="저장하기" 
  variant="primary" 
/>
<Button 
  text="취소하기" 
  variant="secondary" 
/>
<Button 
  text="삭제하기" 
  variant="danger" 
/>`;

  const result = (
    <div className="space-y-2">
      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold">
        저장하기
      </button>
      <button className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-semibold">
        취소하기
      </button>
      <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold">
        삭제하기
      </button>
    </div>
  );

  const problems = [
    {
      title: "props로 버튼 텍스트 바꾸기",
      description: "text라는 props로 버튼의 텍스트를 바꿔보세요.",
      starterCode: `function Button({ text }) {\n  return <button>여기에 텍스트</button>;\n}\n\n// <Button text=\"저장하기\" />를 사용하면 버튼에 \"저장하기\"가 보여야 해요.`,
      hint: "text를 {text}로 사용하세요.",
      solution: `function Button({ text }) {\n  return <button>{text}</button>;\n}`,
    },
    {
      title: "props로 버튼 색상 바꾸기",
      description: "color라는 props로 버튼의 배경색을 바꿔보세요.",
      starterCode: `function Button({ text, color }) {\n  return <button>{text}</button>;\n}\n\n// <Button text=\"빨강\" color=\"red\" /> 처럼 사용해보세요.`,
      hint: "style 속성에 color를 적용하세요.",
      solution: `function Button({ text, color }) {\n  return <button style={{ backgroundColor: color }}>{text}</button>;\n}`,
    },
    {
      title: "props로 다양한 버튼 만들기",
      description: "text, color, size props로 다양한 버튼을 만들어보세요.",
      starterCode: `function Button({ text, color, size }) {\n  // 여기에 코드를 작성하세요\n  return <button>{text}</button>;\n}\n\n// <Button text=\"큰 파랑\" color=\"blue\" size=\"24px\" /> 처럼 사용해보세요.`,
      hint: "style에 color와 fontSize를 적용하세요.",
      solution: `function Button({ text, color, size }) {\n  return <button style={{ backgroundColor: color, fontSize: size }}>{text}</button>;\n}`,
    },
  ];

  return (
    <ContentCard>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        📦 Props: 택배 상자처럼 정보 전달!
      </h2>

      <ConceptComparison
        leftTitle="🎨 Figma Properties"
        leftContent='Text: "저장하기"\nVariant: Primary\nSize: Large'
        rightTitle="⚛️ React Props"
        rightContent='text="저장하기"\nvariant="primary"\nsize="large"'
        arrow="="
      />

      <CodeExample code={code} result={result} codeLabel="Props 전달하기" />

      <TipsBox
        title="💡 Props = Properties = 속성"
        content="부모가 자식에게 정보를 전달하는 방법이에요. Figma의 Component Properties와 똑같은 개념!"
      />
      <PracticeProblems problems={problems} />
    </ContentCard>
  );
};
