import { useState } from "react";
import { CodeBlock, TipsBox } from "~/shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise9Styling({ onComplete, onNext }: ExerciseProps) {
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const correctAnswer = `import { useState } from "react";

function ThemeButton() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const buttonStyle = {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? '#fff' : '#333',
    boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
      borderRadius: '12px',
      textAlign: 'center'
    }}>
      <h3 style={{ color: isDark ? '#fff' : '#333' }}>
        현재 테마: {isDark ? '다크' : '라이트'}
      </h3>
      <button onClick={toggleTheme} style={buttonStyle}>
        {isDark ? '라이트 모드' : '다크 모드'}
      </button>
    </div>
  );
}`;

  const handleSubmit = () => {
    if (
      userAnswer.includes("useState") &&
      userAnswer.includes("isDark") &&
      userAnswer.includes("buttonStyle") &&
      userAnswer.includes("backgroundColor") &&
      userAnswer.includes("?") &&
      userAnswer.includes(":")
    ) {
      onComplete();
      alert("정답입니다! 🎉 동적 스타일링을 완벽하게 구현하셨네요!");
    } else {
      alert(
        "다시 한번 시도해보세요! useState와 조건부 스타일링을 사용해야 해요."
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            9단계
          </span>
          <span className="text-yellow-500">★★★★★★★</span>
          <h2 className="text-2xl font-bold">스타일링 응용</h2>
        </div>
        <p className="text-gray-600">
          상태에 따라 동적으로 스타일이 변경되는 테마 버튼을 만들어보세요!
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">📝 문제</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">
            <strong>"ThemeButton"</strong> 컴포넌트를 만들어주세요.
          </p>
          <p className="mb-2">기능:</p>
          <ul className="list-disc ml-5 mb-2">
            <li>라이트/다크 테마를 토글할 수 있는 버튼</li>
            <li>현재 테마 상태 표시</li>
            <li>테마에 따라 전체 컨테이너와 버튼 스타일 변경</li>
          </ul>
          <p className="mb-2">스타일 요구사항:</p>
          <ul className="list-disc ml-5 mb-2">
            <li>다크 모드: 배경 #1a1a1a, 버튼 #333, 텍스트 #fff</li>
            <li>라이트 모드: 배경 #f5f5f5, 버튼 #fff, 텍스트 #333</li>
            <li>버튼에 transition 효과 추가</li>
            <li>그림자 효과도 테마에 따라 변경</li>
          </ul>
        </div>
      </div>

      <TipsBox
        title="💡 힌트"
        content={[
          "const [isDark, setIsDark] = useState(false); 로 테마 상태 관리",
          "style 객체를 만들어 조건부로 속성 설정",
          "backgroundColor: isDark ? '#333' : '#fff' 형태로 조건부 스타일링",
          "transition: 'all 0.3s ease'로 부드러운 변환 효과",
        ]}
      />

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">
          💻 여기에 코드를 작성해보세요
        </h3>
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full h-80 p-4 border border-gray-300 rounded-lg font-mono text-sm"
          placeholder="import { useState } from 'react';

function ThemeButton() {
  // 테마 상태를 관리하세요
  
  // 테마 토글 함수를 만드세요
  
  // 버튼 스타일 객체를 만드세요
  
  return (
    // 컨테이너와 버튼을 만드세요
  );
}"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">🧪 테스트해보기</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">이런 테마 버튼이 만들어져야 해요:</p>
          <TestThemeButton />
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          답안 제출
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          {showSolution ? "정답 숨기기" : "정답 보기"}
        </button>
        <button
          onClick={onNext}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          다음 문제 →
        </button>
      </div>

      {showSolution && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-3">✅ 정답</h3>
          <CodeBlock language="tsx" code={correctAnswer} />
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-bold mb-2">설명</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>
                <code>동적 스타일링</code>: 상태에 따라 style 객체의 속성을 변경
              </li>
              <li>
                <code>조건부 스타일</code>: 삼항 연산자로 조건에 따른 값 설정
              </li>
              <li>
                <code>transition</code>: CSS 전환 효과로 부드러운 변화
              </li>
              <li>
                <code>인라인 스타일</code>: JavaScript 객체로 스타일 정의
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// 테스트용 테마 버튼 컴포넌트
function TestThemeButton() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const buttonStyle = {
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#333",
    boxShadow: isDark
      ? "0 2px 8px rgba(0,0,0,0.3)"
      : "0 2px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: isDark ? "#1a1a1a" : "#f5f5f5",
        borderRadius: "12px",
        textAlign: "center" as const,
      }}
    >
      <h3 style={{ color: isDark ? "#fff" : "#333", margin: "0 0 16px 0" }}>
        현재 테마: {isDark ? "다크" : "라이트"}
      </h3>
      <button onClick={toggleTheme} style={buttonStyle}>
        {isDark ? "라이트 모드" : "다크 모드"}
      </button>
    </div>
  );
}
