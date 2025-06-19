import React, { useState } from "react";
import { CodeBlock, TipsBox } from "../../shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise1BasicComponent({ onComplete, onNext }: ExerciseProps) {
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    problem1: "",
    problem2: "",
    problem3: "",
  });

  const problems = {
    1: {
      title: "문제 1-1: JSX 변환하기 ⭐",
      description: "아래 HTML을 JSX로 변환하세요",
      example: `<div class="card">
  <img src="profile.jpg">
  <p>안녕하세요!</p>
</div>`,
      hint: "class → className, 셀프 클로징 태그는 />로 닫기",
      solution: `<div className="card">
  <img src="profile.jpg" />
  <p>안녕하세요!</p>
</div>`,
      placeholder: `// HTML을 JSX로 변환해보세요
<div className="card">
  
</div>`,
    },
    2: {
      title: "문제 1-2: JavaScript 표현식 사용하기 ⭐⭐",
      description: "변수를 사용해서 동적으로 내용 표시하기",
      example: `const name = "세진";
const job = "디자이너";

// TODO: 이름과 직업을 표시하는 JSX 작성
// 결과: "안녕하세요, 저는 디자이너 세진입니다."`,
      hint: "{}를 사용해서 JavaScript 값을 표시",
      solution: `const name = "세진";
const job = "디자이너";

return (
  <p>안녕하세요, 저는 {job} {name}입니다.</p>
);`,
      placeholder: `const name = "세진";
const job = "디자이너";

return (
  // 여기에 JSX를 작성하세요
  <p></p>
);`,
    },
    3: {
      title: "문제 1-3: 계산된 값 표시하기 ⭐⭐⭐",
      description: "현재 연도와 나이를 계산해서 표시하기",
      example: `const birthYear = 1995;

// TODO: 현재 연도와 나이를 표시하는 JSX 작성`,
      hint: "new Date().getFullYear()로 현재 연도 구하기",
      solution: `const birthYear = 1995;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

return (
  <div>
    <p>현재 연도: {currentYear}</p>
    <p>나이: {age}세</p>
  </div>
);`,
      placeholder: `const birthYear = 1995;

return (
  <div>
    // 현재 연도와 나이를 계산해서 표시하세요
  </div>
);`,
    },
  };

  const handleAnswer = (value: string) => {
    const key = `problem${currentProblem}` as keyof typeof userAnswers;
    setUserAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const checkAnswer = () => {
    const currentAnswer =
      userAnswers[`problem${currentProblem}` as keyof typeof userAnswers];
    const currentSolution =
      problems[currentProblem as keyof typeof problems].solution;

    // 간단한 답안 체크 (실제로는 더 정교한 검증이 필요)
    const isCorrect =
      currentAnswer.includes("className") ||
      currentAnswer.includes("{") ||
      currentAnswer.includes("getFullYear");

    if (isCorrect) {
      alert("정답입니다! 🎉");
      if (currentProblem < 3) {
        setCurrentProblem((prev) => prev + 1);
        setShowSolution(false);
      } else {
        onComplete();
        onNext();
      }
    } else {
      alert("다시 한번 시도해보세요!");
    }
  };

  const currentProb = problems[currentProblem as keyof typeof problems];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Level 1
          </span>
          <span className="text-yellow-500">⭐</span>
          <h2 className="text-2xl font-bold">JSX 기본 문법</h2>
        </div>
        <p className="text-gray-600">
          HTML과 JSX의 차이점을 이해하고 JavaScript 표현식을 사용해보세요!
        </p>
        <div className="mt-4">
          <div className="flex gap-2">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setCurrentProblem(num);
                  setShowSolution(false);
                }}
                className={`px-3 py-1 rounded-full text-sm ${
                  currentProblem === num
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                문제 {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">{currentProb.title}</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="mb-2">{currentProb.description}</p>
          {currentProb.example && (
            <CodeBlock language="jsx" code={currentProb.example} />
          )}
        </div>
      </div>

      <TipsBox title="💡 힌트" content={[currentProb.hint]} />

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">
          💻 여기에 코드를 작성해보세요
        </h3>
        <textarea
          value={
            userAnswers[`problem${currentProblem}` as keyof typeof userAnswers]
          }
          onChange={(e) => handleAnswer(e.target.value)}
          className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm"
          placeholder={currentProb.placeholder}
        />
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={checkAnswer}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          답안 확인
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          {showSolution ? "정답 숨기기" : "정답 보기"}
        </button>
      </div>

      {showSolution && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-3">✅ 정답</h3>
          <CodeBlock language="jsx" code={currentProb.solution} />
        </div>
      )}

      {/* Level 1 체크리스트 */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-bold mb-2">✅ Level 1 완료 체크리스트</h4>
        <ul className="list-disc ml-5 text-sm">
          <li>HTML 속성을 JSX 속성으로 변환할 수 있다</li>
          <li>{`{}`}를 사용해서 변수를 표시할 수 있다</li>
          <li>JSX 안에서 간단한 계산을 할 수 있다</li>
        </ul>
      </div>
    </div>
  );
}
