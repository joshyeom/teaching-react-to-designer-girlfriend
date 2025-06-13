import ConceptComparison from "./ui/ConceptComparison";
import ContentCard from "./ui/ContentCard";

function WhyReactSection() {
  return (
    <ContentCard>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        🤔 왜 React를 배워야 할까?
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <div className="bg-red-50 p-6 rounded-xl">
          <h4 className="text-red-700 font-semibold mb-4 text-lg">
            😤 디자이너의 고민
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">📌</span>
              <span>버튼 하나 바꾸는데 100곳 수정</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📌</span>
              <span>호버 효과 설명하다 지침</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📌</span>
              <span>작은 수정도 개발자 대기</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-xl">
          <h4 className="text-green-700 font-semibold mb-4 text-lg">
            ✨ React로 해결!
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>한 곳만 수정하면 모두 반영</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>직접 보여주면서 설명</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>바로 수정하고 확인</span>
            </li>
          </ul>
        </div>
      </div>

      <ConceptComparison
        leftTitle="🎨 Figma"
        leftContent="Component 만들고\n여러 곳에서 재사용"
        rightTitle="⚛️ React"
        rightContent="Component 만들고\n여러 곳에서 재사용"
      />

      <div className="text-center mt-8">
        <p className="text-lg text-gray-600">
          Instagram, Netflix, Airbnb... 모두 React로 만들어졌어요!
        </p>
      </div>
    </ContentCard>
  );
}

export default WhyReactSection;
