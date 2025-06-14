import PracticeProblems from "./PracticeProblem";
import CodeBlock from "./ui/CodeBlock";
import ContentCard from "./ui/ContentCard";
import TipsBox from "./ui/TipsBox";

function EventSection() {
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
    </ContentCard>
  );
}

export default EventSection;
