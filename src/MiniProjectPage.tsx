import ProductCard from "./components/ui/ProductCard";
import { useCallback, useState } from "react";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    badge: "신상품",
    badgeColor: "#ff6900",
    name: "에어맥스 270",
    category: "남성 신발",
    price: "139,000원",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
    badge: "베스트셀러",
    badgeColor: "#111",
    name: "에어포스 1",
    category: "여성 신발",
    price: "119,000원",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=400&fit=crop",
    badge: "한정판",
    badgeColor: "#7e22ce",
    name: "조던 1 레트로",
    category: "남성 신발",
    price: "199,000원",
  },
];

function CodeSandboxButton() {
  const handleClick = useCallback(() => {
    window.open(
      "https://codesandbox.io/p/sandbox/eloquent-mclaren-t97p3g",
      "_blank"
    );
  }, []);
  return (
    <button
      onClick={handleClick}
      className="fixed top-6 right-6 z-50 bg-black text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-800 transition"
    >
      프로젝트 시작하기
    </button>
  );
}

function BriefSection() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📋 프로젝트 브리프
      </h2>
      <div className="bg-gray-50 border-l-4 border-black p-5 rounded-lg mb-4">
        <h4 className="font-semibold mb-2">🎯 미션</h4>
        <p>
          나이키 온라인 스토어에 사용할 <strong>상품 카드 컴포넌트</strong>를
          만들어주세요.
        </p>
        <p>
          디자이너가 만든 시안을 보고, React 컴포넌트로 구현하는 것이
          목표입니다.
        </p>
      </div>
      <div className="bg-gray-50 border-l-4 border-black p-5 rounded-lg mb-4">
        <h4 className="font-semibold mb-2">⏱️ 예상 시간</h4>
        <p>20-30분</p>
      </div>
      <div className="bg-gray-50 border-l-4 border-black p-5 rounded-lg">
        <h4 className="font-semibold mb-2">🎓 학습 목표</h4>
        <ul className="ml-5 list-disc text-gray-700">
          <li>컴포넌트 구조 이해하기</li>
          <li>Props로 데이터 전달하기</li>
          <li>Children 활용하기 (선택사항)</li>
          <li>onClick 이벤트 추가하기</li>
        </ul>
      </div>
    </section>
  );
}

function DesignPreviewSection() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        🎨 디자인 시안
      </h2>
      <div className="bg-gray-100 rounded-xl p-8 mb-8 text-center">
        <h4 className="mb-6 font-semibold text-lg">완성본 미리보기</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <div
          className="rounded-lg p-4 text-white text-center min-w-[110px] shadow"
          style={{ background: "#111" }}
        >
          <div>Nike Black</div>
          <div>#111</div>
        </div>
        <div
          className="rounded-lg p-4 text-white text-center min-w-[110px] shadow"
          style={{ background: "#ff6900" }}
        >
          <div>Nike Orange</div>
          <div>#ff6900</div>
        </div>
        <div
          className="rounded-lg p-4 text-center min-w-[110px] shadow"
          style={{ background: "#757575", color: "#111" }}
        >
          <div>Gray</div>
          <div>#757575</div>
        </div>
      </div>
    </section>
  );
}

function RequirementSection() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📝 상세 요구사항
      </h2>
      <div className="bg-gray-50 border-l-4 border-black p-5 rounded-lg mb-4">
        <h4 className="font-semibold mb-2">컴포넌트 구조</h4>
        <ul className="ml-5 list-disc text-gray-700">
          <li>
            <strong>ProductCard</strong> 컴포넌트를 만드세요
          </li>
          <li>
            Props로 받을 데이터:
            <ul className="ml-5 mt-2 list-disc text-gray-700">
              <li>
                <code>image</code> - 상품 이미지 URL
              </li>
              <li>
                <code>badge</code> - 배지 텍스트 (신상품, 베스트셀러 등)
              </li>
              <li>
                <code>badgeColor</code> - 배지 색상
              </li>
              <li>
                <code>name</code> - 상품명
              </li>
              <li>
                <code>category</code> - 카테고리
              </li>
              <li>
                <code>price</code> - 가격
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="bg-gray-50 border-l-4 border-black p-5 rounded-lg mb-4">
        <h4 className="font-semibold mb-2">인터랙션</h4>
        <ul className="ml-5 list-disc text-gray-700">
          <li>카드에 호버시 살짝 위로 올라가는 효과</li>
          <li>카드 클릭시 상품명을 alert로 표시</li>
        </ul>
      </div>
      <div className="bg-gray-50 border-l-4 border-black p-5 rounded-lg">
        <h4 className="font-semibold mb-2">스타일링</h4>
        <ul className="ml-5 list-disc text-gray-700">
          <li>모든 CSS는 이미 준비되어 있습니다</li>
          <li>className만 올바르게 적용하면 됩니다</li>
        </ul>
      </div>
    </section>
  );
}

function ResourceSection() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        🎁 제공 리소스
      </h2>
      <h3 className="text-lg font-bold my-6">상품 이미지 URLs</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {products.map((p) => (
          <div key={p.id} className="bg-gray-50 rounded-xl p-4 text-center">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-36 object-cover rounded mb-2"
            />
            <p className="text-xs break-all">{p.image}</p>
          </div>
        ))}
      </div>
      <h3 className="text-lg font-bold my-6">상품 데이터</h3>
      <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-sm overflow-x-auto">
        <span className="text-slate-400">
          // 이 데이터를 사용해서 카드를 만들어보세요!
        </span>
        <pre className="whitespace-pre-wrap mt-2">{`
const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    badge: "신상품",
    badgeColor: "#ff6900",
    name: "에어맥스 270",
    category: "남성 신발",
    price: "139,000원"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
    badge: "베스트셀러",
    badgeColor: "#111",
    name: "에어포스 1",
    category: "여성 신발",
    price: "119,000원"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=400&fit=crop",
    badge: "한정판",
    badgeColor: "#7e22ce",
    name: "조던 1 레트로",
    category: "남성 신발",
    price: "199,000원"
  }
];
`}</pre>
      </div>
    </section>
  );
}

function StepGuideSection() {
  const steps = [
    {
      title: "ProductCard 컴포넌트 구조 만들기",
      desc: "카드의 HTML 구조를 만들어보세요. div, img, span, h3, p 태그들을 사용합니다.",
      hint: "Figma에서 Frame 안에 요소를 배치하듯이, div 안에 요소들을 넣으세요!",
    },
    {
      title: "Props 연결하기",
      desc: "props로 받은 데이터를 화면에 표시하세요. {props.name} 형태로 사용합니다.",
      hint: "배지 색상은 style={{ backgroundColor: props.badgeColor }}로 적용해요!",
    },
    {
      title: "className 적용하기",
      desc: "제공된 CSS 클래스명을 각 요소에 적용하세요.",
    },
    {
      title: "App에서 ProductCard 사용하기",
      desc: "products.map()을 사용해서 여러 개의 카드를 만드세요.",
      hint: "{products.map(product => <ProductCard ... />)}",
    },
    {
      title: "클릭 이벤트 추가하기 (보너스)",
      desc: "카드 클릭시 상품명이 alert로 뜨도록 onClick을 추가하세요.",
    },
  ];
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        🚀 단계별 가이드
      </h2>
      <ol className="space-y-8">
        {steps.map((step, i) => (
          <li key={i} className="relative pl-14">
            <span className="absolute left-0 top-0 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
              {i + 1}
            </span>
            <h4 className="font-semibold mb-1">{step.title}</h4>
            <p className="mb-2 text-gray-700">{step.desc}</p>
            {step.hint && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-lg text-blue-900 text-sm mb-2">
                <strong>💡 힌트:</strong> {step.hint}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

function ChecklistSection() {
  const items = [
    "3개의 상품 카드가 보이나요?",
    "각 카드에 이미지가 표시되나요?",
    "배지 색상이 각각 다른가요?",
    "호버시 카드가 올라가나요?",
    "클릭시 alert가 뜨나요?",
  ];
  const [checked, setChecked] = useState(Array(items.length).fill(false));
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        ✅ 완성도 체크리스트
      </h2>
      <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl">
        {items.map((item, i) => (
          <label
            key={i}
            className={`flex items-center gap-3 cursor-pointer mb-3 transition-opacity ${
              checked[i] ? "opacity-60 line-through" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() =>
                setChecked((checked) =>
                  checked.map((v, idx) => (idx === i ? !v : v))
                )
              }
              className="w-5 h-5 cursor-pointer"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </section>
  );
}

function ReferenceSection() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📚 도움이 필요하다면?
      </h2>
      <details className="mb-4">
        <summary className="cursor-pointer p-3 bg-gray-50 rounded font-semibold">
          🔍 ProductCard 구조 힌트 보기
        </summary>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-sm mt-2 overflow-x-auto">
          {`<div className="?">
  <img src={?} alt={?} className="?" />
  <div className="?">
    <span className="?" style={{ backgroundColor: ? }}>
      {?}
    </span>
    <h3 className="?">{?}</h3>
    <p className="?">{?}</p>
    <p className="?">{?}</p>
  </div>
</div>`}
        </div>
      </details>
      <details>
        <summary className="cursor-pointer p-3 bg-gray-50 rounded font-semibold">
          🔍 map 사용법 힌트 보기
        </summary>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-sm mt-2 overflow-x-auto">
          {`{products.map(product => (
  <ProductCard
    key={product.id}
    image={product.image}
    badge={product.badge}
    // ... 나머지 props도 전달하세요!
  />
))}`}
        </div>
      </details>
    </section>
  );
}

function MiniProjectPage() {
  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      <CodeSandboxButton />
      <header className="bg-black text-white py-12 px-4 text-center rounded-b-3xl mb-10">
        <svg
          className="w-16 h-16 mx-auto mb-4"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" />
        </svg>
        <h1 className="text-3xl font-bold mb-2">
          미니 프로젝트: 나이키 상품 카드
        </h1>
        <p className="text-lg">실무처럼 요구사항을 받고 구현해보세요!</p>
      </header>
      <main className="max-w-5xl mx-auto px-4">
        <BriefSection />
        <DesignPreviewSection />
        <RequirementSection />
        <ResourceSection />
        <StepGuideSection />
        <ChecklistSection />
        <ReferenceSection />
      </main>
    </div>
  );
}

export default MiniProjectPage;
