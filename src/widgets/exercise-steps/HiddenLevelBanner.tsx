import React from "react";

interface HiddenLevelBannerProps {
  onStartHiddenLevel: () => void;
}

export function HiddenLevelBanner({ onStartHiddenLevel }: HiddenLevelBannerProps) {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-2xl shadow-xl p-8 mt-8 text-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-4 right-4 text-6xl opacity-20">🎯</div>
      <div className="absolute bottom-4 left-4 text-4xl opacity-20">✨</div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold">
            🎉 축하합니다!
          </div>
          <div className="flex">
            {[1, 2, 3].map((i) => (
              <span key={i} className="text-yellow-300 text-xl">⭐</span>
            ))}
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-3">
          Level 3를 완료하셨습니다! 🏆
        </h2>
        
        <p className="text-purple-100 mb-6 text-lg leading-relaxed">
          축하합니다! JSX, 컴포넌트 만들기, 스타일링의 기초를 모두 마스터하셨네요. 
          이제 <strong className="text-yellow-300">Hidden Level</strong>에 도전해볼 준비가 되었습니다!
        </p>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
            🎯 Hidden Level 미리보기
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                <span>실제 웹사이트 컴포넌트 제작</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                <span>명함 카드, 가격표, 팀 소개</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                <span>네비게이션, 대시보드 만들기</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                <span>복잡한 레이아웃 구성</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                <span>완전한 랜딩 페이지 제작</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                <span>총 10개의 실전 문제</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={onStartHiddenLevel}
            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <span>🚀</span>
            Hidden Level 도전하기
          </button>
          <div className="text-purple-200 text-sm">
            💡 언제든지 도전할 수 있어요!
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            <span className="animate-pulse">🎯</span>
            <span>난이도: ⭐⭐ ~ ⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
}