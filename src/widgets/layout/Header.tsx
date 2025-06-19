import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 text-white py-16 px-5 text-center relative">
      {/* 홈 버튼 */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
      >
        ← 홈으로
      </Link>

      <h1 className="text-5xl font-bold mb-5">
        🚀 디자이너 여자친구에게 React 가르치기
      </h1>
      <p className="text-xl opacity-90">디자이너를 위한 2시간 완성 커리큘럼</p>
    </header>
  );
};
