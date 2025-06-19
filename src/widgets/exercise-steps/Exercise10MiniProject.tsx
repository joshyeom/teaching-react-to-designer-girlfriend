import React, { useState } from "react";
import { TipsBox, CodeBlock } from "../../shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function Exercise10MiniProject({ onComplete, onNext }: ExerciseProps) {
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const correctAnswer =
    "import { useState } from 'react';\n\nfunction ShoppingCart() {\n  const [items, setItems] = useState([\n    { id: 1, name: '사과', price: 1000, quantity: 0 },\n    { id: 2, name: '바나나', price: 1500, quantity: 0 },\n    { id: 3, name: '오렌지', price: 2000, quantity: 0 }\n  ]);\n\n  const addItem = (id) => {\n    setItems(items.map(item => \n      item.id === id \n        ? { ...item, quantity: item.quantity + 1 }\n        : item\n    ));\n  };\n\n  const removeItem = (id) => {\n    setItems(items.map(item => \n      item.id === id && item.quantity > 0\n        ? { ...item, quantity: item.quantity - 1 }\n        : item\n    ));\n  };\n\n  const getTotalPrice = () => {\n    return items.reduce((total, item) => total + (item.price * item.quantity), 0);\n  };\n\n  return (\n    <div>\n      <h2>쇼핑 카트</h2>\n      {items.map(item => (\n        <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>\n          <h3>{item.name} - {item.price}원</h3>\n          <p>수량: {item.quantity}</p>\n          <button onClick={() => addItem(item.id)}>+</button>\n          <button onClick={() => removeItem(item.id)}>-</button>\n        </div>\n      ))}\n      <h3>총 금액: {getTotalPrice()}원</h3>\n    </div>\n  );\n}";

  const handleSubmit = () => {
    if (
      userAnswer.includes("useState") &&
      userAnswer.includes("addItem") &&
      userAnswer.includes("removeItem") &&
      userAnswer.includes("getTotalPrice") &&
      userAnswer.includes("map") &&
      userAnswer.includes("reduce")
    ) {
      onComplete();
      alert(
        "축하합니다! 🎉 모든 연습 문제를 완료하셨습니다! React 마스터가 되셨네요!"
      );
    } else {
      alert("다시 한번 시도해보세요! 모든 기능을 구현해야 해요.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            최종 단계
          </span>
          <span className="text-yellow-500">★★★★★★★★</span>
          <h2 className="text-2xl font-bold">종합 프로젝트 🏆</h2>
        </div>
        <p className="text-gray-600">
          지금까지 배운 모든 것을 종합해서 쇼핑 카트를 만들어보세요!
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">📝 문제</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">
            <strong>"ShoppingCart"</strong> 컴포넌트를 만들어주세요.
          </p>
          <p className="mb-2">초기 상품 데이터:</p>
          <ul className="list-disc ml-5 mb-2">
            <li>사과 - 1000원</li>
            <li>바나나 - 1500원</li>
            <li>오렌지 - 2000원</li>
          </ul>
          <p className="mb-2">기능:</p>
          <ul className="list-disc ml-5 mb-2">
            <li>각 상품의 수량을 증가/감소시킬 수 있는 버튼</li>
            <li>총 금액 계산 및 표시</li>
            <li>상품별 현재 수량 표시</li>
          </ul>
          <p className="mb-2">필요한 함수들:</p>
          <ul className="list-disc ml-5">
            <li>
              <code>addItem(id)</code>: 상품 추가
            </li>
            <li>
              <code>removeItem(id)</code>: 상품 제거
            </li>
            <li>
              <code>getTotalPrice()</code>: 총 금액 계산
            </li>
          </ul>
        </div>
      </div>

      <TipsBox
        title="💡 힌트"
        content={[
          "items 배열을 useState로 관리하세요",
          "map으로 상품 목록 렌더링, reduce로 총 금액 계산",
          "spread operator (...)로 상태 업데이트",
          "조건부 로직으로 수량이 0 이하로 가지 않도록 처리",
        ]}
      />

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">
          💻 여기에 코드를 작성해보세요
        </h3>
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm"
          placeholder="import { useState } from 'react';

function ShoppingCart() {
  // 상품 데이터를 useState로 관리하세요
  
  // addItem, removeItem, getTotalPrice 함수들을 만드세요
  
  return (
    // 쇼핑 카트 UI를 만드세요
  );
}"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">🧪 테스트해보기</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">이런 쇼핑 카트가 만들어져야 해요:</p>
          <TestShoppingCart />
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          최종 답안 제출
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
          <CodeBlock language="tsx" code={correctAnswer} />
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-bold mb-2">🎊 축하합니다!</h4>
            <p className="mb-2">
              모든 React 기초 개념을 성공적으로 학습하셨습니다!
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>
                <strong>컴포넌트</strong>: 함수형 컴포넌트 생성
              </li>
              <li>
                <strong>Props</strong>: 데이터 전달 및 활용
              </li>
              <li>
                <strong>State</strong>: useState로 상태 관리
              </li>
              <li>
                <strong>이벤트</strong>: 사용자 인터랙션 처리
              </li>
              <li>
                <strong>리스트</strong>: map으로 동적 렌더링
              </li>
              <li>
                <strong>폼</strong>: 입력값 관리 및 제출
              </li>
              <li>
                <strong>스타일링</strong>: 동적 스타일 적용
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// 테스트용 쇼핑 카트 컴포넌트
function TestShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: "사과", price: 1000, quantity: 0 },
    { id: 2, name: "바나나", price: 1500, quantity: 0 },
    { id: 3, name: "오렌지", price: 2000, quantity: 0 },
  ]);

  const addItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">쇼핑 카트</h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded-lg p-3 mb-2"
        >
          <h3 className="font-semibold">
            {item.name} - {item.price}원
          </h3>
          <p className="text-sm text-gray-600">수량: {item.quantity}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => addItem(item.id)}
              className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600 transition"
            >
              +
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600 transition"
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <h3 className="font-bold text-lg">총 금액: {getTotalPrice()}원</h3>
      </div>
    </div>
  );
}
