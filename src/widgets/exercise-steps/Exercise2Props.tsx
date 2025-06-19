import React, { useState } from "react";
import { CodeBlock, TipsBox } from "../../shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise2Props({ onComplete, onNext }: ExerciseProps) {
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    problem1: "",
    problem2: "",
    problem3: "",
  });

  const problems = {
    1: {
      title: "문제 2-1: 첫 번째 컴포넌트 ⭐",
      description: '"Welcome" 메시지를 표시하는 컴포넌트 만들기',
      example: `// TODO: WelcomeMessage 컴포넌트 작성
// 표시할 내용: "React에 오신 것을 환영합니다!"`,
      hint: "컴포넌트 이름은 대문자로 시작, function 또는 화살표 함수 사용",
      solution: `function WelcomeMessage() {
  return <h1>React에 오신 것을 환영합니다!</h1>;
}`,
      placeholder: `function WelcomeMessage() {
  // 여기에 JSX를 작성하세요
}`,
    },
    2: {
      title: "문제 2-2: 프로필 카드 컴포넌트 ⭐⭐",
      description: "이름, 직업, 소개를 표시하는 프로필 카드 만들기",
      example: `// TODO: ProfileCard 컴포넌트 작성
// 표시할 내용:
// - 이름: 김세진
// - 직업: UI/UX 디자이너  
// - 소개: Figma를 사랑하는 디자이너입니다`,
      hint: "div로 감싸고 각 정보를 p 태그로 표시",
      solution: `function ProfileCard() {
  return (
    <div>
      <p>이름: 김세진</p>
      <p>직업: UI/UX 디자이너</p>
      <p>소개: Figma를 사랑하는 디자이너입니다</p>
    </div>
  );
}`,
      placeholder: `function ProfileCard() {
  return (
    <div>
      // 프로필 정보를 p 태그로 작성하세요
    </div>
  );
}`,
    },
    3: {
      title: "문제 2-3: 버튼 컴포넌트 ⭐⭐⭐",
      description: "3가지 스타일의 버튼 컴포넌트 만들기",
      example: `// TODO: 3개의 버튼 컴포넌트 작성
// 1. PrimaryButton - 배경색: 파란색, 글자색: 흰색
// 2. SecondaryButton - 배경색: 회색, 글자색: 검정색
// 3. DangerButton - 배경색: 빨간색, 글자색: 흰색`,
      hint: "인라인 스타일 사용 style={{ backgroundColor: 'blue' }}",
      solution: `function PrimaryButton() {
  return (
    <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>
      Primary
    </button>
  );
}

function SecondaryButton() {
  return (
    <button style={{ backgroundColor: 'gray', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>
      Secondary
    </button>
  );
}

function DangerButton() {
  return (
    <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>
      Danger
    </button>
  );
}`,
      placeholder: `function PrimaryButton() {
  return (
    <button style={{ backgroundColor: 'blue', color: 'white' }}>
      Primary
    </button>
  );
}

// SecondaryButton과 DangerButton도 작성해보세요`,
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

    let isCorrect = false;

    if (currentProblem === 1) {
      isCorrect =
        currentAnswer.includes("WelcomeMessage") &&
        currentAnswer.includes("React에 오신 것을 환영합니다");
    } else if (currentProblem === 2) {
      isCorrect =
        currentAnswer.includes("ProfileCard") &&
        currentAnswer.includes("김세진") &&
        currentAnswer.includes("디자이너");
    } else if (currentProblem === 3) {
      isCorrect =
        currentAnswer.includes("PrimaryButton") &&
        currentAnswer.includes("SecondaryButton") &&
        currentAnswer.includes("DangerButton") &&
        currentAnswer.includes("backgroundColor");
    }

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
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Level 2
          </span>
          <span className="text-yellow-500">⭐</span>
          <h2 className="text-2xl font-bold">정적 컴포넌트 만들기</h2>
        </div>
        <p className="text-gray-600">
          함수 컴포넌트 작성법을 익히고 재사용 가능한 컴포넌트를 만들어보세요!
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
                    ? "bg-green-500 text-white"
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

      {/* 데모 섹션 */}
      {currentProblem === 3 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">🎨 결과 예시</h3>
          <div className="bg-gray-50 p-4 rounded-lg flex gap-4">
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Primary
            </button>
            <button
              style={{
                backgroundColor: "gray",
                color: "black",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Secondary
            </button>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Danger
            </button>
          </div>
        </div>
      )}

      <div className="flex gap-4 mb-6">
        <button
          onClick={checkAnswer}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
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

      {/* Level 2 체크리스트 */}
      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <h4 className="font-bold mb-2">✅ Level 2 완료 체크리스트</h4>
        <ul className="list-disc ml-5 text-sm">
          <li>함수 컴포넌트를 만들 수 있다</li>
          <li>컴포넌트 이름 규칙을 안다</li>
          <li>여러 개의 컴포넌트를 만들 수 있다</li>
        </ul>
      </div>
    </div>
  );
}
