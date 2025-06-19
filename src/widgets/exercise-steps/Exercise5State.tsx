import React, { useState } from "react";
import { CodeBlock, TipsBox } from "../../shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise5State({ onComplete, onNext }: ExerciseProps) {
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    problem1: "",
    problem2: "",
    problem3: "",
  });

  const problems = {
    1: {
      title: "문제 5-1: 토글 가능한 알림 ⭐",
      description: "보이기/숨기기가 가능한 알림 컴포넌트",
      example: `// TODO: Alert 컴포넌트 작성
// Props: isVisible (boolean), message (string)
// isVisible이 true일 때만 메시지 표시`,
      hint: "조건부 렌더링: {isVisible && <div>{message}</div>}",
      solution: `function Alert({ isVisible, message }) {
  if (!isVisible) return null;
  
  return (
    <div style={{
      padding: '12px 16px',
      backgroundColor: '#dbeafe',
      border: '1px solid #3b82f6',
      borderRadius: '6px',
      color: '#1e40af'
    }}>
      {message}
    </div>
  );
}`,
      placeholder: `function Alert({ isVisible, message }) {
  // isVisible이 false면 null을 반환하거나
  // 조건부 렌더링을 사용하세요
  
  return (
    // 알림 UI를 만드세요
  );
}`,
    },
    2: {
      title: "문제 5-2: 진행률 표시 바 ⭐⭐",
      description: "퍼센트를 받아서 진행률을 표시",
      example: `// TODO: ProgressBar 컴포넌트 작성
// Props: percent (number, 0-100)
// 시각적으로 진행률 표시 (너비로 표현)`,
      hint: "style={{ width: `${percent}%` }}",
      solution: `function ProgressBar({ percent }) {
  return (
    <div style={{
      width: '100%',
      height: '20px',
      backgroundColor: '#e5e7eb',
      borderRadius: '10px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: \`\${percent}%\`,
        height: '100%',
        backgroundColor: '#3b82f6',
        borderRadius: '10px',
        transition: 'width 0.3s ease'
      }} />
      <div style={{ textAlign: 'center', marginTop: '5px' }}>
        {percent}%
      </div>
    </div>
  );
}`,
      placeholder: `function ProgressBar({ percent }) {
  return (
    <div style={{ /* 전체 바 스타일 */ }}>
      <div style={{
        width: /* 여기에 percent를 사용하세요 */
      }} />
    </div>
  );
}`,
    },
    3: {
      title: "문제 5-3: 제품 가격 카드 ⭐⭐⭐",
      description: "제품 정보 객체를 받아서 표시",
      example: `// TODO: ProductCard 컴포넌트 작성
// Props: product (객체)
// product = {
//   name: "디자인 시스템 템플릿",
//   price: 49000,
//   discount: 20,
//   isNew: true
// }
// 할인가 계산해서 표시, NEW 뱃지 조건부 표시`,
      hint: "할인가 = price * (100 - discount) / 100, 조건부로 NEW 뱃지 표시",
      solution: `function ProductCard({ product }) {
  const discountedPrice = product.price * (100 - product.discount) / 100;
  
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h3>{product.name}</h3>
        {product.isNew && (
          <span style={{
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '12px'
          }}>
            NEW
          </span>
        )}
      </div>
      <div style={{ marginTop: '10px' }}>
        <span style={{
          textDecoration: 'line-through',
          color: '#666',
          marginRight: '10px'
        }}>
          {product.price.toLocaleString()}원
        </span>
        <span style={{ fontWeight: 'bold', color: '#ef4444' }}>
          {discountedPrice.toLocaleString()}원
        </span>
        <span style={{ color: '#ef4444', marginLeft: '5px' }}>
          ({product.discount}% 할인)
        </span>
      </div>
    </div>
  );
}`,
      placeholder: `function ProductCard({ product }) {
  // 할인가를 계산하세요
  const discountedPrice = /* 계산 로직 */;
  
  return (
    <div style={{ /* 카드 스타일 */ }}>
      {/* 제품명과 NEW 뱃지 */}
      {/* 가격 정보 */}
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
        currentAnswer.includes("Alert") &&
        currentAnswer.includes("isVisible") &&
        currentAnswer.includes("message") &&
        (currentAnswer.includes("&&") || currentAnswer.includes("if"));
    } else if (currentProblem === 2) {
      isCorrect =
        currentAnswer.includes("ProgressBar") &&
        currentAnswer.includes("percent") &&
        currentAnswer.includes("width") &&
        currentAnswer.includes("%");
    } else if (currentProblem === 3) {
      isCorrect =
        currentAnswer.includes("ProductCard") &&
        currentAnswer.includes("product") &&
        currentAnswer.includes("discount") &&
        currentAnswer.includes("isNew");
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
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Level 5
          </span>
          <span className="text-yellow-500">⭐⭐</span>
          <h2 className="text-2xl font-bold">Props 심화 (다양한 타입)</h2>
        </div>
        <p className="text-gray-600">
          불리언, 숫자, 객체 등 다양한 타입의 Props를 활용해보세요!
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
                    ? "bg-red-500 text-white"
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
            <div className="space-y-4">
              <div
                style={{
                  padding: "12px 16px",
                  backgroundColor: "#dbeafe",
                  border: "1px solid #3b82f6",
                  borderRadius: "6px",
                  color: "#1e40af",
                }}
              >
                이것은 표시되는 알림입니다!
              </div>
              <p className="text-sm text-gray-600">isVisible=true일 때</p>
            </div>
          )}
          {currentProblem === 2 && (
            <div className="space-y-4">
              <DemoProgressBar percent={75} />
              <DemoProgressBar percent={30} />
            </div>
          )}
          {currentProblem === 3 && <DemoProductCard />}
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={checkAnswer}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
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

      {/* Level 5 체크리스트 */}
      <div className="mt-8 p-4 bg-red-50 rounded-lg">
        <h4 className="font-bold mb-2">✅ Level 5 완료 체크리스트</h4>
        <ul className="list-disc ml-5 text-sm">
          <li>다양한 타입의 Props를 사용할 수 있다</li>
          <li>조건에 따라 UI를 다르게 표시할 수 있다</li>
          <li>객체 Props를 활용할 수 있다</li>
        </ul>
      </div>
    </div>
  );
}

// 데모 컴포넌트들
function DemoProgressBar({ percent }: { percent: number }) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: "#3b82f6",
            borderRadius: "10px",
            transition: "width 0.3s ease",
          }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "5px", fontSize: "14px" }}>
        {percent}%
      </div>
    </div>
  );
}

function DemoProductCard() {
  const product = {
    name: "디자인 시스템 템플릿",
    price: 49000,
    discount: 20,
    isNew: true,
  };

  const discountedPrice = (product.price * (100 - product.discount)) / 100;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "300px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h3 style={{ margin: 0 }}>{product.name}</h3>
        {product.isNew && (
          <span
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            NEW
          </span>
        )}
      </div>
      <div style={{ marginTop: "10px" }}>
        <span
          style={{
            textDecoration: "line-through",
            color: "#666",
            marginRight: "10px",
          }}
        >
          {product.price.toLocaleString()}원
        </span>
        <span style={{ fontWeight: "bold", color: "#ef4444" }}>
          {discountedPrice.toLocaleString()}원
        </span>
        <span style={{ color: "#ef4444", marginLeft: "5px" }}>
          ({product.discount}% 할인)
        </span>
      </div>
    </div>
  );
}
