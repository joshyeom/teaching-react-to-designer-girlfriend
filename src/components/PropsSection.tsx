import CodeExample from "./ui/CodeExample";
import ConceptComparison from "./ui/ConceptComparison";
import ContentCard from "./ui/ContentCard";
import TipsBox from "./ui/TipsBox";

function PropsSection() {
  const code = `<Button 
  text="저장하기" 
  variant="primary" 
/>
<Button 
  text="취소하기" 
  variant="secondary" 
/>
<Button 
  text="삭제하기" 
  variant="danger" 
/>`;

  const result = (
    <div className="space-y-2">
      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold">
        저장하기
      </button>
      <button className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-semibold">
        취소하기
      </button>
      <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold">
        삭제하기
      </button>
    </div>
  );

  return (
    <ContentCard>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        📦 Props: 택배 상자처럼 정보 전달!
      </h2>

      <ConceptComparison
        leftTitle="🎨 Figma Properties"
        leftContent='Text: "저장하기"\nVariant: Primary\nSize: Large'
        rightTitle="⚛️ React Props"
        rightContent='text="저장하기"\nvariant="primary"\nsize="large"'
        arrow="="
      />

      <CodeExample code={code} result={result} codeLabel="Props 전달하기" />

      <TipsBox
        title="💡 Props = Properties = 속성"
        content="부모가 자식에게 정보를 전달하는 방법이에요. Figma의 Component Properties와 똑같은 개념!"
      />
    </ContentCard>
  );
}

export default PropsSection;
