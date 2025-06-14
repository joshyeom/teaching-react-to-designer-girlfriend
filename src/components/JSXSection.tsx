import PracticeProblems from "./PracticeProblem";
import CodeExample from "./ui/CodeExample";
import ContentCard from "./ui/ContentCard";
import TipsBox from "./ui/TipsBox";

function JSXSection() {
  const jsxCode = `// JSX는 JavaScript 안에서 HTML처럼 쓰는 문법이에요!
function Welcome() {
  const name = "김디자이너";
  const isHappy = true;
  
  return (
    <div>
      <h1>안녕하세요, {name}님! 👋</h1>
      <p>오늘 기분이 {isHappy ? "좋으시" : "안 좋으시"}네요!</p>
      <img src="profile.jpg" alt="프로필" />
      <button onClick={() => alert('클릭!')}>
        클릭해보세요
      </button>
    </div>
  );
}`;

  const htmlVsJsx = `<!-- HTML -->
<div class="card">
  <h1>제목</h1>
  <img src="photo.jpg">
  <button onclick="handleClick()">
    클릭
  </button>
</div>

// JSX (React)
<div className="card">
  <h1>제목</h1>
  <img src="photo.jpg" />
  <button onClick={handleClick}>
    클릭
  </button>
</div>`;

  const jsxRules = `// ✅ JSX 규칙들

// 1. className 사용 (class X)
<div className="container">

// 2. 모든 태그는 닫아야 해요
<img src="..." />  // ← 슬래시 필수!
<br />

// 3. JavaScript 표현식은 {} 안에
<h1>안녕, {name}!</h1>
<p>2 + 2 = {2 + 2}</p>

// 4. 조건부 렌더링
{isLoggedIn && <p>환영합니다!</p>}
{isPremium ? <Gold /> : <Basic />}

// 5. 여러 요소는 하나로 감싸기
return (
  <div>  {/* 부모 요소 필요! */}
    <h1>제목</h1>
    <p>내용</p>
  </div>
);`;

  const result = (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold mb-2">안녕하세요, 김디자이너님! 👋</h1>
      <p className="text-gray-600 mb-3">오늘 기분이 좋으시네요!</p>
      <img
        src="https://via.placeholder.com/100x100/667eea/ffffff?text=Profile"
        alt="프로필"
        className="rounded-full w-20 h-20 mb-3"
      />
      <button
        onClick={() => alert("클릭!")}
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        클릭해보세요
      </button>
    </div>
  );

  const problems = [
    {
      title: "HTML을 JSX로 고치기",
      description: "아래 HTML 코드를 JSX로 변환해보세요.",
      starterCode: `<div class="card">\n  <h1>제목</h1>\n  <img src="photo.jpg">\n  <button onclick="alert('클릭!')">클릭</button>\n</div>`,
      hint: "class → className, onclick → onClick, 태그 닫기, 중괄호 사용",
      solution: `<div className="card">\n  <h1>제목</h1>\n  <img src="photo.jpg" />\n  <button onClick={() => alert('클릭!')}>클릭</button>\n</div>`,
    },
    {
      title: "JSX 문법 오류 고치기",
      description: "아래 코드의 잘못된 부분을 모두 고쳐보세요.",
      starterCode: `<div>\n  <h2>안녕</h2>\n  <img src="hi.png">\n  <p>{2 + 2 = 4}</p>\n</div>`,
      hint: "img 태그 닫기, 중괄호 안에는 표현식만",
      solution: `<div>\n  <h2>안녕</h2>\n  <img src="hi.png" />\n  <p>{2 + 2 === 4 ? "정답" : "오답"}</p>\n</div>`,
    },
    {
      title: "조건부 렌더링 사용하기",
      description:
        'isLogin 값에 따라 "환영합니다!" 또는 "로그인 해주세요"가 보이게 만들어보세요.',
      starterCode: `const isLogin = true;\n\nreturn (\n  <div>\n    {/* 여기에 조건부 렌더링을 추가하세요 */}\n  </div>\n);`,
      hint: "{isLogin ? ... : ...} 또는 && 연산자를 사용하세요.",
      solution: `const isLogin = true;\n\nreturn (\n  <div>\n    {isLogin ? "환영합니다!" : "로그인 해주세요"}\n  </div>\n);`,
    },
  ];

  return (
    <ContentCard>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        📝 JSX: HTML처럼 쓰는 React 문법
      </h2>

      {/* JSX 소개 */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-semibold mb-3">🤔 JSX가 뭐예요?</h3>
          <p className="text-gray-700 mb-3">
            <strong>J</strong>avaScript + <strong>X</strong>ML ={" "}
            <strong>JSX</strong>
          </p>
          <p className="text-gray-600">
            JavaScript 안에서 HTML처럼 UI를 작성할 수 있게 해주는 React의 특별한
            문법이에요!
            <br />
            Figma에서 디자인하듯이, 코드로 UI를 그릴 수 있어요.
          </p>
        </div>

        <CodeExample
          code={jsxCode}
          result={result}
          codeLabel="JSX 예제"
          resultLabel="실행 결과"
        />
      </div>

      {/* HTML vs JSX 비교 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">🔄 HTML vs JSX 차이점</h3>
        <div className="bg-gray-50 p-6 rounded-xl">
          <pre className="text-sm overflow-x-auto">
            <code
              dangerouslySetInnerHTML={{
                __html: htmlVsJsx.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
              }}
            />
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2">
              🚫 HTML과 다른 점
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                • <code>class</code> → <code>className</code>
              </li>
              <li>
                • <code>onclick</code> → <code>onClick</code> (카멜케이스)
              </li>
              <li>
                • <code>for</code> → <code>htmlFor</code>
              </li>
              <li>
                • 모든 태그는 닫아야 함 (<code>/&gt;</code>)
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">✅ JSX의 장점</h4>
            <ul className="space-y-1 text-sm">
              <li>• JavaScript 변수 사용 가능</li>
              <li>• 조건문, 반복문 사용 가능</li>
              <li>• 컴포넌트를 태그처럼 사용</li>
              <li>• 타입 체크와 자동완성 지원</li>
            </ul>
          </div>
        </div>
      </div>

      {/* JSX 규칙들 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          📏 꼭 기억해야 할 JSX 규칙
        </h3>
        <div className="bg-slate-800 text-gray-200 p-6 rounded-xl">
          <pre className="text-sm overflow-x-auto">
            <code>{jsxRules}</code>
          </pre>
        </div>
      </div>

      {/* 실습 예제 */}
      <div className="bg-indigo-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4 text-indigo-900">
          🎯 바로 실습해보기
        </h3>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">1️⃣ 변수 표시하기</p>
            <code className="block bg-gray-100 p-3 rounded text-sm">
              {`const price = 139000;
return <p>가격: {price.toLocaleString()}원</p>;`}
            </code>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">2️⃣ 조건에 따라 다르게 보여주기</p>
            <code className="block bg-gray-100 p-3 rounded text-sm">
              {`const isSoldOut = false;
return (
  <button className={isSoldOut ? "disabled" : "active"}>
    {isSoldOut ? "품절" : "구매하기"}
  </button>
);`}
            </code>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">3️⃣ 리스트 만들기</p>
            <code className="block bg-gray-100 p-3 rounded text-sm">
              {`const colors = ["빨강", "파랑", "노랑"];
return (
  <ul>
    {colors.map(color => <li key={color}>{color}</li>)}
  </ul>
);`}
            </code>
          </div>
        </div>
      </div>

      {/* JSX 연습문제 추가 */}
      <PracticeProblems problems={problems} />

      <TipsBox
        title="💡 JSX 꿀팁"
        content={
          <div className="space-y-2">
            <p>
              • <strong>Emmet 사용 가능!</strong> div.container 쓰고 Tab 누르면
              자동완성
            </p>
            <p>
              • <strong>주석은 {`{/* 이렇게 */}`}</strong> 써요
            </p>
            <p>
              • <strong>style은 객체로:</strong>{" "}
              {`style={{ color: 'red', fontSize: '16px' }}`}
            </p>
            <p>
              • <strong>Fragment 사용:</strong> {`<></>`}로 불필요한 div 줄이기
            </p>
          </div>
        }
      />

      {/* 자주 하는 실수 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-lg">
        <h4 className="font-semibold text-yellow-900 mb-3">
          ⚠️ 자주 하는 실수들
        </h4>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-semibold">❌ class="button"</span>
            <span className="mx-2">→</span>
            <span className="font-semibold text-green-700">
              ✅ className="button"
            </span>
          </div>
          <div>
            <span className="font-semibold">❌ {`<img src="...">`}</span>
            <span className="mx-2">→</span>
            <span className="font-semibold text-green-700">
              ✅ {`<img src="..." />`}
            </span>
          </div>
          <div>
            <span className="font-semibold">❌ onclick="handleClick()"</span>
            <span className="mx-2">→</span>
            <span className="font-semibold text-green-700">
              ✅ {"onClick={handleClick}"}
            </span>
          </div>
        </div>
      </div>
    </ContentCard>
  );
}

export default JSXSection;
