import React, { useState } from "react";
import { CodeBlock, TipsBox } from "../../shared/ui";

interface ExerciseProps {
  onComplete: () => void;
  onNext: () => void;
}

export function ExerciseHiddenLevel({ onComplete, onNext }: ExerciseProps) {
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    problem1: "",
    problem2: "",
    problem3: "",
    problem4: "",
    problem5: "",
    problem6: "",
    problem7: "",
    problem8: "",
    problem9: "",
    problem10: "",
  });

  const problems = {
    1: {
      title: "문제 H-1: 동적 스타일 카드 ⭐⭐",
      description: "props에 따라 스타일이 변하는 카드 컴포넌트 만들기",
      example: `// 요구사항:
// - isHighlighted가 true면 파란색 테두리
// - cardType이 'success'면 초록색 배경
// - cardType이 'warning'이면 노란색 배경
// - title과 content를 표시`,
      hint: "삼항 연산자나 조건부 렌더링을 활용하세요",
      solution: `function DynamicCard({ isHighlighted, cardType, title, content }) {
  const getBackgroundColor = () => {
    if (cardType === 'success') return '#f0f9f0';
    if (cardType === 'warning') return '#fff9e6';
    return '#ffffff';
  };

  return (
    <div style={{
      backgroundColor: getBackgroundColor(),
      border: isHighlighted ? '2px solid #3b82f6' : '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px'
    }}>
      <h3 style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>{title}</h3>
      <p style={{ margin: 0, color: '#666' }}>{content}</p>
    </div>
  );
}`,
      placeholder: `function DynamicCard({ isHighlighted, cardType, title, content }) {
  return (
    <div style={{
      // 여기에 동적 스타일을 작성하세요
    }}>
      {/* 제목과 내용을 표시하세요 */}
    </div>
  );
}`,
    },
    2: {
      title: "문제 H-2: 상태 기반 버튼 ⭐⭐",
      description: "클릭 상태에 따라 텍스트와 스타일이 변하는 토글 버튼",
      example: `// 요구사항:
// - 처음에는 "구독하기" 텍스트, 회색 배경
// - 클릭하면 "구독중" 텍스트, 파란색 배경
// - 다시 클릭하면 원래 상태로 복원`,
      hint: "useState를 사용해서 isSubscribed 상태를 관리하세요",
      solution: `function ToggleButton() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <button
      onClick={() => setIsSubscribed(!isSubscribed)}
      style={{
        backgroundColor: isSubscribed ? '#3b82f6' : '#9ca3af',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease'
      }}
    >
      {isSubscribed ? '구독중' : '구독하기'}
    </button>
  );
}`,
      placeholder: `function ToggleButton() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <button
      onClick={() => setIsSubscribed(!isSubscribed)}
      style={{
        // 여기에 동적 스타일을 작성하세요
      }}
    >
      {/* 동적 텍스트를 작성하세요 */}
    </button>
  );
}`,
    },
    3: {
      title: "문제 H-3: 사용자 프로필 컴포넌트 ⭐⭐⭐",
      description: "여러 정보를 표시하고 기본값을 처리하는 프로필 컴포넌트",
      example: `// 요구사항:
// - name, job, location, avatar를 props로 받기
// - avatar가 없으면 기본 이미지 사용
// - location이 없으면 "위치 미공개" 표시
// - 전체를 카드 형태로 디자인`,
      hint: "|| 연산자를 사용해서 기본값을 처리하세요",
      solution: `function UserProfile({ name, job, location, avatar }) {
  const defaultAvatar = "https://via.placeholder.com/60x60?text=👤";
  
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
      <img 
        src={avatar || defaultAvatar} 
        alt="프로필"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          objectFit: 'cover'
        }}
      />
      <div>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 'bold' }}>
          {name}
        </h3>
        <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>
          {job}
        </p>
        <p style={{ margin: 0, color: '#999', fontSize: '12px' }}>
          📍 {location || "위치 미공개"}
        </p>
      </div>
    </div>
  );
}`,
      placeholder: `function UserProfile({ name, job, location, avatar }) {
  const defaultAvatar = "https://via.placeholder.com/60x60?text=👤";
  
  return (
    <div style={{
      // 카드 스타일을 작성하세요
    }}>
      {/* 프로필 이미지와 정보를 표시하세요 */}
    </div>
  );
}`,
    },
    4: {
      title: "문제 H-4: 동적 리스트 컴포넌트 ⭐⭐⭐",
      description: "배열 데이터를 받아서 목록을 렌더링하는 컴포넌트",
      example: `// 요구사항:
// - items 배열을 props로 받기
// - 각 item은 {id, text, completed} 구조
// - completed가 true면 텍스트에 취소선
// - 빈 목록일 때 "할 일이 없습니다" 표시`,
      hint: "map() 함수와 조건부 렌더링을 함께 사용하세요",
      solution: `function TodoList({ items }) {
  if (!items || items.length === 0) {
    return (
      <div style={{
        padding: '40px 20px',
        textAlign: 'center',
        color: '#999',
        fontSize: '16px'
      }}>
        할 일이 없습니다
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '16px'
    }}>
      {items.map(item => (
        <div key={item.id} style={{
          padding: '12px 0',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{
            textDecoration: item.completed ? 'line-through' : 'none',
            color: item.completed ? '#999' : '#333',
            fontSize: '16px'
          }}>
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}`,
      placeholder: `function TodoList({ items }) {
  if (!items || items.length === 0) {
    return (
      <div>
        {/* 빈 목록 메시지를 작성하세요 */}
      </div>
    );
  }

  return (
    <div>
      {/* map을 사용해서 리스트를 렌더링하세요 */}
      {items.map(item => (
        
      ))}
    </div>
  );
}`,
    },
    5: {
      title: "문제 H-5: 인터랙티브 카운터 ⭐⭐⭐",
      description: "증가/감소 버튼이 있는 카운터 컴포넌트",
      example: `// 요구사항:
// - 현재 카운트 표시
// - + 버튼으로 증가 (최대 10)
// - - 버튼으로 감소 (최소 0)
// - 버튼이 비활성화될 때 다른 스타일 적용`,
      hint: "disabled 속성과 조건부 스타일링을 활용하세요",
      solution: `function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <button
        onClick={decrement}
        disabled={count === 0}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: count === 0 ? '#e5e7eb' : '#ef4444',
          color: count === 0 ? '#9ca3af' : 'white',
          fontSize: '20px',
          cursor: count === 0 ? 'not-allowed' : 'pointer'
        }}
      >
        -
      </button>
      
      <span style={{
        fontSize: '24px',
        fontWeight: 'bold',
        minWidth: '40px',
        textAlign: 'center'
      }}>
        {count}
      </span>
      
      <button
        onClick={increment}
        disabled={count === 10}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: count === 10 ? '#e5e7eb' : '#10b981',
          color: count === 10 ? '#9ca3af' : 'white',
          fontSize: '20px',
          cursor: count === 10 ? 'not-allowed' : 'pointer'
        }}
      >
        +
      </button>
    </div>
  );
}`,
      placeholder: `function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // 증가 로직을 작성하세요
  };

  const decrement = () => {
    // 감소 로직을 작성하세요
  };

  return (
    <div>
      {/* 카운터 UI를 작성하세요 */}
    </div>
  );
}`,
    },
    6: {
      title: "문제 H-6: 탭 컴포넌트 ⭐⭐⭐⭐",
      description: "여러 탭을 전환할 수 있는 탭 컴포넌트",
      example: `// 요구사항:
// - tabs 배열을 props로 받기 (각 탭은 {id, label, content})
// - 활성 탭은 다른 스타일로 표시
// - 탭을 클릭하면 해당 내용 표시`,
      hint: "activeTab 상태로 현재 탭을 관리하세요",
      solution: `function TabComponent({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || null);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* 탭 헤더 */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #e5e7eb'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: 'none',
              backgroundColor: activeTab === tab.id ? '#3b82f6' : '#f9fafb',
              color: activeTab === tab.id ? 'white' : '#374151',
              cursor: 'pointer',
              borderBottom: activeTab === tab.id ? '2px solid #1d4ed8' : 'none',
              fontSize: '14px',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* 탭 내용 */}
      <div style={{
        padding: '20px',
        minHeight: '120px'
      }}>
        {tabs.map(tab => (
          activeTab === tab.id && (
            <div key={tab.id}>
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
}`,
      placeholder: `function TabComponent({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || null);

  return (
    <div>
      {/* 탭 헤더를 렌더링하세요 */}
      <div>
        {tabs.map(tab => (
          
        ))}
      </div>
      
      {/* 활성 탭의 내용을 표시하세요 */}
      <div>
        
      </div>
    </div>
  );
}`,
    },
    7: {
      title: "문제 H-7: 검색 입력창 ⭐⭐⭐⭐",
      description: "실시간 검색 기능이 있는 입력창 컴포넌트",
      example: `// 요구사항:
// - 검색어를 입력하면 실시간으로 필터링
// - items 배열에서 name이 포함된 항목만 표시
// - 검색 결과가 없으면 "검색 결과가 없습니다" 표시`,
      hint: "filter() 메서드와 includes()를 사용하세요",
      solution: `function SearchInput({ items }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          fontSize: '16px',
          marginBottom: '16px'
        }}
      />
      
      <div>
        {filteredItems.length === 0 ? (
          <div style={{
            textAlign: 'center',
            color: '#6b7280',
            padding: '20px'
          }}>
            검색 결과가 없습니다
          </div>
        ) : (
          filteredItems.map(item => (
            <div key={item.id} style={{
              padding: '8px 12px',
              borderBottom: '1px solid #f3f4f6',
              fontSize: '14px'
            }}>
              <strong>{item.name}</strong>
              {item.description && (
                <div style={{ color: '#6b7280', fontSize: '12px', marginTop: '4px' }}>
                  {item.description}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}`,
      placeholder: `function SearchInput({ items }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    // 검색 로직을 작성하세요
  );

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        // input 이벤트를 처리하세요
      />
      
      <div>
        {/* 필터링된 결과를 표시하세요 */}
      </div>
    </div>
  );
}`,
    },
    8: {
      title: "문제 H-8: 모달 컴포넌트 ⭐⭐⭐⭐",
      description: "열기/닫기가 가능한 모달 컴포넌트",
      example: `// 요구사항:
// - isOpen prop으로 모달 표시/숨김 제어
// - 배경 클릭하거나 X 버튼으로 닫기
// - onClose 콜백 함수 호출`,
      hint: "조건부 렌더링과 이벤트 핸들링을 활용하세요",
      solution: `function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '80%',
          overflow: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#6b7280'
            }}
          >
            ×
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}`,
      placeholder: `function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        // 오버레이 스타일을 작성하세요
      }}
      onClick={onClose}
    >
      <div
        style={{
          // 모달 컨텐츠 스타일을 작성하세요
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더와 내용을 작성하세요 */}
      </div>
    </div>
  );
}`,
    },
    9: {
      title: "문제 H-9: 드롭다운 메뉴 ⭐⭐⭐⭐⭐",
      description: "클릭으로 열고 닫을 수 있는 드롭다운 메뉴",
      example: `// 요구사항:
// - 메뉴 버튼 클릭 시 옵션 목록 표시/숨김
// - 옵션 클릭 시 선택된 값 표시하고 메뉴 닫기
// - 외부 클릭 시 메뉴 자동 닫기`,
      hint: "useRef와 useEffect를 사용해서 외부 클릭을 감지하세요",
      solution: `function Dropdown({ options, onSelect, placeholder = "선택하세요" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '12px 16px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          backgroundColor: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minWidth: '200px'
        }}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <span style={{ marginLeft: '8px' }}>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          marginTop: '4px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 10
        }}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                borderBottom: '1px solid #f3f4f6',
                ':hover': {
                  backgroundColor: '#f9fafb'
                }
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
      placeholder: `function Dropdown({ options, onSelect, placeholder = "선택하세요" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // 외부 클릭 감지 로직을 작성하세요
  }, []);

  const handleOptionClick = (option) => {
    // 옵션 선택 로직을 작성하세요
  };

  return (
    <div ref={dropdownRef}>
      {/* 드롭다운 UI를 작성하세요 */}
    </div>
  );
}`,
    },
    10: {
      title: "문제 H-10: 종합 대시보드 ⭐⭐⭐⭐⭐",
      description: "여러 컴포넌트를 조합한 간단한 대시보드",
      example: `// 요구사항:
// - 사용자 정보 카드 (이름, 직업)
// - 통계 카드 3개 (각각 다른 색상)
// - 최근 활동 목록 (5개 제한)
// - 전체를 그리드 레이아웃으로 배치`,
      hint: "이전에 만든 컴포넌트들을 재사용하고 조합하세요",
      solution: `function Dashboard({ user, stats, activities }) {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f9fafb',
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '24px',
        color: '#1f2937'
      }}>
        대시보드
      </h1>

      {/* 사용자 정보 */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>안녕하세요, {user.name}님!</h2>
        <p style={{ margin: 0, color: '#6b7280' }}>{user.job}</p>
      </div>

      {/* 통계 카드들 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '20px'
      }}>
        {stats.map((stat, index) => {
          const colors = ['#3b82f6', '#10b981', '#f59e0b'];
          return (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              borderLeft: \`4px solid \${colors[index % colors.length]}\`
            }}>
              <h3 style={{
                margin: '0 0 8px 0',
                fontSize: '14px',
                color: '#6b7280',
                textTransform: 'uppercase'
              }}>
                {stat.label}
              </h3>
              <p style={{
                margin: 0,
                fontSize: '24px',
                fontWeight: 'bold',
                color: colors[index % colors.length]
              }}>
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* 최근 활동 */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          최근 활동
        </h3>
        <div>
          {activities.slice(0, 5).map((activity, index) => (
            <div key={index} style={{
              padding: '12px 0',
              borderBottom: index < 4 ? '1px solid #f3f4f6' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '14px' }}>{activity.text}</span>
              <span style={{ fontSize: '12px', color: '#6b7280' }}>{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,
      placeholder: `function Dashboard({ user, stats, activities }) {
  return (
    <div style={{
      // 대시보드 전체 스타일을 작성하세요
    }}>
      <h1>대시보드</h1>

      {/* 사용자 정보 카드 */}
      <div>
        
      </div>

      {/* 통계 카드들 - 그리드 레이아웃 */}
      <div style={{
        display: 'grid',
        // 그리드 스타일을 작성하세요
      }}>
        {stats.map((stat, index) => (
          
        ))}
      </div>

      {/* 최근 활동 목록 */}
      <div>
        
      </div>
    </div>
  );
}`,
    },
  };

  const handleAnswer = (value: string) => {
    const key = `problem${currentProblem}` as keyof typeof userAnswers;
    setUserAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const checkAnswer = () => {
    const currentAnswer = userAnswers[`problem${currentProblem}` as keyof typeof userAnswers];
    let isCorrect = false;

    // 각 문제별 답안 체크 로직
    switch (currentProblem) {
      case 1:
        isCorrect = currentAnswer.includes("DynamicCard") && 
                   currentAnswer.includes("backgroundColor") && 
                   currentAnswer.includes("border");
        break;
      case 2:
        isCorrect = currentAnswer.includes("ToggleButton") && 
                   currentAnswer.includes("useState") && 
                   currentAnswer.includes("isSubscribed");
        break;
      case 3:
        isCorrect = currentAnswer.includes("UserProfile") && 
                   currentAnswer.includes("defaultAvatar") && 
                   currentAnswer.includes("||");
        break;
      case 4:
        isCorrect = currentAnswer.includes("TodoList") && 
                   currentAnswer.includes("map") && 
                   currentAnswer.includes("length === 0");
        break;
      case 5:
        isCorrect = currentAnswer.includes("Counter") && 
                   currentAnswer.includes("increment") && 
                   currentAnswer.includes("disabled");
        break;
      case 6:
        isCorrect = currentAnswer.includes("TabComponent") && 
                   currentAnswer.includes("activeTab") && 
                   currentAnswer.includes("setActiveTab");
        break;
      case 7:
        isCorrect = currentAnswer.includes("SearchInput") && 
                   currentAnswer.includes("filter") && 
                   currentAnswer.includes("includes");
        break;
      case 8:
        isCorrect = currentAnswer.includes("Modal") && 
                   currentAnswer.includes("stopPropagation") && 
                   currentAnswer.includes("position: 'fixed'");
        break;
      case 9:
        isCorrect = currentAnswer.includes("Dropdown") && 
                   currentAnswer.includes("useRef") && 
                   currentAnswer.includes("useEffect");
        break;
      case 10:
        isCorrect = currentAnswer.includes("Dashboard") && 
                   currentAnswer.includes("grid") && 
                   currentAnswer.includes("map");
        break;
      default:
        isCorrect = false;
    }

    if (isCorrect) {
      alert("정답입니다! 🎉");
      if (currentProblem < 10) {
        setCurrentProblem((prev) => prev + 1);
        setShowSolution(false);
      } else {
        alert("축하합니다! Hidden Level을 모두 완료했습니다! 🏆");
        onComplete();
        onNext();
      }
    } else {
      alert("다시 한번 시도해보세요! 힌트를 참고해보세요.");
    }
  };

  const currentProb = problems[currentProblem as keyof typeof problems];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            🎯 Hidden Level
          </span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-yellow-500">⭐</span>
            ))}
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            종합 실전 문제
          </h2>
        </div>
        <p className="text-gray-600">
          Level 1~3에서 배운 모든 내용을 종합하여 실전 같은 컴포넌트를 만들어보세요!
        </p>
        <div className="mt-4">
          <div className="flex gap-1 flex-wrap">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => {
                  setCurrentProblem(num);
                  setShowSolution(false);
                }}
                className={`px-3 py-1 rounded-full text-sm ${
                  currentProblem === num
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                H-{num}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">{currentProb.title}</h3>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-4">
          <p className="mb-2">{currentProb.description}</p>
          {currentProb.example && (
            <CodeBlock language="jsx" code={currentProb.example} />
          )}
        </div>
      </div>

      <TipsBox title="💡 힌트" content={[currentProb.hint]} />

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">
          💻 여기에 코드를 작성해보세요
        </h3>
        <textarea
          value={userAnswers[`problem${currentProblem}` as keyof typeof userAnswers]}
          onChange={(e) => handleAnswer(e.target.value)}
          className="w-full h-80 p-4 border-2 border-purple-200 rounded-lg font-mono text-sm focus:border-purple-400 focus:outline-none"
          placeholder={currentProb.placeholder}
        />
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={checkAnswer}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition font-semibold"
        >
          답안 확인
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition font-semibold"
        >
          {showSolution ? "정답 숨기기" : "정답 보기"}
        </button>
      </div>

      {showSolution && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-3">✅ 정답</h3>
          <CodeBlock language="jsx" code={currentProb.solution} />
        </div>
      )}

      {/* Hidden Level 체크리스트 */}
      <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
        <h4 className="font-bold mb-2 text-purple-800">🏆 Hidden Level 완료 체크리스트</h4>
        <ul className="list-disc ml-5 text-sm text-purple-700">
          <li>JSX, 컴포넌트, 스타일링을 통합적으로 활용할 수 있다</li>
          <li>실제 서비스에서 사용할 수 있는 수준의 컴포넌트를 만들 수 있다</li>
          <li>복잡한 상태 관리와 이벤트 처리를 할 수 있다</li>
          <li>사용자 경험을 고려한 인터랙티브 컴포넌트를 구현할 수 있다</li>
          <li>여러 컴포넌트를 조합해서 완성도 높은 UI를 만들 수 있다</li>
        </ul>
      </div>
    </div>
  );
}