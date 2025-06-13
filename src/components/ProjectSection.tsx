import ContentCard from "./ui/ContentCard";
import TipsBox from "./ui/TipsBox";
import { useNavigate } from "react-router-dom";

function ProjectSection() {
  const navigate = useNavigate();
  const handleGreeting = () => {
    alert("안녕하세요! 👋");
  };

  return (
    <>
      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-10 rounded-2xl text-center">
        <button
          className="mb-6 px-6 py-2 bg-white text-orange-500 font-bold rounded-full shadow hover:bg-orange-100 transition"
          onClick={() => navigate("/mini-project")}
        >
          미니프로젝트로 이동
        </button>
        <h3 className="text-3xl font-bold mb-5">
          🏆 최종 프로젝트: 나이키 상품 카드 만들기
        </h3>
        <p className="text-xl">
          오늘 배운 모든 것을 활용해서 실무와 같은 상품 카드를 만들어봐요!
        </p>

        <div className="bg-white text-gray-800 p-8 rounded-xl mt-8">
          {/* Nike Product Card Preview */}
          <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transform transition cursor-pointer">
            <div className="h-80 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-6xl">
              👟
            </div>
            <div className="p-5">
              <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold mb-3">
                신상품
              </span>
              <h3 className="text-lg font-semibold mb-1">에어맥스 270</h3>
              <p className="text-gray-600 mb-3">남성 신발</p>
              <p className="text-lg font-bold">139,000원</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-4">✅ 사용한 개념들</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-white text-indigo-600 px-4 py-2 rounded-full border-2 border-indigo-600">
                컴포넌트 ✓
              </span>
              <span className="bg-white text-indigo-600 px-4 py-2 rounded-full border-2 border-indigo-600">
                Props ✓
              </span>
              <span className="bg-white text-indigo-600 px-4 py-2 rounded-full border-2 border-indigo-600">
                Children ✓
              </span>
              <span className="bg-white text-indigo-600 px-4 py-2 rounded-full border-2 border-indigo-600">
                onClick ✓
              </span>
            </div>
          </div>
        </div>
      </div>

      <ContentCard className="mt-8">
        <h3 className="text-2xl font-bold text-center mb-8">
          🎉 축하해요! 이제 당신도 React 개발자!
        </h3>

        <div className="bg-gray-50 p-8 rounded-xl mb-6">
          <h4 className="font-semibold mb-5">📚 다음 시간 예고</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>State로 동적인 UI 만들기 (클릭하면 색이 바뀌는 버튼!)</li>
            <li>useEffect로 데이터 가져오기</li>
            <li>실제 API 연동하기</li>
          </ul>
        </div>

        <TipsBox
          title="💪 오늘의 숙제"
          content="오늘 만든 상품 카드를 자유롭게 꾸며보세요! 색상도 바꿔보고, 내용도 추가해보고, 버튼도 여러 개 만들어보세요. 실수해도 괜찮아요! 😊"
        />
      </ContentCard>
    </>
  );
}

export default ProjectSection;
