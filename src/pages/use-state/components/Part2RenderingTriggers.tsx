import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

export const Part2RenderingTriggers: React.FC = () => {
  const [parentCount, setParentCount] = useState(0);
  const [showLogs, setShowLogs] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Part 2: 리렌더링 트리거 - 능동 vs 수동 🎬
        </h2>
        <p className="text-purple-200 mb-6">
          컴포넌트가 언제, 왜 리렌더링되는지 이해해봅시다
        </p>
      </div>

      {/* 능동 트리거 */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">
          💪 능동 트리거 (Active Trigger)
        </h3>
        <div className="mb-4">
          <CodeBlock 
            fileName="ActiveTrigger.jsx"
            code={`function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      나는 능동적! 스스로 리렌더링 결정! 💪
    </button>
  );
}`}
          />
        </div>
        <p className="text-blue-200">
          setState를 호출하는 컴포넌트는 <strong>능동적으로</strong> 리렌더링을 트리거합니다.
        </p>
      </div>

      {/* 수동 트리거 */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-yellow-400 mb-4">
          😔 수동 트리거 (Passive Trigger)
        </h3>
        <div className="mb-4">
          <CodeBlock 
            fileName="PassiveTrigger.jsx"
            code={`function Child() {
  console.log('Child가 리렌더링됨... 😔');
  return <div>부모가 리렌더링해서 나도 따라서...</div>;
}`}
          />
        </div>
        <p className="text-yellow-200">
          부모 컴포넌트가 리렌더링되면 자식 컴포넌트는 <strong>수동적으로</strong> 함께 리렌더링됩니다.
        </p>
      </div>

      {/* 실시간 데모 */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          🔄 리렌더링 체인 실시간 데모
        </h3>
        
        <button
          onClick={() => setShowLogs(!showLogs)}
          className="mb-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          {showLogs ? '로그 숨기기' : '로그 보기'}
        </button>

        <div className="space-y-4">
          <ParentComponent count={parentCount} setCount={setParentCount} showLog={showLogs} />
        </div>

        <button
          onClick={() => setParentCount(parentCount + 1)}
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Parent setState 트리거 (능동) 💥
        </button>
      </div>

      {/* 시각화 */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-300 mb-4">
          🌳 컴포넌트 트리 리렌더링 시각화
        </h3>
        <div className="mb-4">
          <CodeBlock 
            fileName="component-tree.txt"
            language="text"
            showLineNumbers={false}
            code={`         App (setState! 💥)
         /      |      \\
    Child1   Child2   Child3  ← 모두 수동 리렌더링
    /  |  \\    / | \\    / | \\
   🧒 🧒 🧒  🧒 🧒 🧒  🧒 🧒 🧒
   
총 10,000개 컴포넌트가 연쇄적으로 리렌더링!`}
          />
        </div>
        <p className="text-gray-400 mt-4">
          💡 하나의 setState가 수천 개의 컴포넌트를 리렌더링시킬 수 있습니다.
        </p>
      </div>

      {/* 핵심 정리 */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-pink-400 mb-4">
          📝 핵심 정리
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-green-400 font-semibold mb-2">능동 트리거</h4>
            <ul className="text-green-200 text-sm space-y-1">
              <li>• setState를 직접 호출</li>
              <li>• 스스로 리렌더링 결정</li>
              <li>• 원인의 시작점</li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-yellow-400 font-semibold mb-2">수동 트리거</h4>
            <ul className="text-yellow-200 text-sm space-y-1">
              <li>• 부모가 리렌더링되어 영향받음</li>
              <li>• 선택권 없이 리렌더링</li>
              <li>• 연쇄 반응의 일부</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// 데모용 컴포넌트들
const ParentComponent: React.FC<{ count: number; setCount: (n: number) => void; showLog: boolean }> = ({ count, showLog }) => {
  if (showLog) console.log('🔵 Parent 렌더링!');
  
  return (
    <div className="bg-blue-600/20 border border-blue-500 rounded-lg p-4">
      <div className="text-blue-300 font-semibold mb-2">Parent (능동)</div>
      <div className="text-white">Count: {count}</div>
      <div className="mt-2 space-y-2">
        <ChildComponent1 showLog={showLog} />
        <ChildComponent2 showLog={showLog} />
      </div>
    </div>
  );
};

const ChildComponent1: React.FC<{ showLog: boolean }> = ({ showLog }) => {
  if (showLog) console.log('🟡 Child1 렌더링... (수동)');
  
  return (
    <div className="bg-yellow-600/20 border border-yellow-500 rounded-lg p-3 ml-4">
      <div className="text-yellow-300 font-semibold">Child1 (수동)</div>
      <GrandChild showLog={showLog} />
    </div>
  );
};

const ChildComponent2: React.FC<{ showLog: boolean }> = ({ showLog }) => {
  if (showLog) console.log('🟡 Child2 렌더링... (수동)');
  
  return (
    <div className="bg-yellow-600/20 border border-yellow-500 rounded-lg p-3 ml-4">
      <div className="text-yellow-300 font-semibold">Child2 (수동)</div>
    </div>
  );
};

const GrandChild: React.FC<{ showLog: boolean }> = ({ showLog }) => {
  if (showLog) console.log('🔴 GrandChild 렌더링... (수동)');
  
  return (
    <div className="bg-red-600/20 border border-red-500 rounded-lg p-2 ml-4 mt-2">
      <div className="text-red-300 text-sm">GrandChild (수동)</div>
    </div>
  );
};