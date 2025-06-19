import React, { useState } from "react";
import { CodeBlock, TipsBox } from "../../shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise6Children({ onComplete, onNext }: ExerciseProps) {
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    problem1: "",
    problem2: "",
    problem3: "",
  });

  const problems = {
    1: {
      title: "문제 6-1: 기본 래퍼 컴포넌트 ⭐",
      description: "내용을 감싸는 Container 컴포넌트",
      example: `// TODO: Container 컴포넌트 작성
// 사용 예시:
// <Container>
//   <h1>제목</h1>
//   <p>내용</p>
// </Container>
// 스타일: padding 20px, 테두리 추가`,
      hint: "children props를 받아서 {children}으로 표시",
      solution: `function Container({ children }) {
  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      {children}
    </div>
  );
}`,
      placeholder: `function Container({ children }) {
  return (
    <div style={{
      // 여기에 스타일을 추가하세요
    }}>
      {/* children을 여기에 표시하세요 */}
    </div>
  );
}`,
    },
    2: {
      title: "문제 6-2: 모달 컴포넌트 ⭐⭐",
      description: "제목과 내용을 받는 모달",
      example: `// TODO: Modal 컴포넌트 작성
// Props: title (제목 텍스트)
// children: 모달 내용
// 디자인: 흰 배경, 그림자, 제목은 상단에`,
      hint: "title prop과 children을 모두 사용",
      solution: `function Modal({ title, children }) {
  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      padding: '24px',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h2 style={{
        margin: '0 0 16px 0',
        paddingBottom: '12px',
        borderBottom: '1px solid #eee',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>
        {title}
      </h2>
      <div>
        {children}
      </div>
    </div>
  );
}`,
      placeholder: `function Modal({ title, children }) {
  return (
    <div style={{ /* 모달 스타일 */ }}>
      <h2>{/* 제목 표시 */}</h2>
      <div>
        {/* children 표시 */}
      </div>
    </div>
  );
}`,
    },
    3: {
      title: "문제 6-3: 레이아웃 컴포넌트 ⭐⭐⭐",
      description: "2단 레이아웃 컴포넌트",
      example: `// TODO: TwoColumnLayout 컴포넌트 작성
// Props: leftContent, rightContent
// 좌측 30%, 우측 70% 비율
// 반응형 고려 (모바일에서는 상하 배치)`,
      hint: "display: flex 사용, @media 쿼리로 반응형 구현",
      solution: `function TwoColumnLayout({ leftContent, rightContent }) {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap'
    }}>
      <div style={{
        flex: '0 0 30%',
        minWidth: '250px',
        padding: '16px',
        backgroundColor: '#f3f4f6',
        borderRadius: '8px'
      }}>
        {leftContent}
      </div>
      <div style={{
        flex: '1',
        minWidth: '300px',
        padding: '16px',
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '8px'
      }}>
        {rightContent}
      </div>
    </div>
  );
}`,
      placeholder: `function TwoColumnLayout({ leftContent, rightContent }) {
  return (
    <div style={{
      display: 'flex',
      // 레이아웃 스타일을 추가하세요
    }}>
      <div style={{ /* 좌측 컬럼 스타일 */ }}>
        {/* leftContent 표시 */}
      </div>
      <div style={{ /* 우측 컬럼 스타일 */ }}>
        {/* rightContent 표시 */}
      </div>
    </div>
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
        currentAnswer.includes("Container") &&
        currentAnswer.includes("children") &&
        currentAnswer.includes("{children}");
    } else if (currentProblem === 2) {
      isCorrect =
        currentAnswer.includes("Modal") &&
        currentAnswer.includes("title") &&
        currentAnswer.includes("children") &&
        currentAnswer.includes("{title}") &&
        currentAnswer.includes("{children}");
    } else if (currentProblem === 3) {
      isCorrect =
        currentAnswer.includes("TwoColumnLayout") &&
        currentAnswer.includes("leftContent") &&
        currentAnswer.includes("rightContent") &&
        currentAnswer.includes("flex");
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
          <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Level 6
          </span>
          <span className="text-yellow-500">⭐⭐</span>
          <h2 className="text-2xl font-bold">Children Props 이해</h2>
        </div>
        <p className="text-gray-600">
          children Props를 활용해서 다른 컴포넌트를 감쌀 수 있는 컴포넌트를
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
                    ? "bg-indigo-500 text-white"
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
          className="w-full h-80 p-4 border border-gray-300 rounded-lg font-mono text-sm"
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
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h1 style={{ margin: "0 0 10px 0" }}>제목</h1>
              <p style={{ margin: 0 }}>내용</p>
            </div>
          )}
          {currentProblem === 2 && (
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                padding: "24px",
                maxWidth: "400px",
                margin: "20px auto",
              }}
            >
              <h2
                style={{
                  margin: "0 0 16px 0",
                  paddingBottom: "12px",
                  borderBottom: "1px solid #eee",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                모달 제목
              </h2>
              <div>
                <p>이것은 모달의 내용입니다.</p>
                <button
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    marginTop: "10px",
                  }}
                >
                  확인
                </button>
              </div>
            </div>
          )}
          {currentProblem === 3 && (
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: "0 0 30%",
                  minWidth: "250px",
                  padding: "16px",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ margin: "0 0 10px 0" }}>사이드바</h3>
                <p style={{ margin: 0, fontSize: "14px" }}>좌측 컨텐츠</p>
              </div>
              <div
                style={{
                  flex: "1",
                  minWidth: "300px",
                  padding: "16px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ margin: "0 0 10px 0" }}>메인 컨텐츠</h3>
                <p style={{ margin: 0, fontSize: "14px" }}>
                  우측 컨텐츠 영역입니다.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={checkAnswer}
          className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
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

      {/* Level 6 체크리스트 */}
      <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
        <h4 className="font-bold mb-2">✅ Level 6 완료 체크리스트</h4>
        <ul className="list-disc ml-5 text-sm">
          <li>children Props를 사용할 수 있다</li>
          <li>다른 컴포넌트를 감싸는 컴포넌트를 만들 수 있다</li>
          <li>컴포넌트 합성의 장점을 이해한다</li>
        </ul>
      </div>
    </div>
  );
}
