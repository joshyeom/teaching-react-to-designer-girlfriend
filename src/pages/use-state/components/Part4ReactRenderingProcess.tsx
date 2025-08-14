import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

export const Part4ReactRenderingProcess: React.FC = () => {
  const [count, setCount] = useState(0);
  const [showProcess, setShowProcess] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setShowProcess(true);
    animatePhases();
  };

  const animatePhases = () => {
    setCurrentPhase(1);
    setTimeout(() => setCurrentPhase(2), 1000);
    setTimeout(() => setCurrentPhase(3), 2000);
    setTimeout(() => setCurrentPhase(0), 3500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Part 4: React의 3단계 렌더링 프로세스 🎨
        </h2>
        <p className="text-purple-200 mb-6">
          React가 어떻게 효율적으로 화면을 업데이트하는지 단계별로 알아봅시다
        </p>
      </div>

      {/* 실시간 데모 */}
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          🎬 렌더링 프로세스 실시간 데모
        </h3>
        
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-white mb-4">
            Count: {count}
          </div>
          <button
            onClick={handleIncrement}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all"
          >
            증가시키고 프로세스 보기
          </button>
        </div>

        {showProcess && (
          <div className="space-y-4 mt-6">
            {/* Phase 1: Render */}
            <div className={`border rounded-lg p-4 transition-all duration-500 ${
              currentPhase === 1 
                ? 'bg-blue-600/30 border-blue-500 scale-105' 
                : 'bg-black/20 border-gray-600'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">1️⃣</span>
                <h4 className="text-blue-400 font-semibold">Render Phase (Virtual DOM 생성)</h4>
                {currentPhase === 1 && <span className="text-blue-300 text-sm animate-pulse">진행중...</span>}
              </div>
              <CodeBlock
                fileName="virtualdom.js"
                code={`const newVirtualDOM = {
  type: 'div',
  props: { className: 'counter' },
  children: [
    { type: 'h1', children: 'Count: ${count + 1}' },
    { type: 'button', children: 'Click' }
  ]
};
// ⚡ 0.1ms - JavaScript 객체는 생성이 빠름!`}
              />
            </div>

            {/* Phase 2: Diffing */}
            <div className={`border rounded-lg p-4 transition-all duration-500 ${
              currentPhase === 2 
                ? 'bg-yellow-600/30 border-yellow-500 scale-105' 
                : 'bg-black/20 border-gray-600'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">2️⃣</span>
                <h4 className="text-yellow-400 font-semibold">Diffing (비교 단계)</h4>
                {currentPhase === 2 && <span className="text-yellow-300 text-sm animate-pulse">비교중...</span>}
              </div>
              <CodeBlock
                fileName="diffing.js"
                code={`이전: { type: 'h1', children: 'Count: ${count}' }
새것: { type: 'h1', children: 'Count: ${count + 1}' }

// 변경사항 목록:
[{ 
  type: 'TEXT_UPDATE', 
  element: h1, 
  oldValue: '${count}',
  newValue: '${count + 1}' 
}]
// 🔍 O(n) - 같은 위치끼리만 비교!`}
              />
            </div>

            {/* Phase 3: Commit */}
            <div className={`border rounded-lg p-4 transition-all duration-500 ${
              currentPhase === 3 
                ? 'bg-green-600/30 border-green-500 scale-105' 
                : 'bg-black/20 border-gray-600'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">3️⃣</span>
                <h4 className="text-green-400 font-semibold">Commit (실제 DOM 업데이트)</h4>
                {currentPhase === 3 && <span className="text-green-300 text-sm animate-pulse">업데이트중...</span>}
              </div>
              <CodeBlock
                fileName="commit.js"
                code={`// 10,000개 중에서 실제로 바뀐 1개만 업데이트!
h1Element.textContent = 'Count: ${count + 1}';

// 🐢 10ms - DOM 조작은 느리지만 최소한만!
// 효율성:
// Virtual DOM 10,000개 생성: 빠름 (JS 객체)
// 실제 DOM 1개 업데이트: 최소한의 작업만`}
              />
            </div>
          </div>
        )}
      </div>

      {/* Diffing 알고리즘 설명 */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">
          🔍 Diffing 알고리즘의 핵심 규칙
        </h3>
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">규칙 1: 같은 위치끼리만 비교</h4>
            <p className="text-cyan-200 text-sm">
              트리의 같은 레벨, 같은 위치에 있는 요소끼리만 비교합니다. 
              이로 인해 O(n³)이 아닌 O(n) 복잡도를 달성합니다.
            </p>
          </div>
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-emerald-400 font-semibold mb-2">규칙 2: 타입이 같으면 속성만 비교</h4>
            <p className="text-emerald-200 text-sm">
              같은 타입의 요소는 속성만 비교하고 재사용합니다. 
              불필요한 DOM 생성을 방지합니다.
            </p>
          </div>
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-pink-400 font-semibold mb-2">규칙 3: 타입이 다르면 새로 만들기</h4>
            <p className="text-pink-200 text-sm">
              타입이 변경되면 하위 트리 전체를 새로 만듭니다. 
              대부분 타입 변경은 큰 변화를 의미하기 때문입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 성능 측정 */}
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-green-400 mb-4">
          ⏱️ 실제 성능 측정
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-blue-400 font-semibold">Render Phase</div>
            <div className="text-2xl font-bold text-blue-300">0.1ms</div>
            <div className="text-blue-200 text-sm">JS 객체 생성</div>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🔍</div>
            <div className="text-yellow-400 font-semibold">Diffing</div>
            <div className="text-2xl font-bold text-yellow-300">0.5ms</div>
            <div className="text-yellow-200 text-sm">변경사항 찾기</div>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-green-400 font-semibold">Commit</div>
            <div className="text-2xl font-bold text-green-300">10ms</div>
            <div className="text-green-200 text-sm">DOM 업데이트</div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-300">
            총 시간: <span className="text-2xl font-bold text-white">10.6ms</span> 
            <span className="text-gray-400 ml-2">(60fps 유지 가능!)</span>
          </p>
        </div>
      </div>
    </div>
  );
};