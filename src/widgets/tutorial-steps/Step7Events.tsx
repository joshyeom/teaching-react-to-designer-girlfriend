import PracticeProblems from "./PracticeProblem";
import { CodeBlock, ContentCard, TipsBox } from "~/shared/ui";

export const Step7Events = () => {
  const code = `function Button({ text, onClick }) {
  return (
    <button 
      className="cool-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// 사용할 때
<Button 
  text="클릭해봐!" 
  onClick={() => alert('안녕! 👋')}
/>`;

  const handleClick = () => {
    alert("안녕! 👋");
  };

  const problems = [
    {
      title: "버튼 클릭하면 인사하기",
      description: '버튼을 클릭하면 "안녕!"이라는 알림이 뜨게 만들어보세요.',
      starterCode: `function HelloButton() {\n  return (\n    <button>인사하기</button>\n  );\n}`,
      hint: "onClick 속성에 함수를 넣으세요.",
      solution: `function HelloButton() {\n  return (\n    <button onClick={() => alert(\"안녕!\")}>인사하기</button>\n  );\n}`,
    },
    {
      title: "버튼 클릭하면 다른 알림 띄우기",
      description: '버튼을 클릭하면 "반가워!"라는 알림이 뜨게 만들어보세요.',
      starterCode: `function GreetButton() {\n  return (\n    <button>반가워 버튼</button>\n  );\n}`,
      hint: "onClick 속성에 함수를 넣으세요.",
      solution: `function GreetButton() {\n  return (\n    <button onClick={() => alert(\"반가워!\")}>반가워 버튼</button>\n  );\n}`,
    },
    {
      title: "버튼에 마우스 올리면 알림 띄우기",
      description:
        '버튼에 마우스를 올리면 "호버!"라는 알림이 뜨게 만들어보세요.',
      starterCode: `function HoverAlertButton() {\n  return (\n    <button>호버 버튼</button>\n  );\n}`,
      hint: "onMouseOver 속성에 함수를 넣으세요.",
      solution: `function HoverAlertButton() {\n  return (\n    <button onMouseOver={() => alert(\"호버!\")}>호버 버튼</button>\n  );\n}`,
    },
  ];

  return (
    <ContentCard>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        🎉 보너스: 클릭하면 뭔가 일어나게!
      </h2>

      <CodeBlock code={code} />

      <div className="bg-gray-100 p-8 rounded-xl text-center my-8">
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-0.5 transform transition"
        >
          클릭해봐!
        </button>
      </div>

      <TipsBox
        title="💡 onClick 이벤트"
        content={
          <>
            <p>
              버튼을 클릭했을 때 뭔가 일어나게 하고 싶다면? onClick을
              사용하세요!
            </p>
            <p className="mt-2">
              다음 시간에는 클릭할 때마다 색이 바뀌는 버튼도 만들어볼 거예요!
            </p>
          </>
        }
      />

      <PracticeProblems problems={problems} />
    </ContentCard>
  );
};
