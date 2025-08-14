import React, { useState } from 'react';
import { 
  Part1WhyCounterNotWorking,
  Part2RenderingTriggers,
  Part3PerformanceConsiderations,
  Part4ReactRenderingProcess,
  Part5WhyFaster,
  Part6Summary,
  Part7Exercises
} from './components';

const UseStatePage: React.FC = () => {
  const [currentPart, setCurrentPart] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            React useState 마스터하기
          </h1>
          <p className="text-xl text-purple-200">
            상태 관리의 핵심 원리를 이해하고 React의 리렌더링 메커니즘을 학습합니다
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((part) => (
              <button
                key={part}
                onClick={() => setCurrentPart(part)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPart === part
                    ? 'bg-purple-600 text-white scale-105'
                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                }`}
              >
                {part === 7 ? '연습문제' : `Part ${part}`}
              </button>
            ))}
          </div>
        </nav>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-2 mb-8">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentPart / 7) * 100}%` }}
          />
        </div>

        {/* Content */}
        <main className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          {currentPart === 1 && <Part1WhyCounterNotWorking />}
          {currentPart === 2 && <Part2RenderingTriggers />}
          {currentPart === 3 && <Part3PerformanceConsiderations />}
          {currentPart === 4 && <Part4ReactRenderingProcess />}
          {currentPart === 5 && <Part5WhyFaster />}
          {currentPart === 6 && <Part6Summary />}
          {currentPart === 7 && <Part7Exercises />}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <button
              onClick={() => setCurrentPart(Math.max(1, currentPart - 1))}
              disabled={currentPart === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentPart === 1
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
              }`}
            >
              ← 이전
            </button>
            <button
              onClick={() => setCurrentPart(Math.min(7, currentPart + 1))}
              disabled={currentPart === 7}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentPart === 7
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
              }`}
            >
              다음 →
            </button>
          </div>
        </main>

        {/* Learning Tips */}
        <div className="mt-8 p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
          <h3 className="text-yellow-400 font-bold mb-2">💡 학습 팁</h3>
          <ul className="text-yellow-200 space-y-1 text-sm">
            <li>• 각 개념마다 충분한 시간을 가지고 생각해보세요</li>
            <li>• 코드를 직접 실행해보며 콘솔을 확인해보세요</li>
            <li>• 왜 이렇게 동작하는지 이해하는 것이 중요합니다</li>
            <li>• 실패와 에러는 배움의 기회입니다</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseStatePage;