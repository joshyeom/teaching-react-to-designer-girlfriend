import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

export const Part6Summary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Part 6: 핵심 정리 & 실습 🎓
        </h2>
        <p className="text-purple-200 mb-6">
          오늘 배운 내용을 정리하고 직접 실습해봅시다
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
        <div className="flex gap-2 mb-6">
          {['philosophy', 'practice', 'keypoints'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              {tab === 'philosophy' && '💭 React의 철학'}
              {tab === 'practice' && '🧪 실습'}
              {tab === 'keypoints' && '📝 핵심 포인트'}
            </button>
          ))}
        </div>

        {/* 탭 컨텐츠 */}
        {activeTab === 'philosophy' && <PhilosophyTab />}
        {activeTab === 'practice' && <PracticeTab />}
        {activeTab === 'keypoints' && <KeyPointsTab />}
      </div>

      {/* 다음 세션 예고 */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">
          🚀 다음 세션 예고
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">useEffect와 생명주기</h4>
            <ul className="text-cyan-200 text-sm space-y-1">
              <li>• 컴포넌트 생명주기 이해</li>
              <li>• Side Effect 관리</li>
              <li>• 데이터 페칭</li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-pink-400 font-semibold mb-2">상태 관리 패턴</h4>
            <ul className="text-pink-200 text-sm space-y-1">
              <li>• 상태 끌어올리기</li>
              <li>• Context API</li>
              <li>• 전역 상태 관리</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// 철학 탭 컴포넌트
const PhilosophyTab: React.FC = () => (
  <div className="space-y-4">
    <div className="bg-black/20 rounded-lg p-4">
      <h4 className="text-green-400 font-semibold mb-3">1. 성능 vs 개발 경험</h4>
      <div className="bg-green-900/20 rounded p-3">
        <p className="text-green-200 text-sm mb-2">
          "100% 최적화보다 80% 성능 + 200% 생산성"
        </p>
        <p className="text-gray-300 text-xs">
          Facebook, Instagram, Netflix가 React를 사용하는 이유
        </p>
      </div>
    </div>

    <div className="bg-black/20 rounded-lg p-4">
      <h4 className="text-blue-400 font-semibold mb-3">2. 선언적 프로그래밍</h4>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-blue-900/20 rounded p-3">
          <p className="text-blue-300 text-xs font-mono mb-1">React (선언적)</p>
          <code className="text-blue-200 text-xs">setState(1); // "1로 바꿔줘!"</code>
        </div>
        <div className="bg-orange-900/20 rounded p-3">
          <p className="text-orange-300 text-xs font-mono mb-1">Vanilla JS (명령형)</p>
          <code className="text-orange-200 text-xs">element.innerText = 1;</code>
        </div>
      </div>
    </div>

    <div className="bg-black/20 rounded-lg p-4">
      <h4 className="text-purple-400 font-semibold mb-3">3. 최적화는 필요할 때</h4>
      <ul className="text-purple-200 text-sm space-y-2">
        <li className="flex items-start gap-2">
          <span>✅</span>
          <span>대부분 앱: 기본 성능으로 충분</span>
        </li>
        <li className="flex items-start gap-2">
          <span>🔧</span>
          <span>필요시: React.memo, useMemo로 추가 최적화</span>
        </li>
      </ul>
    </div>
  </div>
);

// 실습 탭 컴포넌트
const PracticeTab: React.FC = () => {
  const [count, setCount] = useState(0);
  const [showLogs, setShowLogs] = useState(false);

  return (
    <div className="space-y-4">
      <div className="bg-black/20 rounded-lg p-4">
        <h4 className="text-yellow-400 font-semibold mb-3">🧪 리렌더링 직접 확인하기</h4>
        
        <div className="mb-4">
          <CodeBlock
            fileName="App.jsx"
            code={`function App() {
  const [count, setCount] = useState(0);
  console.log('🔵 App 렌더링!');
  
  return (
    <div>
      <Parent count={count} />
      <button onClick={() => setCount(count + 1)}>
        App에서 setState
      </button>
    </div>
  );
}`}
          />
        </div>

        <div className="space-y-3">
          <button
            onClick={() => setShowLogs(!showLogs)}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
          >
            {showLogs ? '콘솔 로그 끄기' : '콘솔 로그 켜기'}
          </button>
          
          <InteractiveApp count={count} setCount={setCount} showLog={showLogs} />
        </div>

        <div className="mt-4 bg-yellow-900/20 rounded p-3">
          <h5 className="text-yellow-300 font-semibold mb-2">실습 과제:</h5>
          <ol className="text-yellow-200 text-sm space-y-1">
            <li>1. 버튼 클릭 후 콘솔 확인</li>
            <li>2. 어떤 순서로 로그가 찍히는가?</li>
            <li>3. 왜 모든 컴포넌트가 리렌더링되는가?</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

// 핵심 포인트 탭 컴포넌트
const KeyPointsTab: React.FC = () => (
  <div className="space-y-4">
    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
      <h4 className="text-pink-400 font-semibold mb-3">💡 오늘의 핵심 메시지</h4>
      <p className="text-pink-200 text-lg text-center italic">
        "React는 '충분히 빠른' 성능과 '훨씬 나은' 개발 경험의 균형점을 찾았다"
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-black/20 rounded-lg p-4">
        <h5 className="text-green-400 font-semibold mb-2">✅ 기억할 것</h5>
        <ul className="text-green-200 text-sm space-y-1">
          <li>• useState로 React에게 변화 알리기</li>
          <li>• Virtual DOM으로 효율적 업데이트</li>
          <li>• O(n) 복잡도의 Diffing 알고리즘</li>
          <li>• 능동/수동 리렌더링 이해</li>
        </ul>
      </div>
      <div className="bg-black/20 rounded-lg p-4">
        <h5 className="text-blue-400 font-semibold mb-2">🎯 학습 팁</h5>
        <ul className="text-blue-200 text-sm space-y-1">
          <li>• 충분한 사고 시간 갖기</li>
          <li>• 시각적으로 이해하기</li>
          <li>• 왜?에 집중하기</li>
          <li>• 실패는 학습의 기회</li>
        </ul>
      </div>
    </div>

    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 mt-4">
      <p className="text-center text-gray-200">
        🎉 축하합니다! useState와 React 렌더링의 핵심을 마스터했습니다!
      </p>
    </div>
  </div>
);

// 인터랙티브 데모 컴포넌트
const InteractiveApp: React.FC<{ count: number; setCount: (n: number) => void; showLog: boolean }> = ({ 
  count, 
  setCount, 
  showLog 
}) => {
  if (showLog) console.log('🔵 App 렌더링!');
  
  return (
    <div className="bg-blue-600/20 border border-blue-500 rounded-lg p-4">
      <div className="text-blue-300 font-semibold mb-2">App Component</div>
      <InteractiveParent count={count} showLog={showLog} />
      <button
        onClick={() => setCount(count + 1)}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        setState 트리거 (Count: {count})
      </button>
    </div>
  );
};

const InteractiveParent: React.FC<{ count: number; showLog: boolean }> = ({ count, showLog }) => {
  if (showLog) console.log('🟡 Parent 렌더링... (수동)');
  
  return (
    <div className="bg-yellow-600/20 border border-yellow-500 rounded-lg p-3 ml-4 mt-2">
      <div className="text-yellow-300 font-semibold">Parent (수동)</div>
      <div className="text-white text-sm">Count: {count}</div>
      <InteractiveChild showLog={showLog} />
    </div>
  );
};

const InteractiveChild: React.FC<{ showLog: boolean }> = ({ showLog }) => {
  if (showLog) console.log('🔴 Child 렌더링... (수동)');
  
  return (
    <div className="bg-red-600/20 border border-red-500 rounded-lg p-2 ml-4 mt-2">
      <div className="text-red-300 text-sm">Child (수동)</div>
    </div>
  );
};