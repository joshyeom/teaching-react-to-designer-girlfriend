// components/sections/IntroSection.tsx

import ContentCard from "./ui/ContentCard";

function IntroSection() {
  return (
    <ContentCard>
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">👋</div>
        <h2 className="text-3xl font-bold text-gray-800">
          환영해요! 오늘 배울 것들
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">🎨</div>
          <h4 className="font-semibold mb-2 text-lg">Figma → React</h4>
          <p className="text-gray-600 text-sm">이미 아는 개념을 React로</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">🛠️</div>
          <h4 className="font-semibold mb-2 text-lg">바로 만들기</h4>
          <p className="text-gray-600 text-sm">이론 최소, 실습 최대</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">😊</div>
          <h4 className="font-semibold mb-2 text-lg">재미있게</h4>
          <p className="text-gray-600 text-sm">부담 없이 즐겁게</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-lg mt-8">
        <h4 className="font-semibold text-yellow-900 mb-2">💡 준비물</h4>
        <ul className="list-disc list-inside text-gray-700">
          <li>노트북과 인터넷</li>
          <li>CodeSandbox 계정 (무료)</li>
          <li>좋아하는 음료 ☕</li>
          <li>실수해도 괜찮다는 마음 ❤️</li>
        </ul>
      </div>
    </ContentCard>
  );
}

export default IntroSection;
