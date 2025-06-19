import { useState } from "react";
import { CodeBlock, TipsBox } from "~/shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise7Lists({ onComplete, onNext }: ExerciseProps) {
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const correctAnswer = `function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}`;

  const handleSubmit = () => {
    if (
      userAnswer.includes("map") &&
      userAnswer.includes("key") &&
      userAnswer.includes("todo.completed") &&
      userAnswer.includes("textDecoration")
    ) {
      onComplete();
      alert("정답입니다! 🎉 리스트 렌더링을 완벽하게 구현하셨네요!");
    } else {
      alert(
        "다시 한번 시도해보세요! map과 key, 조건부 스타일링을 모두 사용해야 해요."
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            7단계
          </span>
          <span className="text-yellow-500">★★★★★</span>
          <h2 className="text-2xl font-bold">리스트 렌더링</h2>
        </div>
        <p className="text-gray-600">
          배열을 map으로 순회하며 동적으로 리스트를 렌더링해보세요!
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">📝 문제</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">
            <strong>"TodoList"</strong> 컴포넌트를 만들어주세요.
          </p>
          <p className="mb-2">
            Props: <code>todos</code> (객체 배열)
          </p>
          <p className="mb-2">각 todo 객체 구조:</p>
          <ul className="list-disc ml-5 mb-2">
            <li>
              <code>id</code>: 고유 번호
            </li>
            <li>
              <code>text</code>: 할 일 내용
            </li>
            <li>
              <code>completed</code>: 완료 여부 (true/false)
            </li>
          </ul>
          <p className="mb-2">기능:</p>
          <ul className="list-disc ml-5">
            <li>todos 배열을 순회하며 각각을 li 태그로 렌더링</li>
            <li>완료된 항목은 취소선 적용</li>
            <li>각 li에 key prop 추가</li>
          </ul>
        </div>
      </div>

      <TipsBox
        title="💡 힌트"
        content={[
          "todos.map((todo) => (...))로 배열을 순회하세요",
          "key={todo.id}를 각 li에 추가하세요",
          "textDecoration: todo.completed ? 'line-through' : 'none'",
          "style 속성에 객체를 전달하세요: style={{ ... }}",
        ]}
      />

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">
          💻 여기에 코드를 작성해보세요
        </h3>
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full h-48 p-4 border border-gray-300 rounded-lg font-mono text-sm"
          placeholder="function TodoList({ todos }) {
  return (
    <ul>
      {/* todos 배열을 map으로 순회하세요 */}
    </ul>
  );
}"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">🎯 사용 예시</h3>
        <CodeBlock
          language="tsx"
          code={`const todos = [
  { id: 1, text: "React 공부하기", completed: false },
  { id: 2, text: "운동하기", completed: true },
  { id: 3, text: "책 읽기", completed: false }
];

<TodoList todos={todos} />`}
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">🧪 테스트해보기</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">이런 모습으로 나와야 해요:</p>
          <ul className="bg-white p-3 rounded border">
            <li>React 공부하기</li>
            <li style={{ textDecoration: "line-through" }}>운동하기</li>
            <li>책 읽기</li>
          </ul>
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
                <code>todos.map()</code>: 배열의 각 요소를 순회하며 JSX 반환
              </li>
              <li>
                <code>key=&#123;todo.id&#125;</code>: React가 리스트 항목을
                효율적으로 관리하기 위해 필요
              </li>
              <li>
                <code>todo.completed ? 'line-through' : 'none'</code>: 조건부
                스타일링
              </li>
              <li>
                <code>style=&#123;&#123;...&#125;&#125;</code>: 인라인 스타일을
                객체로 전달
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
