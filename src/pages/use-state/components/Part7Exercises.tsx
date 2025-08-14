import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

interface Exercise {
  id: number;
  title: string;
  difficulty: '초급' | '중급' | '고급';
  description: string;
  starterCode: string;
  hint: string;
  solution: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "카운터 만들기",
    difficulty: "초급",
    description: "버튼을 클릭하면 숫자가 1씩 증가하는 카운터를 만드세요.",
    starterCode: `function Counter() {
  // TODO: useState를 사용하여 count 상태를 만드세요
  
  return (
    <div>
      <p>현재 카운트: {/* count 표시 */}</p>
      <button onClick={/* 클릭 핸들러 */}>
        증가
      </button>
    </div>
  );
}`,
    hint: "useState(0)으로 초기값을 0으로 설정하고, setCount(count + 1)로 증가시킬 수 있습니다.",
    solution: `function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  );
}`
  },
  {
    id: 2,
    title: "토글 버튼",
    difficulty: "초급",
    description: "클릭할 때마다 ON/OFF가 전환되는 토글 버튼을 만드세요.",
    starterCode: `function ToggleButton() {
  // TODO: isOn 상태를 만드세요
  
  return (
    <button onClick={/* 토글 핸들러 */}>
      {/* isOn ? 'ON' : 'OFF' */}
    </button>
  );
}`,
    hint: "useState(false)로 시작하고, setIsOn(!isOn)으로 토글할 수 있습니다.",
    solution: `function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}`
  },
  {
    id: 3,
    title: "입력 필드 제어하기",
    difficulty: "초급",
    description: "사용자가 입력한 텍스트를 실시간으로 표시하는 컴포넌트를 만드세요.",
    starterCode: `function TextInput() {
  // TODO: text 상태를 만드세요
  
  return (
    <div>
      <input 
        type="text"
        value={/* text 값 */}
        onChange={/* 변경 핸들러 */}
      />
      <p>입력한 텍스트: {/* text 표시 */}</p>
    </div>
  );
}`,
    hint: "onChange 이벤트에서 e.target.value를 사용하여 입력값을 가져올 수 있습니다.",
    solution: `function TextInput() {
  const [text, setText] = useState('');
  
  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>입력한 텍스트: {text}</p>
    </div>
  );
}`
  },
  {
    id: 4,
    title: "좋아요 버튼",
    difficulty: "중급",
    description: "클릭하면 좋아요 수가 증가하고, 하트 색깔이 바뀌는 버튼을 만드세요.",
    starterCode: `function LikeButton() {
  // TODO: likes와 isLiked 상태를 만드세요
  
  const handleLike = () => {
    // TODO: 좋아요 상태 토글 및 카운트 증가/감소
  };
  
  return (
    <button onClick={handleLike}>
      {/* 하트 아이콘 (빨간색/회색) */} 
      좋아요 {/* likes 수 */}
    </button>
  );
}`,
    hint: "isLiked 상태에 따라 likes를 증가시키거나 감소시키세요. 조건부 스타일링을 사용하세요.",
    solution: `function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };
  
  return (
    <button onClick={handleLike}>
      <span style={{ color: isLiked ? 'red' : 'gray' }}>♥</span>
      좋아요 {likes}
    </button>
  );
}`
  },
  {
    id: 5,
    title: "탭 전환하기",
    difficulty: "중급",
    description: "3개의 탭을 클릭하면 다른 내용이 표시되는 탭 컴포넌트를 만드세요.",
    starterCode: `function TabComponent() {
  // TODO: activeTab 상태를 만드세요
  
  return (
    <div>
      <div>
        <button onClick={/* 탭1 클릭 */}>탭1</button>
        <button onClick={/* 탭2 클릭 */}>탭2</button>
        <button onClick={/* 탭3 클릭 */}>탭3</button>
      </div>
      <div>
        {/* activeTab에 따라 다른 내용 표시 */}
      </div>
    </div>
  );
}`,
    hint: "activeTab 상태를 숫자나 문자열로 관리하고, 조건부 렌더링을 사용하세요.",
    solution: `function TabComponent() {
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <div>
      <div>
        <button onClick={() => setActiveTab(1)}>탭1</button>
        <button onClick={() => setActiveTab(2)}>탭2</button>
        <button onClick={() => setActiveTab(3)}>탭3</button>
      </div>
      <div>
        {activeTab === 1 && <p>탭1 내용입니다</p>}
        {activeTab === 2 && <p>탭2 내용입니다</p>}
        {activeTab === 3 && <p>탭3 내용입니다</p>}
      </div>
    </div>
  );
}`
  },
  {
    id: 6,
    title: "할 일 추가하기",
    difficulty: "중급",
    description: "입력한 텍스트를 할 일 목록에 추가하는 기능을 만드세요.",
    starterCode: `function TodoList() {
  // TODO: todos와 inputText 상태를 만드세요
  
  const addTodo = () => {
    // TODO: 새 할 일 추가하기
  };
  
  return (
    <div>
      <input 
        type="text"
        value={/* inputText */}
        onChange={/* 입력 핸들러 */}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {/* todos 목록 렌더링 */}
      </ul>
    </div>
  );
}`,
    hint: "배열 상태를 업데이트할 때는 [...todos, newTodo] 같은 스프레드 연산자를 사용하세요.",
    solution: `function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  
  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };
  
  return (
    <div>
      <input 
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}`
  },
  {
    id: 7,
    title: "폼 데이터 관리",
    difficulty: "고급",
    description: "이름과 이메일을 입력받아 제출하는 폼을 만드세요.",
    starterCode: `function ContactForm() {
  // TODO: name과 email 상태를 만드세요
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 폼 제출 처리
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="이름"
        // TODO: value와 onChange
      />
      <input 
        type="email"
        placeholder="이메일"
        // TODO: value와 onChange
      />
      <button type="submit">제출</button>
      {/* 제출된 정보 표시 */}
    </form>
  );
}`,
    hint: "각 입력 필드마다 별도의 상태를 만들거나, 하나의 객체 상태로 관리할 수 있습니다.",
    solution: `function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ name, email });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">제출</button>
      </form>
      {submitted && (
        <p>제출됨: {submitted.name} ({submitted.email})</p>
      )}
    </div>
  );
}`
  },
  {
    id: 8,
    title: "카운트다운 타이머",
    difficulty: "고급",
    description: "시작 버튼을 누르면 10부터 0까지 카운트다운하는 타이머를 만드세요.",
    starterCode: `function CountdownTimer() {
  // TODO: count와 isRunning 상태를 만드세요
  
  const startTimer = () => {
    // TODO: setInterval을 사용한 타이머 구현
  };
  
  return (
    <div>
      <h2>{/* count 표시 */}</h2>
      <button onClick={startTimer}>
        시작
      </button>
    </div>
  );
}`,
    hint: "useEffect를 사용하여 interval을 관리하고, cleanup 함수를 잊지 마세요.",
    solution: `function CountdownTimer() {
  const [count, setCount] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  
  const startTimer = () => {
    setIsRunning(true);
    setCount(10);
  };
  
  useEffect(() => {
    if (isRunning && count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (count === 0) {
      setIsRunning(false);
    }
  }, [count, isRunning]);
  
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={startTimer} disabled={isRunning}>
        {isRunning ? '진행 중...' : '시작'}
      </button>
    </div>
  );
}`
  },
  {
    id: 9,
    title: "다크 모드 토글",
    difficulty: "고급",
    description: "버튼을 클릭하면 다크/라이트 모드가 전환되는 컴포넌트를 만드세요.",
    starterCode: `function ThemeToggle() {
  // TODO: isDarkMode 상태를 만드세요
  
  const styles = {
    // TODO: 테마에 따른 스타일 정의
  };
  
  return (
    <div style={styles}>
      <h1>테마 전환 예제</h1>
      <button onClick={/* 토글 핸들러 */}>
        {/* 현재 모드 표시 */}
      </button>
    </div>
  );
}`,
    hint: "조건부 스타일링으로 backgroundColor와 color를 변경하세요.",
    solution: `function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const styles = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    minHeight: '200px',
    padding: '20px',
    transition: 'all 0.3s ease'
  };
  
  return (
    <div style={styles}>
      <h1>테마 전환 예제</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '🌞 라이트 모드' : '🌙 다크 모드'}
      </button>
    </div>
  );
}`
  },
  {
    id: 10,
    title: "쇼핑 카트",
    difficulty: "고급",
    description: "상품을 추가/제거할 수 있는 간단한 쇼핑 카트를 만드세요.",
    starterCode: `function ShoppingCart() {
  // TODO: cart와 total 상태를 만드세요
  
  const products = [
    { id: 1, name: '사과', price: 1000 },
    { id: 2, name: '바나나', price: 1500 },
    { id: 3, name: '오렌지', price: 2000 }
  ];
  
  const addToCart = (product) => {
    // TODO: 카트에 상품 추가
  };
  
  return (
    <div>
      <h2>상품 목록</h2>
      {/* products 렌더링 */}
      
      <h2>장바구니</h2>
      {/* cart 렌더링 */}
      
      <p>총액: {/* total */}원</p>
    </div>
  );
}`,
    hint: "카트 상태를 배열로 관리하고, reduce를 사용해 총액을 계산하세요.",
    solution: `function ShoppingCart() {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: '사과', price: 1000 },
    { id: 2, name: '바나나', price: 1500 },
    { id: 3, name: '오렌지', price: 2000 }
  ];
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  return (
    <div>
      <h2>상품 목록</h2>
      {products.map(product => (
        <div key={product.id}>
          {product.name} - {product.price}원
          <button onClick={() => addToCart(product)}>추가</button>
        </div>
      ))}
      
      <h2>장바구니</h2>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - {item.price}원
          <button onClick={() => removeFromCart(index)}>제거</button>
        </div>
      ))}
      
      <p>총액: {total}원</p>
    </div>
  );
}`
  }
];

export const Part7Exercises: React.FC = () => {
  const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});
  const [showSolutions, setShowSolutions] = useState<{ [key: number]: boolean }>({});

  const toggleHint = (id: number) => {
    setShowHints(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSolution = (id: number) => {
    setShowSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '초급': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case '중급': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case '고급': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return '';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Part 7: useState 연습문제 🧪
        </h2>
        <p className="text-purple-200 mb-6">
          직접 코드를 작성하며 useState를 마스터해보세요! 힌트가 필요하면 힌트 버튼을 클릭하세요.
        </p>
      </div>

      {/* 난이도별 안내 */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          📊 난이도 안내
        </h3>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 rounded-lg bg-green-500/20 text-green-400 border border-green-500/30">
            🟢 초급: 기본 useState 사용법
          </span>
          <span className="px-3 py-1 rounded-lg bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
            🟡 중급: 복잡한 상태 관리
          </span>
          <span className="px-3 py-1 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30">
            🔴 고급: 실전 응용 문제
          </span>
        </div>
      </div>

      {/* 연습문제 목록 */}
      <div className="space-y-6">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-gray-800/50 rounded-xl p-6">
            {/* 문제 헤더 */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exercise.id}. {exercise.title}
                </h3>
                <p className="text-gray-300 mb-3">{exercise.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getDifficultyColor(exercise.difficulty)}`}>
                {exercise.difficulty}
              </span>
            </div>

            {/* 시작 코드 */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">시작 코드:</h4>
              <CodeBlock 
                fileName={`Exercise${exercise.id}.jsx`}
                code={exercise.starterCode}
              />
            </div>

            {/* 버튼 그룹 */}
            <div className="flex gap-3">
              <button
                onClick={() => toggleHint(exercise.id)}
                className="px-4 py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition-colors"
              >
                {showHints[exercise.id] ? '힌트 숨기기' : '💡 힌트 보기'}
              </button>
              <button
                onClick={() => toggleSolution(exercise.id)}
                className="px-4 py-2 bg-green-600/20 text-green-400 border border-green-500/30 rounded-lg hover:bg-green-600/30 transition-colors"
              >
                {showSolutions[exercise.id] ? '정답 숨기기' : '✅ 정답 보기'}
              </button>
            </div>

            {/* 힌트 */}
            {showHints[exercise.id] && (
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300">
                  <strong>💡 힌트:</strong> {exercise.hint}
                </p>
              </div>
            )}

            {/* 정답 */}
            {showSolutions[exercise.id] && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">정답 코드:</h4>
                <CodeBlock 
                  fileName={`Solution${exercise.id}.jsx`}
                  code={exercise.solution}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 학습 팁 */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-pink-400 mb-4">
          🎯 학습 팁
        </h3>
        <ul className="space-y-2 text-purple-200">
          <li>• 먼저 스스로 문제를 풀어보고, 막힐 때만 힌트를 확인하세요</li>
          <li>• 정답을 본 후에도 다시 직접 작성해보면서 익히세요</li>
          <li>• 코드를 수정하면서 어떻게 동작이 변하는지 실험해보세요</li>
          <li>• 각 문제의 핵심 개념을 이해하고 응용해보세요</li>
        </ul>
      </div>
    </div>
  );
};