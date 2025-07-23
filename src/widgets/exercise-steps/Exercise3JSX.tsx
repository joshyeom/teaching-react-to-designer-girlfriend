import React, { useState } from "react";
import { CodeBlock, TipsBox } from "../../shared/ui";
import { HiddenLevelBanner } from "./HiddenLevelBanner";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise3JSX({ onComplete, onNext }: ExerciseProps) {
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    problem1: "",
    problem2: "",
    problem3: "",
  });

  const problems = {
    1: {
      title: "문제 3-1: 인라인 스타일 적용 ⭐",
      description: "스타일이 적용된 박스 컴포넌트 만들기",
      example: `// TODO: StyledBox 컴포넌트 작성
// 스타일:
// - 너비: 200px
// - 높이: 100px  
// - 배경색: #f0f0f0
// - 테두리: 1px solid #ccc
// - 둥근 모서리: 8px`,
      hint: "style={{ width: '200px', height: '100px' }}",
      solution: `function StyledBox() {
  return (
    <div style={{
      width: '200px',
      height: '100px',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      borderRadius: '8px'
    }}>
      스타일이 적용된 박스
    </div>
  );
}`,
      placeholder: `function StyledBox() {
  return (
    <div style={{
      // 여기에 스타일을 작성하세요
    }}>
      스타일이 적용된 박스
    </div>
  );
}`,
    },
    2: {
      title: "문제 3-2: CSS 클래스 사용하기 ⭐⭐",
      description: "CSS 클래스를 사용한 카드 컴포넌트",
      example: `/* CSS 클래스들 */
.card {
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.card-title {
  font-size: 24px;
  font-weight: bold;
}
.card-content {
  color: #666;
}

// TODO: CSS 클래스를 사용하는 Card 컴포넌트 작성`,
      hint: "className을 사용해서 CSS 클래스 적용",
      solution: `function Card() {
  return (
    <div className="card">
      <h3 className="card-title">카드 제목</h3>
      <p className="card-content">카드 내용입니다.</p>
    </div>
  );
}`,
      placeholder: `function Card() {
  return (
    <div className="card">
      {/* 여기에 제목과 내용을 추가하세요 */}
    </div>
  );
}`,
    },
    3: {
      title: "문제 3-3: 호버 효과 버튼 ⭐⭐⭐",
      description: "마우스 올렸을 때 색상이 바뀌는 버튼",
      example: `// TODO: HoverButton 컴포넌트 작성
// 기본: 파란색 배경
// 호버: 진한 파란색 배경
// 트랜지션 효과 추가`,
      hint: "onMouseEnter/Leave 이벤트를 활용하거나 CSS :hover 사용",
      solution: `function HoverButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        backgroundColor: isHovered ? '#1e40af' : '#3b82f6',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      호버 버튼
    </button>
  );
}`,
      placeholder: `function HoverButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        // 여기에 스타일을 작성하세요
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      호버 버튼
    </button>
  );
}`,
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
        currentAnswer.includes("StyledBox") &&
        currentAnswer.includes("style={{") &&
        currentAnswer.includes("width") &&
        currentAnswer.includes("height");
    } else if (currentProblem === 2) {
      isCorrect =
        currentAnswer.includes("Card") &&
        currentAnswer.includes("className") &&
        currentAnswer.includes("card");
    } else if (currentProblem === 3) {
      isCorrect =
        currentAnswer.includes("HoverButton") &&
        (currentAnswer.includes("onMouseEnter") ||
          currentAnswer.includes(":hover")) &&
        currentAnswer.includes("backgroundColor");
    }

    if (isCorrect) {
      alert("정답입니다! 🎉");
      if (currentProblem < 3) {
        setCurrentProblem((prev) => prev + 1);
        setShowSolution(false);
      } else {
        setIsCompleted(true);
        onComplete();
      }
    } else {
      alert("다시 한번 시도해보세요!");
    }
  };

  const currentProb = problems[currentProblem as keyof typeof problems];

  const handleStartHiddenLevel = () => {
    window.location.href = '/hidden-level';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Level 3
          </span>
          <span className="text-yellow-500">⭐</span>
          <h2 className="text-2xl font-bold">스타일 적용하기</h2>
        </div>
        <p className="text-gray-600">
          인라인 스타일과 CSS 클래스를 사용해서 아름다운 컴포넌트를
          만들어보세요!
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
                    ? "bg-purple-500 text-white"
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
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">🎨 결과 예시</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          {currentProblem === 1 && (
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              스타일이 적용된 박스
            </div>
          )}
          {currentProblem === 2 && (
            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "white",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "0 0 10px 0",
                }}
              >
                카드 제목
              </h3>
              <p style={{ color: "#666", margin: 0 }}>카드 내용입니다.</p>
            </div>
          )}
          {currentProblem === 3 && <DemoHoverButton />}
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={checkAnswer}
          className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
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

      {/* Level 3 체크리스트 */}
      <div className="mt-8 p-4 bg-purple-50 rounded-lg">
        <h4 className="font-bold mb-2">✅ Level 3 완료 체크리스트</h4>
        <ul className="list-disc ml-5 text-sm">
          <li>인라인 스타일을 적용할 수 있다</li>
          <li>CSS 클래스를 사용할 수 있다</li>
          <li>기본적인 인터랙션 스타일을 만들 수 있다</li>
        </ul>
      </div>

      {/* Hidden Level 배너 - Level 3 완료 후에만 표시 */}
      {isCompleted && (
        <HiddenLevelBanner onStartHiddenLevel={handleStartHiddenLevel} />
      )}
    </div>
  );
}

// 데모용 호버 버튼 컴포넌트
function DemoHoverButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        backgroundColor: isHovered ? "#1e40af" : "#3b82f6",
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      호버 버튼 (마우스를 올려보세요!)
    </button>
  );
}
