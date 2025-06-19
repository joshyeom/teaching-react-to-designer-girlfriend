import { useState } from "react";
import { CodeBlock, TipsBox } from "~/shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise8Forms({ onComplete, onNext }: ExerciseProps) {
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const correctAnswer = `import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`이름: \${name}\\n이메일: \${email}\\n메시지: \${message}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>이메일:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>메시지:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">전송</button>
    </form>
  );
}`;

  const handleSubmit = () => {
    if (
      userAnswer.includes("useState") &&
      userAnswer.includes("handleSubmit") &&
      userAnswer.includes("e.preventDefault()") &&
      userAnswer.includes("onChange") &&
      userAnswer.includes("value=")
    ) {
      onComplete();
      alert("정답입니다! 🎉 폼 처리를 완벽하게 구현하셨네요!");
    } else {
      alert(
        "다시 한번 시도해보세요! useState, handleSubmit, preventDefault, onChange를 모두 사용해야 해요."
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            8단계
          </span>
          <span className="text-yellow-500">★★★★★★</span>
          <h2 className="text-2xl font-bold">폼 다루기</h2>
        </div>
        <p className="text-gray-600">
          React에서 폼 입력을 처리하고 제출하는 방법을 배워보세요!
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">📝 문제</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">
            <strong>"ContactForm"</strong> 컴포넌트를 만들어주세요.
          </p>
          <p className="mb-2">폼 필드:</p>
          <ul className="list-disc ml-5 mb-2">
            <li>이름 (text input)</li>
            <li>이메일 (email input)</li>
            <li>메시지 (textarea)</li>
          </ul>
          <p className="mb-2">기능:</p>
          <ul className="list-disc ml-5 mb-2">
            <li>각 필드의 상태를 useState로 관리</li>
            <li>폼 제출 시 입력값들을 alert로 표시</li>
            <li>폼 제출 시 페이지 새로고침 방지</li>
          </ul>
          <p className="mb-2">요구사항:</p>
          <ul className="list-disc ml-5">
            <li>controlled components 방식 사용</li>
            <li>onSubmit 이벤트 처리</li>
          </ul>
        </div>
      </div>

      <TipsBox
        title="💡 힌트"
        content={[
          "각 input마다 useState를 하나씩 만드세요",
          "value={state}, onChange={(e) => setState(e.target.value)}",
          "form의 onSubmit에서 e.preventDefault() 호출",
          "alert(`이름: ${name}\\n이메일: ${email}\\n메시지: ${message}`)로 출력",
        ]}
      />

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">
          💻 여기에 코드를 작성해보세요
        </h3>
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm"
          placeholder="import { useState } from 'react';

function ContactForm() {
  // useState들을 선언하세요
  
  // handleSubmit 함수를 만드세요
  
  return (
    <form onSubmit={handleSubmit}>
      {/* 폼 필드들을 만드세요 */}
    </form>
  );
}"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">🧪 테스트해보기</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">이런 폼이 만들어져야 해요:</p>
          <TestForm />
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
                <code>controlled components</code>: React 상태로 입력값을 제어
              </li>
              <li>
                <code>e.preventDefault()</code>: 폼 제출 시 페이지 새로고침 방지
              </li>
              <li>
                <code>onChange</code>: 입력값이 변경될 때마다 상태 업데이트
              </li>
              <li>
                <code>value</code>: 현재 상태값으로 input 값 설정
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// 테스트용 폼 컴포넌트
function TestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`이름: ${name}\n이메일: ${email}\n메시지: ${message}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded border space-y-3"
    >
      <div>
        <label className="block text-sm font-medium mb-1">이름:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">이메일:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">메시지:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded h-20"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        전송
      </button>
    </form>
  );
}
