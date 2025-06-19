import React, { useState } from "react";
import { CodeBlock, TipsBox } from "../../shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise4Events({ onComplete, onNext }: ExerciseProps) {
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    problem1: "",
    problem2: "",
    problem3: "",
  });

  const problems = {
    1: {
      title: "문제 4-1: 인사말 컴포넌트 ⭐",
      description: "이름을 받아서 인사하는 컴포넌트",
      example: `// TODO: Greeting 컴포넌트 작성
// 사용 예시:
// <Greeting name="세진" />
// 출력: "안녕하세요, 세진님!"`,
      hint: "function Greeting({ name }) { ... }",
      solution: `function Greeting({ name }) {
  return <p>안녕하세요, {name}님!</p>;
}`,
      placeholder: `function Greeting({ name }) {
  return (
    // 여기에 JSX를 작성하세요
  );
}`,
    },
    2: {
      title: "문제 4-2: 제목과 부제목 컴포넌트 ⭐⭐",
      description: "제목과 부제목을 받는 헤더 컴포넌트",
      example: `// TODO: Header 컴포넌트 작성
// 사용 예시:
// <Header 
//   title="React 학습하기" 
//   subtitle="디자이너를 위한 React 입문"
// />`,
      hint: "두 개의 props를 받아서 각각 h1, h2 태그로 표시",
      solution: `function Header({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}`,
      placeholder: `function Header({ title, subtitle }) {
  return (
    <div>
      {/* 제목과 부제목을 표시하세요 */}
    </div>
  );
}`,
    },
    3: {
      title: "문제 4-3: 사용자 정보 카드 ⭐⭐⭐",
      description: "여러 정보를 받아서 표시하는 카드",
      example: `// TODO: UserCard 컴포넌트 작성
// Props: name, role, team, email
// 디자인: 카드 형태로 깔끔하게 정리
// 도전 과제: 이메일은 링크로 만들기 (mailto:)`,
      hint: "여러 props를 받아서 구조화된 UI로 표시, <a href={`mailto:${email}`}",
      solution: `function UserCard({ name, role, team, email }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{name}</h3>
      <p><strong>역할:</strong> {role}</p>
      <p><strong>팀:</strong> {team}</p>
      <p><strong>이메일:</strong> <a href={\`mailto:\${email}\`}>{email}</a></p>
    </div>
  );
}`,
      placeholder: `function UserCard({ name, role, team, email }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px'
    }}>
      {/* 사용자 정보를 표시하세요 */}
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
        currentAnswer.includes("Greeting") &&
        currentAnswer.includes("{ name }") &&
        currentAnswer.includes("{name}");
    } else if (currentProblem === 2) {
      isCorrect =
        currentAnswer.includes("Header") &&
        currentAnswer.includes("title") &&
        currentAnswer.includes("subtitle") &&
        currentAnswer.includes("{title}") &&
        currentAnswer.includes("{subtitle}");
    } else if (currentProblem === 3) {
      isCorrect =
        currentAnswer.includes("UserCard") &&
        currentAnswer.includes("name") &&
        currentAnswer.includes("role") &&
        currentAnswer.includes("team") &&
        currentAnswer.includes("email");
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
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Level 4
          </span>
          <span className="text-yellow-500">⭐</span>
          <h2 className="text-2xl font-bold">Props 기초 (텍스트 전달)</h2>
        </div>
        <p className="text-gray-600">
          Props로 텍스트 데이터를 전달받는 재사용 가능한 컴포넌트를
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
                    ? "bg-orange-500 text-white"
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
          {currentProblem === 1 && <p>안녕하세요, 세진님!</p>}
          {currentProblem === 2 && (
            <div>
              <h1 style={{ margin: "0 0 10px 0" }}>React 학습하기</h1>
              <h2 style={{ margin: 0, color: "#666" }}>
                디자이너를 위한 React 입문
              </h2>
            </div>
          )}
          {currentProblem === 3 && (
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                maxWidth: "300px",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0" }}>김세진</h3>
              <p style={{ margin: "5px 0" }}>
                <strong>역할:</strong> UI/UX 디자이너
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>팀:</strong> Design Team
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>이메일:</strong>{" "}
                <a href="mailto:sejin@company.com">sejin@company.com</a>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={checkAnswer}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
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

      {/* Level 4 체크리스트 */}
      <div className="mt-8 p-4 bg-orange-50 rounded-lg">
        <h4 className="font-bold mb-2">✅ Level 4 완료 체크리스트</h4>
        <ul className="list-disc ml-5 text-sm">
          <li>Props로 데이터를 전달할 수 있다</li>
          <li>여러 개의 Props를 사용할 수 있다</li>
          <li>Props를 활용해 재사용 가능한 컴포넌트를 만들 수 있다</li>
        </ul>
      </div>
    </div>
  );
}
