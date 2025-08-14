import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

export const Part1WhyCounterNotWorking: React.FC = () => {
  // 동작하지 않는 예제
  let plainCount = 0;
  
  // useState를 사용한 예제
  const [stateCount, setStateCount] = useState(0);

  const handlePlainClick = () => {
    plainCount = plainCount + 1;
    console.log('Plain count:', plainCount);
  };

  const handleStateClick = () => {
    setStateCount(stateCount + 1);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Part 1: "왜 Counter가 안 될까?" 🤔
        </h2>
        <p className="text-purple-200 mb-6">
          일반 변수와 useState의 차이를 직접 체험해보세요
        </p>
      </div>

      {/* 동작하지 않는 카운터 */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-red-400 mb-4">
          ❌ 동작하지 않는 카운터
        </h3>
        <div className="mb-4">
          <CodeBlock 
            fileName="BadCounter.jsx"
            code={`let count = 0;

function Counter() {
  const handleClick = () => {
    count = count + 1;
    console.log(count); // 콘솔에는 나타남
  };
  
  return (
    <button onClick={handleClick}>
      Count: {count} {/* 화면은 안 바뀜 */}
    </button>
  );
}`}
          />
        </div>
        <button
          onClick={handlePlainClick}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Plain Count: {plainCount} (클릭해도 화면이 안 바뀜!)
        </button>
        <p className="text-red-300 text-sm mt-2">
          💡 개발자 도구 콘솔을 열어서 값이 바뀌는지 확인해보세요!
        </p>
      </div>

      {/* 동작하는 카운터 */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-green-400 mb-4">
          ✅ useState를 사용한 카운터
        </h3>
        <div className="mb-4">
          <CodeBlock 
            fileName="GoodCounter.jsx"
            code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    // React에게 "값이 바뀌었어!" 알림
  };

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}`}
          />
        </div>
        <button
          onClick={handleStateClick}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          State Count: {stateCount} (정상 작동!)
        </button>
      </div>

      {/* 설명 박스 */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">
          🎯 핵심 차이점
        </h3>
        <div className="space-y-3 text-blue-200">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔴</span>
            <div>
              <strong>일반 변수:</strong> 값은 바뀌지만 React가 모름 
              → 화면 업데이트 안 됨
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🟢</span>
            <div>
              <strong>useState:</strong> setState를 통해 React에게 알림 
              → 컴포넌트 리렌더링 → 화면 업데이트
            </div>
          </div>
        </div>
      </div>

      {/* 생각해보기 */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          🤔 3분 생각 시간
        </h3>
        <ul className="space-y-2 text-purple-200">
          <li>• 왜 콘솔에는 값이 바뀌는데 화면은 안 바뀔까?</li>
          <li>• React가 무엇을 모르고 있을까?</li>
          <li>• 새로고침하면 어떻게 될까?</li>
        </ul>
      </div>
    </div>
  );
};