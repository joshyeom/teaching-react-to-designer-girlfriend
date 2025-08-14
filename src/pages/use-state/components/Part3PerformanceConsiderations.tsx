import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

export const Part3PerformanceConsiderations: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Part 3: "너무 비효율적이지 않아?" 🤔
        </h2>
        <p className="text-purple-200 mb-6">
          React가 왜 깊은 비교 대신 Virtual DOM을 사용하는지 알아봅시다
        </p>
      </div>

      {/* 순진한 접근의 문제점 */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-red-400 mb-4">
          🧮 순진한 접근: 깊은 비교의 문제점
        </h3>
        <div className="mb-4">
          <CodeBlock 
            fileName="deep-comparison.js"
            code={`// 만약 깊은 비교를 한다면?

이전 트리: 10,000개 노드
     vs
새 트리: 10,000개 노드

// 모든 가능한 조합을 비교한다면:
// 시간복잡도 O(n³) = 1,000,000,000,000번 비교 😵
// 브라우저가 멈출 정도로 느림!`}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-red-300 font-semibold mb-2">❌ 문제점</h4>
            <ul className="text-red-200 text-sm space-y-1">
              <li>• O(n³) 시간복잡도</li>
              <li>• 10,000개 노드 = 1조번 연산</li>
              <li>• 브라우저 정지 위험</li>
              <li>• 실시간 상호작용 불가능</li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-yellow-300 font-semibold mb-2">⚠️ 결과</h4>
            <ul className="text-yellow-200 text-sm space-y-1">
              <li>• 1초 이상 UI 멈춤</li>
              <li>• 사용자 경험 최악</li>
              <li>• 모바일에서 더 심각</li>
              <li>• 앱 사용 불가능</li>
            </ul>
          </div>
        </div>
      </div>

      {/* React의 해결책 */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-green-400 mb-4">
          💡 React의 똑똑한 해결책: "진행시켜!"
        </h3>
        
        {/* 이경영 짤 */}
        <div className="bg-black/30 rounded-lg p-4 mb-4">
          <img 
            src="https://i.namu.wiki/i/TiKnrt38ey5bzsinSB2Pj1ahsNiyFTcQz-D2IqYos-Rzk_-eNlP-ApPB6HJmCb_0onkxPhEN_X8uxp_t4gvnWw.webp"
            alt="진행시켜"
            className="w-full max-w-md mx-auto rounded-lg mb-4"
          />
          <div className="text-center mb-4">
            <p className="text-2xl font-bold text-yellow-400">"진행시켜!"</p>
            <p className="text-lg text-yellow-300 mt-2">- React의 철학</p>
          </div>
        </div>

        <div className="mb-4">
          <CodeBlock 
            fileName="react-philosophy.js"
            code={`// React의 핵심 아이디어
"일일이 비교하는 것보다 일단 '진행'시키고,
 나중에 진짜로 바뀐 부분만 찾아서 업데이트하자!"

// React의 사고방식:
// 😤 React: "10,000개 다 비교? 시간 없어!"
// 💪 React: "일단 Virtual DOM으로 진행시켜!"
// 🎯 React: "비교는 나중에, 바뀐 것만 찾아서 처리!"
// 😎 React: "이게 바로 효율이지!"`}
          />
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4">
            <h4 className="text-green-300 font-semibold mb-2">✨ "진행시켜" 방식의 장점</h4>
            <ul className="text-green-200 space-y-2">
              <li className="flex items-start gap-2">
                <span>💪</span>
                <span>"일단 진행" - Virtual DOM 생성 (빠름!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🚀</span>
                <span>O(n) 시간복잡도 - 비교는 나중에 효율적으로</span>
              </li>
              <li className="flex items-start gap-2">
                <span>⚡</span>
                <span>JavaScript 객체라 "진행"이 빠름</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎯</span>
                <span>실제 DOM은 꼭 필요한 부분만 나중에 처리</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <span>모바일에서도 "진행시켜!" 전략으로 부드러운 성능</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <h4 className="text-yellow-400 font-semibold mb-2">🎬 "진행시켜" 프로세스</h4>
            <div className="text-yellow-200 space-y-2 text-sm">
              <div>1️⃣ <strong>진행</strong>: 일단 새 Virtual DOM 만들기 (0.1ms)</div>
              <div>2️⃣ <strong>비교</strong>: 이전 Virtual DOM과 비교 (0.5ms)</div>
              <div>3️⃣ <strong>처리</strong>: 바뀐 부분만 실제 DOM 업데이트 (10ms)</div>
              <div className="mt-3 text-center font-bold">
                = 총 10.6ms로 "진행 완료!" 🎯
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 비교 시각화 */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          📊 성능 비교 시각화
        </h3>
        
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="mb-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          {showComparison ? '비교 숨기기' : '비교 보기'}
        </button>

        {showComparison && (
          <div className="space-y-4">
            {/* 깊은 비교 */}
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-400 font-semibold">깊은 비교 방식</span>
                <span className="text-red-300 text-sm">~1,000,000,000,000 연산</span>
              </div>
              <div className="w-full bg-red-900/30 rounded-full h-4">
                <div className="bg-red-500 h-4 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p className="text-red-200 text-sm mt-2">시간: ~10초+ (브라우저 멈춤)</p>
            </div>

            {/* React 방식 */}
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-400 font-semibold">React Virtual DOM</span>
                <span className="text-green-300 text-sm">~20,000 연산</span>
              </div>
              <div className="w-full bg-green-900/30 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: '2%' }}></div>
              </div>
              <p className="text-green-200 text-sm mt-2">시간: ~10ms (순간적)</p>
            </div>

            <div className="text-center mt-4">
              <span className="text-2xl font-bold text-yellow-400">
                약 50,000,000배 더 빠름! 🚀
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 건축 비유 */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">
          🏗️ 건축 비유로 이해하기
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-orange-400 font-semibold mb-2">🏢 실제 DOM = 실제 건물</h4>
            <ul className="text-orange-200 text-sm space-y-1">
              <li>• 벽 하나 바꾸려면 공사 필요</li>
              <li>• 페인트 칠, 전기 공사 등</li>
              <li>• 시간과 비용이 많이 듦</li>
              <li>• 실제 변경은 신중하게</li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">📋 Virtual DOM = 설계도</h4>
            <ul className="text-cyan-200 text-sm space-y-1">
              <li>• 종이에 그리기 (비용 낮음)</li>
              <li>• 지우고 다시 그리기 쉬움</li>
              <li>• 빠른 수정 가능</li>
              <li>• 최종 버전만 실제 적용</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4">
          <p className="text-blue-200 text-center">
            💡 React는 설계도(Virtual DOM)를 먼저 그리고, 
            이전 설계도와 비교해서 바뀐 부분만 실제 건물(DOM)에 적용합니다!
          </p>
        </div>
      </div>
    </div>
  );
};