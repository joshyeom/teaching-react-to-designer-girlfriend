import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

export const Part5WhyFaster: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Part 5: 왜 이 방식이 더 빠를까? 💡
        </h2>
        <p className="text-purple-200 mb-6">
          시간복잡도를 비교하고 React의 효율성을 이해해봅시다
        </p>
      </div>

      {/* 시간복잡도 비교 */}
      <div className="bg-gradient-to-br from-red-500/10 to-green-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          📊 시간복잡도 비교
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* 전통적 방식 */}
          <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3">❌ 깊은 비교 방식</h4>
            <div className="mb-3">
              <CodeBlock
                fileName="deep-comparison.js"
                code={`이전 트리 10,000개 + 새 트리 10,000개
= 20,000개 노드

모든 조합 비교 = O(n³)
= 1,000,000,000,000번 연산 😱`}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-red-300">연산 횟수:</span>
                <span className="text-red-400 font-mono">1,000,000,000,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-red-300">예상 시간:</span>
                <span className="text-red-400 font-bold">~10초+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-red-300">결과:</span>
                <span className="text-red-400">브라우저 멈춤 💀</span>
              </div>
            </div>
          </div>

          {/* React 방식 */}
          <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
            <h4 className="text-green-400 font-semibold mb-3">✅ React 방식</h4>
            <div className="mb-3">
              <CodeBlock
                fileName="react-comparison.js"
                code={`1. Virtual DOM 생성: O(n) = 10,000번 ⚡
2. Diffing: O(n) = 10,000번 🔍
3. Commit: O(변경 개수) = 실제 바뀐 것만! 🎯

총: ~20,000번`}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-green-300">연산 횟수:</span>
                <span className="text-green-400 font-mono">20,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-300">예상 시간:</span>
                <span className="text-green-400 font-bold">~10ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-300">결과:</span>
                <span className="text-green-400">부드러운 60fps 🚀</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg">
          <p className="text-2xl font-bold text-yellow-400">
            🎯 약 50,000,000배 더 빠름!
          </p>
          <p className="text-yellow-200 text-sm mt-2">
            20,000 연산 vs 1,000,000,000,000 연산
          </p>
        </div>
      </div>

      {/* 시각적 비교 애니메이션 */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          🎬 성능 차이 시각화
        </h3>
        
        <button
          onClick={() => setShowAnimation(!showAnimation)}
          className="mb-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          {showAnimation ? '애니메이션 정지' : '애니메이션 시작'}
        </button>

        {showAnimation && (
          <div className="space-y-4">
            {/* 깊은 비교 애니메이션 */}
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-400 font-semibold">깊은 비교</span>
                <span className="text-red-300 text-xs">O(n³)</span>
              </div>
              <div className="h-8 bg-red-900/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-600 to-red-500"
                  style={{
                    animation: 'slowProgress 10s linear infinite',
                    width: '100%'
                  }}
                />
              </div>
              <p className="text-red-200 text-xs mt-1">10초... 브라우저 응답 없음</p>
            </div>

            {/* React 애니메이션 */}
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-400 font-semibold">React Virtual DOM</span>
                <span className="text-green-300 text-xs">O(n)</span>
              </div>
              <div className="h-8 bg-green-900/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-600 to-green-500"
                  style={{
                    animation: 'fastProgress 0.01s linear',
                    width: '100%'
                  }}
                />
              </div>
              <p className="text-green-200 text-xs mt-1">10ms... 즉시 완료!</p>
            </div>
          </div>
        )}
      </div>

      {/* 왜 Virtual DOM인가 */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">
          🤔 왜 Virtual DOM을 사용할까?
        </h3>
        
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">1. JavaScript 객체는 빠르다</h4>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="text-sm">
                <p className="text-gray-400 mb-1">JS 객체 생성:</p>
                <code className="text-green-400 bg-black/30 px-2 py-1 rounded">~0.00001ms</code>
              </div>
              <div className="text-sm">
                <p className="text-gray-400 mb-1">DOM 요소 생성:</p>
                <code className="text-red-400 bg-black/30 px-2 py-1 rounded">~0.1ms</code>
              </div>
            </div>
          </div>

          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-emerald-400 font-semibold mb-2">2. 배치 업데이트 가능</h4>
            <p className="text-emerald-200 text-sm">
              여러 상태 변경을 모아서 한 번에 처리할 수 있어 효율적입니다.
            </p>
          </div>

          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-pink-400 font-semibold mb-2">3. 예측 가능한 성능</h4>
            <p className="text-pink-200 text-sm">
              O(n) 복잡도로 컴포넌트 수에 비례해 선형적으로 증가합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 실제 예시 */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          🌍 실제 사용 예시
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📘</div>
            <div className="text-blue-400 font-semibold">Facebook</div>
            <p className="text-blue-200 text-sm mt-2">
              수억 명의 사용자, 복잡한 UI
            </p>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📷</div>
            <div className="text-pink-400 font-semibold">Instagram</div>
            <p className="text-pink-200 text-sm mt-2">
              실시간 피드, 무한 스크롤
            </p>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🎬</div>
            <div className="text-red-400 font-semibold">Netflix</div>
            <p className="text-red-200 text-sm mt-2">
              동적 콘텐츠, 부드러운 UI
            </p>
          </div>
        </div>
        <p className="text-purple-200 text-center mt-4">
          이 모든 서비스가 React의 효율적인 렌더링 시스템을 사용합니다!
        </p>
      </div>

      <style jsx>{`
        @keyframes slowProgress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes fastProgress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};