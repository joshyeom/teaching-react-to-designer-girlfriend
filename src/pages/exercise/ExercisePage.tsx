import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "~/widgets";

export type ExerciseId = string;

interface ExerciseStep {
  id: number;
  level: number;
  title: string;
  difficulty: number;
  codesandboxUrl: string;
  description: string;
  category: string;
}

const exerciseSteps: ExerciseStep[] = [
  // Level 1: JSX 기본 문법
  {
    id: 1,
    level: 1,
    title: "JSX 변환하기",
    difficulty: 1,
    codesandboxUrl:
      "https://codesandbox.io/p/sandbox/optimistic-mcnulty-dl8th3",
    description: "HTML을 JSX로 변환하는 연습",
    category: "JSX 기본 문법",
  },
  {
    id: 2,
    level: 1,
    title: "JavaScript 표현식 사용하기",
    difficulty: 1,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice1-2-sk6nkv",
    description: "JSX에서 JavaScript 표현식 활용",
    category: "JSX 기본 문법",
  },
  {
    id: 3,
    level: 1,
    title: "계산된 값 표시하기",
    difficulty: 1,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice1-33-pk9tfn2",
    description: "동적 계산으로 값 표시하기",
    category: "JSX 기본 문법",
  },

  // Level 2: 정적 컴포넌트 만들기
  {
    id: 4,
    level: 2,
    title: "첫 번째 컴포넌트",
    difficulty: 1,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice2-1-yz4x3d",
    description: "간단한 컴포넌트 만들기",
    category: "정적 컴포넌트",
  },
  {
    id: 5,
    level: 2,
    title: "프로필 카드 컴포넌트",
    difficulty: 2,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice2-2-xmzc62",
    description: "사용자 정보를 표시하는 카드 컴포넌트",
    category: "정적 컴포넌트",
  },
  {
    id: 6,
    level: 2,
    title: "버튼 컴포넌트",
    difficulty: 2,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice2-3-ffw6pl",
    description: "다양한 스타일의 버튼 컴포넌트",
    category: "정적 컴포넌트",
  },

  // Level 3: 스타일 적용하기
  {
    id: 7,
    level: 3,
    title: "인라인 스타일 적용",
    difficulty: 2,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice3-1-qwdxpm",
    description: "인라인 스타일로 컴포넌트 꾸미기",
    category: "스타일링",
  },
  {
    id: 8,
    level: 3,
    title: "CSS 클래스 사용하기",
    difficulty: 2,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice3-2-g36cdf",
    description: "CSS 클래스로 스타일 적용하기",
    category: "스타일링",
  },
  {
    id: 9,
    level: 3,
    title: "호버 효과 버튼",
    difficulty: 3,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice3-3-ff296k",
    description: "호버 효과가 있는 인터랙티브 버튼",
    category: "스타일링",
  },

  // Level 4: Props 기초
  {
    id: 10,
    level: 4,
    title: "인사말 컴포넌트",
    difficulty: 2,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice4-1-48ph6p",
    description: "Props를 활용한 인사말 컴포넌트",
    category: "Props 기초",
  },
  {
    id: 11,
    level: 4,
    title: "제목과 부제목 컴포넌트",
    difficulty: 2,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice4-2-nt6tmm",
    description: "여러 Props를 받는 헤더 컴포넌트",
    category: "Props 기초",
  },
  {
    id: 12,
    level: 4,
    title: "사용자 정보 카드",
    difficulty: 3,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice4-3-7wq2y8",
    description: "복합 Props를 활용한 사용자 카드",
    category: "Props 기초",
  },

  // Level 5: Props 심화
  {
    id: 13,
    level: 5,
    title: "토글 가능한 알림",
    difficulty: 3,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice5-1-z99vjl",
    description: "조건부 렌더링으로 토글 알림",
    category: "Props 심화",
  },
  {
    id: 14,
    level: 5,
    title: "진행률 표시 바",
    difficulty: 4,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice5-2-7nvpgz",
    description: "동적 스타일링으로 진행률 표시",
    category: "Props 심화",
  },
  {
    id: 15,
    level: 5,
    title: "제품 가격 카드",
    difficulty: 4,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice5-3-scn2tk",
    description: "복합 데이터를 활용한 가격 카드",
    category: "Props 심화",
  },

  // Level 6: Children Props
  {
    id: 16,
    level: 6,
    title: "기본 래퍼 컴포넌트",
    difficulty: 3,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice6-1-q76wj6",
    description: "Children을 활용한 래퍼 컴포넌트",
    category: "Children Props",
  },
  {
    id: 17,
    level: 6,
    title: "모달 컴포넌트",
    difficulty: 4,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice6-2-fvysxg",
    description: "Children을 활용한 모달 컴포넌트",
    category: "Children Props",
  },
  {
    id: 18,
    level: 6,
    title: "레이아웃 컴포넌트",
    difficulty: 4,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice6-3-4rtdcy",
    description: "복합 Children을 활용한 레이아웃",
    category: "Children Props",
  },

  // Level 7: 조건부 렌더링
  {
    id: 19,
    level: 7,
    title: "로그인 상태 표시",
    difficulty: 3,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice7-1-r425w6",
    description: "조건부 렌더링으로 로그인 상태 표시",
    category: "조건부 렌더링",
  },
  {
    id: 20,
    level: 7,
    title: "메시지 뱃지",
    difficulty: 4,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice7-2-g9k3pk",
    description: "조건부 렌더링으로 메시지 뱃지",
    category: "조건부 렌더링",
  },
  {
    id: 21,
    level: 7,
    title: "상품 상태 카드",
    difficulty: 4,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice7-3-hmsyh9",
    description: "복합 조건부 렌더링으로 상태 표시",
    category: "조건부 렌더링",
  },

  // Level 8: 리스트 렌더링
  {
    id: 22,
    level: 8,
    title: "간단한 목록 표시",
    difficulty: 3,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice8-1-plwqp9",
    description: "map을 활용한 목록 렌더링",
    category: "리스트 렌더링",
  },
  {
    id: 23,
    level: 8,
    title: "팀원 목록 카드",
    difficulty: 4,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice8-2-qskyjl",
    description: "객체 배열을 활용한 카드 목록",
    category: "리스트 렌더링",
  },
  {
    id: 24,
    level: 8,
    title: "필터링 가능한 목록",
    difficulty: 5,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice8-3-3xvh2z",
    description: "필터링 기능이 있는 동적 목록",
    category: "리스트 렌더링",
  },

  // Level 9: 복합 컴포넌트
  {
    id: 25,
    level: 9,
    title: "기본 상품 카드",
    difficulty: 4,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice9-1-f9qkqj",
    description: "복합 데이터를 활용한 상품 카드",
    category: "복합 컴포넌트",
  },
  {
    id: 26,
    level: 9,
    title: "인터랙티브 상품 카드",
    difficulty: 5,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice9-2-z7ygr9",
    description: "고급 기능이 있는 상품 카드",
    category: "복합 컴포넌트",
  },
  {
    id: 27,
    level: 9,
    title: "상품 카드 그리드",
    difficulty: 5,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice9-3-8snwgq",
    description: "여러 상품 카드를 그리드로 배열",
    category: "복합 컴포넌트",
  },

  // Level 10: 미니 프로젝트
  {
    id: 28,
    level: 10,
    title: "팀 소개 섹션",
    difficulty: 6,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice-10-1-nz4fm6",
    description: "완전한 팀 소개 페이지 섹션",
    category: "미니 프로젝트",
  },
  {
    id: 29,
    level: 10,
    title: "가격 테이블",
    difficulty: 6,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice10-2-pclq2t",
    description: "인터랙티브 가격 테이블",
    category: "미니 프로젝트",
  },
  {
    id: 30,
    level: 10,
    title: "블로그 포스트 목록",
    difficulty: 7,
    codesandboxUrl: "https://codesandbox.io/p/sandbox/practice10-3-jf2xj5",
    description: "완전한 블로그 포스트 목록 페이지",
    category: "미니 프로젝트",
  },
];

// 문제별 정답 예시 컴포넌트들
const ExampleComponents: Record<number, React.ComponentType<any>> = {
  1: () => (
    <div className="card">
      <img src="https://via.placeholder.com/150x100" alt="프로필" />
      <p>안녕하세요!</p>
    </div>
  ),
  2: () => {
    const name = "세진";
    const job = "디자이너";
    return (
      <p>
        안녕하세요, 저는 {job} {name}입니다.
      </p>
    );
  },
  3: () => {
    const birthYear = 1995;
    return (
      <div>
        <p>현재 연도: {new Date().getFullYear()}</p>
        <p>나이: {new Date().getFullYear() - birthYear}세</p>
      </div>
    );
  },
  4: () => (
    <div>
      <p>React에 오신 것을 환영합니다!</p>
    </div>
  ),
  5: () => (
    <div
      style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}
    >
      <h2 style={{ margin: "0 0 8px 0" }}>김세진</h2>
      <p style={{ margin: "4px 0", color: "#666" }}>UI/UX 디자이너</p>
      <p style={{ margin: "4px 0", color: "#666" }}>
        Figma를 사랑하는 디자이너입니다
      </p>
    </div>
  ),
  6: () => (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Primary
      </button>
      <button
        style={{
          backgroundColor: "#6c757d",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Secondary
      </button>
      <button
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Danger
      </button>
    </div>
  ),
  7: () => (
    <div
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      스타일이 적용된 박스
    </div>
  ),
  8: () => (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "20px auto",
        maxWidth: "300px",
      }}
    >
      <h3
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
      >
        카드 제목
      </h3>
      <p style={{ color: "#666", lineHeight: "1.6" }}>카드 내용입니다.</p>
    </div>
  ),
  9: () => (
    <button
      style={{
        padding: "12px 24px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
    >
      호버 효과 버튼
    </button>
  ),
  10: ({ name = "세진" }) => <div>안녕하세요, {name}님!</div>,
  11: ({
    title = "React 학습하기",
    subtitle = "디자이너를 위한 React 입문",
  }) => (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  ),
  12: ({
    name = "김세진",
    role = "UI/UX 디자이너",
    team = "디자인팀",
    email = "sejin@company.com",
  }) => (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "24px",
        maxWidth: "300px",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>{name}</h3>
      <p style={{ margin: "4px 0", color: "#666" }}>{role}</p>
      <p style={{ margin: "4px 0", color: "#666" }}>{team}</p>
      <a
        href={`mailto:${email}`}
        style={{ color: "#007bff", textDecoration: "none" }}
      >
        {email}
      </a>
    </div>
  ),
  22: () => {
    const fruits = ["사과", "바나나", "오렌지", "포도"];
    return (
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    );
  },
  23: () => {
    const teamMembers = [
      { id: 1, name: "김세진", role: "디자이너" },
      { id: 2, name: "이민수", role: "개발자" },
      { id: 3, name: "박지영", role: "PM" },
    ];
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {teamMembers.map((member) => (
          <div
            key={member.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              minWidth: "150px",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>
              {member.name}
            </h3>
            <p style={{ margin: "0", color: "#666" }}>{member.role}</p>
          </div>
        ))}
      </div>
    );
  },
  25: () => (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        maxWidth: "300px",
      }}
    >
      <img
        src="https://via.placeholder.com/300x200"
        alt="상품"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "16px" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>무선 키보드</h3>
        <div
          style={{
            color: "#007bff",
            fontSize: "20px",
            fontWeight: "bold",
            margin: "8px 0",
          }}
        >
          89,000원
        </div>
        <div style={{ color: "#666", fontSize: "14px" }}>
          편안한 타이핑을 위한 인체공학적 디자인
        </div>
      </div>
    </div>
  ),
  28: () => (
    <section style={{ padding: "40px 20px", backgroundColor: "#f8f9fa" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "40px", fontSize: "32px" }}
      >
        우리 팀
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "8px",
            padding: "24px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="https://via.placeholder.com/120"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              marginBottom: "16px",
            }}
            alt="팀원"
          />
          <h3 style={{ margin: "0 0 4px 0" }}>김세진</h3>
          <div
            style={{
              color: "#007bff",
              fontWeight: "500",
              marginBottom: "12px",
            }}
          >
            Lead Designer
          </div>
          <div style={{ color: "#666", fontSize: "14px", lineHeight: "1.5" }}>
            사용자 중심의 디자인을 추구합니다
          </div>
        </div>
      </div>
    </section>
  ),
  // 더 많은 예시들...
};

// 공통 CSS 안내 컴포넌트
function CSSGuideSection() {
  const [copied, setCopied] = useState(false);

  const cssCode = `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
}

.App {
  text-align: center;
  padding: 20px;
  min-height: 100vh;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

button {
  font-family: inherit;
  cursor: pointer;
}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        🎨 공통 CSS 스타일
      </h2>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-amber-600">⚠️</span>
          <strong className="text-amber-800">중요!</strong>
        </div>
        <p className="text-amber-700 text-sm">
          모든 연습 문제를 풀기 전에 아래 CSS 코드를 CodeSandbox의{" "}
          <code className="bg-amber-100 px-1 rounded">styles.css</code> 파일에
          복사해서 붙여넣어 주세요!
        </p>
      </div>

      <div className="relative">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{cssCode}</code>
        </pre>
        <button
          onClick={handleCopy}
          className={`absolute top-2 right-2 px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
            copied
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {copied ? "✅ 복사됨!" : "📋 복사하기"}
        </button>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-blue-700 text-sm">
          💡 <strong>팁:</strong> 이 CSS는 모든 문제에서 공통으로 사용되는 기본
          스타일입니다. 복사해서 붙여넣은 후 각 문제별 추가 스타일을
          작성해보세요!
        </p>
      </div>
    </div>
  );
}

function ExerciseProblemView({
  problem,
  onNext,
}: {
  problem: ExerciseStep;
  onNext: () => void;
}) {
  const ExampleComponent = ExampleComponents[problem.id];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            문제 {problem.id}
          </span>
          <span className="text-yellow-500">
            {"★".repeat(problem.difficulty)}
          </span>
          <h2 className="text-2xl font-bold">{problem.title}</h2>
        </div>
        <p className="text-gray-600 mb-2">
          <strong>카테고리:</strong> {problem.category}
        </p>
        <p className="text-gray-600">{problem.description}</p>
      </div>

      {/* 정답 예시 화면 */}
      {ExampleComponent && (
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">🎯 완성된 모습</h3>
          <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
            <ExampleComponent />
          </div>
        </div>
      )}

      {/* CodeSandbox 링크 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">💻 실습하기</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="mb-3">아래 CodeSandbox에서 문제를 풀어보세요!</p>
          <a
            href={problem.codesandboxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
            </svg>
            CodeSandbox에서 풀기
          </a>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          다음 문제
        </button>
      </div>
    </div>
  );
}

function ExerciseNavigation({
  steps,
  activeStep,
  onStepChange,
}: {
  steps: ExerciseStep[];
  activeStep: number;
  onStepChange: (step: number) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  // 레벨별로 그룹화
  const groupedSteps = steps.reduce((acc, step) => {
    if (!acc[step.level]) {
      acc[step.level] = [];
    }
    acc[step.level].push(step);
    return acc;
  }, {} as Record<number, ExerciseStep[]>);

  const levelNames: Record<number, string> = {
    1: "JSX 기본 문법",
    2: "정적 컴포넌트",
    3: "스타일링",
    4: "Props 기초",
    5: "Props 심화",
    6: "Children Props",
    7: "조건부 렌더링",
    8: "리스트 렌더링",
    9: "복합 컴포넌트",
    10: "미니 프로젝트",
  };

  const levelEmojis: Record<number, string> = {
    1: "📝",
    2: "🧩",
    3: "🎨",
    4: "📦",
    5: "⚡",
    6: "🔗",
    7: "🔀",
    8: "📋",
    9: "🏗️",
    10: "🚀",
  };

  const currentLevelSteps = groupedSteps[selectedCategory] || [];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        🏋️‍♀️ React 연습 문제
      </h2>
      <div className="text-sm text-gray-600 mb-6">
        총 30개의 연습 문제를 통해 React 실력을 키워보세요!
      </div>

      {/* 카테고리 탭 */}
      <div className="flex flex-wrap gap-2 mb-6 p-2 bg-gray-50 rounded-xl">
        {Object.entries(levelNames).map(([level, name]) => (
          <button
            key={level}
            onClick={() => setSelectedCategory(Number(level))}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === Number(level)
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-600 hover:bg-white hover:shadow-sm"
            }`}
          >
            <span className="mr-2">{levelEmojis[Number(level)]}</span>
            Level {level}: {name}
          </button>
        ))}
      </div>

      {/* 선택된 카테고리의 문제들 */}
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-4 text-purple-600 flex items-center gap-2">
          <span className="text-2xl">{levelEmojis[selectedCategory]}</span>
          Level {selectedCategory}: {levelNames[selectedCategory]}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentLevelSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => onStepChange(step.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                activeStep === step.id
                  ? "border-blue-500 bg-blue-50 shadow-lg"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-purple-600">
                  문제 {step.id}
                </span>
                <div className="flex items-center gap-1 text-yellow-500">
                  {"★".repeat(step.difficulty)}
                </div>
              </div>
              <div className="text-sm font-medium text-gray-800 leading-tight mb-1">
                {step.title}
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                {step.description}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({
  steps,
  activeStep,
}: {
  steps: ExerciseStep[];
  activeStep: number;
}) {
  const activeIndex = steps.findIndex((s) => s.id === activeStep);
  const progress = ((activeIndex + 1) / steps.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">진행상황</h3>
        <span className="text-sm text-gray-600">
          {activeIndex + 1} / {steps.length}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-sm text-gray-600 mt-2">
        현재 난이도: {"★".repeat(steps[activeIndex]?.difficulty || 1)}
      </div>
    </div>
  );
}

export function ExercisePage() {
  const { problemId } = useParams();
  const [activeStep, setActiveStep] = useState<number>(
    problemId ? parseInt(problemId) : 1
  );

  const currentStep = exerciseSteps.find((s) => s.id === activeStep);

  const renderExercise = () => {
    if (!currentStep) return null;

    return (
      <ExerciseProblemView
        problem={currentStep}
        onNext={() => {
          const currentIndex = exerciseSteps.findIndex(
            (s) => s.id === activeStep
          );
          if (currentIndex < exerciseSteps.length - 1) {
            setActiveStep(exerciseSteps[currentIndex + 1].id);
          }
        }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CSSGuideSection />
        <ProgressBar steps={exerciseSteps} activeStep={activeStep} />
        <ExerciseNavigation
          steps={exerciseSteps}
          activeStep={activeStep}
          onStepChange={setActiveStep}
        />
        <div className="transition-all duration-300">{renderExercise()}</div>
      </div>
    </div>
  );
}
