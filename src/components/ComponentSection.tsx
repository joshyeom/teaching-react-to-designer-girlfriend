import ChecklistItem from "./ui/CheckList";
import CodeExample from "./ui/CodeExample";
import ContentCard from "./ui/ContentCard";

function ComponentSection() {
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
    </ContentCard>
  );
}

export default ComponentSection;
