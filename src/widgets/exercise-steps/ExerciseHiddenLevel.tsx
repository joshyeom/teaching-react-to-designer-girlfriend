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
      title: "문제 H-1: 멋진 명함 카드 ⭐⭐",
      description: "회사 명함처럼 보이는 카드 컴포넌트 만들기",
      example: `// 요구사항:
// - 이름, 직책, 회사, 이메일을 표시
// - 카드 형태의 디자인 (그림자, 둥근 모서리)
// - 회사 로고 영역 (색상 박스로 대체)
// - 깔끔한 레이아웃`,
      hint: "div로 구조를 잡고 인라인 스타일로 꾸며보세요",
      solution: `function BusinessCard() {
  return (
    <div style={{
      width: '320px',
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#3b82f6',
        borderRadius: '8px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        A
      </div>
      <h2 style={{ margin: '0 0 4px 0', fontSize: '22px', color: '#1f2937' }}>김세진</h2>
      <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '16px' }}>UI/UX 디자이너</p>
      <p style={{ margin: '0 0 12px 0', color: '#9ca3af', fontSize: '14px' }}>아이디어 컴퍼니</p>
      <p style={{ margin: 0, color: '#3b82f6', fontSize: '14px' }}>sejin@company.com</p>
    </div>
  );
}`,
      placeholder: `function BusinessCard() {
  return (
    <div style={{
      // 카드 스타일을 작성하세요
    }}>
      {/* 로고 영역 */}
      <div style={{
        // 로고 박스 스타일
      }}>
        A
      </div>
      {/* 명함 정보들을 작성하세요 */}
    </div>
  );
}`,
    },
    2: {
      title: "문제 H-2: 가격표 컴포넌트 ⭐⭐",
      description: "상품 가격과 할인 정보를 보여주는 컴포넌트",
      example: `// 요구사항:
// - 상품명: "디자인 시스템 템플릿"
// - 원가: 50,000원 (취소선)
// - 할인가: 39,000원 (큰 글씨, 파란색)
// - 할인율: 22% (빨간 배지)`,
      hint: "span 태그와 textDecoration 스타일을 활용하세요",
      solution: `function PriceCard() {
  return (
    <div style={{
      padding: '20px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: 'white'
    }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px' }}>디자인 시스템 템플릿</h3>
      <div style={{ marginBottom: '8px' }}>
        <span style={{
          textDecoration: 'line-through',
          color: '#9ca3af',
          marginRight: '8px'
        }}>
          50,000원
        </span>
        <span style={{
          backgroundColor: '#ef4444',
          color: 'white',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          22% 할인
        </span>
      </div>
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#3b82f6'
      }}>
        39,000원
      </div>
    </div>
  );
}`,
      placeholder: `function PriceCard() {
  return (
    <div style={{
      // 카드 스타일을 작성하세요
    }}>
      <h3>디자인 시스템 템플릿</h3>
      {/* 가격 정보를 작성하세요 */}
    </div>
  );
}`,
    },
    3: {
      title: "문제 H-3: 알림 메시지 컴포넌트 ⭐⭐",
      description: "성공, 경고, 에러 3가지 타입의 알림 메시지",
      example: `// 요구사항:
// - 성공 메시지: 초록색 배경, "저장되었습니다!"
// - 경고 메시지: 노란색 배경, "주의가 필요합니다"
// - 에러 메시지: 빨간색 배경, "오류가 발생했습니다"
// - 각각 적절한 아이콘(✅, ⚠️, ❌)`,
      hint: "3개의 div를 만들고 각각 다른 배경색을 적용하세요",
      solution: `function AlertMessages() {
  return (
    <div>
      <div style={{
        backgroundColor: '#dcfce7',
        border: '1px solid #bbf7d0',
        color: '#166534',
        padding: '12px 16px',
        borderRadius: '6px',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span>✅</span>
        <span>저장되었습니다!</span>
      </div>
      
      <div style={{
        backgroundColor: '#fef3c7',
        border: '1px solid #fed7aa',
        color: '#92400e',
        padding: '12px 16px',
        borderRadius: '6px',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span>⚠️</span>
        <span>주의가 필요합니다</span>
      </div>
      
      <div style={{
        backgroundColor: '#fee2e2',
        border: '1px solid #fecaca',
        color: '#dc2626',
        padding: '12px 16px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span>❌</span>
        <span>오류가 발생했습니다</span>
      </div>
    </div>
  );
}`,
      placeholder: `function AlertMessages() {
  return (
    <div>
      {/* 성공 메시지 */}
      <div style={{
        // 초록색 스타일을 작성하세요
      }}>
        <span>✅</span>
        <span>저장되었습니다!</span>
      </div>
      
      {/* 경고와 에러 메시지도 작성하세요 */}
    </div>
  );
}`,
    },
    4: {
      title: "문제 H-4: 팀원 소개 카드 ⭐⭐⭐",
      description: "프로필 사진, 이름, 역할이 있는 팀원 카드 3개",
      example: `// 요구사항:
// - 3명의 팀원 카드를 가로로 나열
// - 각 카드: 프로필 이미지, 이름, 역할, 소개
// - 호버 시 살짝 올라가는 효과
// - 통일된 디자인`,
      hint: "display: flex를 사용해서 카드들을 나란히 배치하세요",
      solution: `function TeamCards() {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      <div style={{
        width: '200px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#f3f4f6',
          borderRadius: '50%',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}>
          👩‍💻
        </div>
        <h3 style={{ margin: '0 0 4px 0' }}>김세진</h3>
        <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '14px' }}>UI/UX 디자이너</p>
        <p style={{ margin: 0, color: '#9ca3af', fontSize: '12px' }}>사용자 경험을 개선합니다</p>
      </div>
      
      <div style={{
        width: '200px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#f3f4f6',
          borderRadius: '50%',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}>
          👨‍💻
        </div>
        <h3 style={{ margin: '0 0 4px 0' }}>이민수</h3>
        <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '14px' }}>프론트엔드 개발자</p>
        <p style={{ margin: 0, color: '#9ca3af', fontSize: '12px' }}>React로 UI를 구현합니다</p>
      </div>
      
      <div style={{
        width: '200px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#f3f4f6',
          borderRadius: '50%',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}>
          👩‍💼
        </div>
        <h3 style={{ margin: '0 0 4px 0' }}>박지영</h3>
        <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '14px' }}>프로젝트 매니저</p>
        <p style={{ margin: 0, color: '#9ca3af', fontSize: '12px' }}>프로젝트를 관리합니다</p>
      </div>
    </div>
  );
}`,
      placeholder: `function TeamCards() {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      // 가로 정렬 스타일을 작성하세요
    }}>
      {/* 첫 번째 팀원 카드 */}
      <div style={{
        // 카드 스타일을 작성하세요
      }}>
        {/* 프로필 이미지 영역 */}
        <div style={{
          // 원형 이미지 스타일
        }}>
          👩‍💻
        </div>
        {/* 이름, 역할, 소개를 작성하세요 */}
      </div>
      
      {/* 나머지 2명의 카드도 작성하세요 */}
    </div>
  );
}`,
    },
    5: {
      title: "문제 H-5: 메뉴 네비게이션 ⭐⭐⭐",
      description: "웹사이트 상단 메뉴 바 만들기",
      example: `// 요구사항:
// - 로고 영역 (왼쪽)
// - 메뉴 항목들: 홈, 소개, 서비스, 연락처 (가운데)
// - 로그인 버튼 (오른쪽)
// - 전체를 가로로 배치`,
      hint: "justify-content: space-between을 사용해서 양 끝과 가운데 배치하세요",
      solution: `function Navigation() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb'
    }}>
      {/* 로고 */}
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#3b82f6'
      }}>
        MyCompany
      </div>
      
      {/* 메뉴 */}
      <div style={{
        display: 'flex',
        gap: '32px'
      }}>
        <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>홈</a>
        <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>소개</a>
        <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>서비스</a>
        <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>연락처</a>
      </div>
      
      {/* 로그인 버튼 */}
      <button style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        로그인
      </button>
    </nav>
  );
}`,
      placeholder: `function Navigation() {
  return (
    <nav style={{
      display: 'flex',
      // 네비게이션 스타일을 작성하세요
    }}>
      {/* 로고 */}
      <div>
        MyCompany
      </div>
      
      {/* 메뉴들을 작성하세요 */}
      
      {/* 로그인 버튼을 작성하세요 */}
    </nav>
  );
}`,
    },
    6: {
      title: "문제 H-6: 상품 목록 ⭐⭐⭐",
      description: "3개의 상품을 그리드로 배치한 상품 목록",
      example: `// 요구사항:
// - 3개의 상품 카드
// - 각 카드: 이미지 영역(색상 박스), 제목, 가격
// - 그리드 레이아웃으로 배치
// - 깔끔한 카드 디자인`,
      hint: "display: grid를 사용해서 상품들을 배치하세요",
      solution: `function ProductList() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      padding: '20px'
    }}>
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}>
        <div style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#fecaca',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px'
        }}>
          📱
        </div>
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>스마트폰</h3>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#3b82f6' }}>
            299,000원
          </p>
        </div>
      </div>
      
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}>
        <div style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#fed7aa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px'
        }}>
          💻
        </div>
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>노트북</h3>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#3b82f6' }}>
            899,000원
          </p>
        </div>
      </div>
      
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}>
        <div style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#c7d2fe',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px'
        }}>
          🎧
        </div>
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>헤드폰</h3>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#3b82f6' }}>
            199,000원
          </p>
        </div>
      </div>
    </div>
  );
}`,
      placeholder: `function ProductList() {
  return (
    <div style={{
      display: 'grid',
      // 그리드 레이아웃을 작성하세요
    }}>
      {/* 첫 번째 상품 */}
      <div style={{
        // 카드 스타일을 작성하세요
      }}>
        <div style={{
          // 이미지 영역 스타일
        }}>
          📱
        </div>
        <div>
          {/* 제목과 가격을 작성하세요 */}
        </div>
      </div>
      
      {/* 나머지 상품들도 작성하세요 */}
    </div>
  );
}`,
    },
    7: {
      title: "문제 H-7: 통계 대시보드 ⭐⭐⭐⭐",
      description: "4개의 통계 카드가 있는 대시보드",
      example: `// 요구사항:
// - 4개의 통계 카드 (방문자, 주문, 매출, 고객)
// - 각 카드: 아이콘, 제목, 숫자, 증감률
// - 2x2 그리드 레이아웃
// - 시각적으로 구분되는 색상`,
      hint: "grid-template-columns: repeat(2, 1fr)로 2열 그리드를 만드세요",
      solution: `function Dashboard() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderLeft: '4px solid #3b82f6'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '14px' }}>총 방문자</p>
            <p style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 'bold' }}>12,345</p>
            <p style={{ margin: 0, color: '#10b981', fontSize: '12px' }}>+12% 증가</p>
          </div>
          <div style={{ fontSize: '32px' }}>👥</div>
        </div>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderLeft: '4px solid #10b981'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '14px' }}>총 주문</p>
            <p style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 'bold' }}>1,234</p>
            <p style={{ margin: 0, color: '#10b981', fontSize: '12px' }}>+8% 증가</p>
          </div>
          <div style={{ fontSize: '32px' }}>📦</div>
        </div>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderLeft: '4px solid #f59e0b'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '14px' }}>총 매출</p>
            <p style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 'bold' }}>₩5.6M</p>
            <p style={{ margin: 0, color: '#ef4444', fontSize: '12px' }}>-3% 감소</p>
          </div>
          <div style={{ fontSize: '32px' }}>💰</div>
        </div>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderLeft: '4px solid #8b5cf6'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '14px' }}>신규 고객</p>
            <p style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 'bold' }}>89</p>
            <p style={{ margin: 0, color: '#10b981', fontSize: '12px' }}>+15% 증가</p>
          </div>
          <div style={{ fontSize: '32px' }}>⭐</div>
        </div>
      </div>
    </div>
  );
}`,
      placeholder: `function Dashboard() {
  return (
    <div style={{
      display: 'grid',
      // 2x2 그리드를 작성하세요
    }}>
      {/* 방문자 카드 */}
      <div style={{
        // 카드 스타일을 작성하세요
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p>총 방문자</p>
            <p>12,345</p>
            <p>+12% 증가</p>
          </div>
          <div>👥</div>
        </div>
      </div>
      
      {/* 나머지 3개 카드도 작성하세요 */}
    </div>
  );
}`,
    },
    8: {
      title: "문제 H-8: 피처 소개 섹션 ⭐⭐⭐⭐",
      description: "3개의 주요 기능을 소개하는 섹션",
      example: `// 요구사항:
// - 제목: "주요 기능"
// - 3개의 피처 카드 (디자인, 개발, 배포)
// - 각 카드: 아이콘, 제목, 설명
// - 가로 배치`,
      hint: "섹션 전체를 감싸는 div와 카드들을 감싸는 div를 따로 만드세요",
      solution: `function FeatureSection() {
  return (
    <section style={{
      padding: '60px 20px',
      backgroundColor: '#f9fafb',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: '#1f2937'
      }}>
        주요 기능
      </h2>
      <p style={{
        fontSize: '18px',
        color: '#6b7280',
        marginBottom: '48px'
      }}>
        우리 서비스의 핵심 기능들을 소개합니다
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          width: '280px'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#dbeafe',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '28px'
          }}>
            🎨
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '12px'
          }}>
            디자인
          </h3>
          <p style={{
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            직관적이고 아름다운 사용자 인터페이스를 제공합니다
          </p>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          width: '280px'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#d1fae5',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '28px'
          }}>
            ⚙️
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '12px'
          }}>
            개발
          </h3>
          <p style={{
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            최신 기술로 안정적이고 빠른 서비스를 구축합니다
          </p>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          width: '280px'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#fef3c7',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '28px'
          }}>
            🚀
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '12px'
          }}>
            배포
          </h3>
          <p style={{
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            클라우드 기반으로 안전하고 확장 가능한 배포를 제공합니다
          </p>
        </div>
      </div>
    </section>
  );
}`,
      placeholder: `function FeatureSection() {
  return (
    <section style={{
      // 섹션 스타일을 작성하세요
    }}>
      <h2>주요 기능</h2>
      <p>우리 서비스의 핵심 기능들을 소개합니다</p>
      
      <div style={{
        display: 'flex',
        // 카드들을 가로 배치하는 스타일을 작성하세요
      }}>
        {/* 디자인 카드 */}
        <div style={{
          // 카드 스타일을 작성하세요
        }}>
          <div style={{
            // 아이콘 원형 배경 스타일
          }}>
            🎨
          </div>
          <h3>디자인</h3>
          <p>직관적이고 아름다운 사용자 인터페이스를 제공합니다</p>
        </div>
        
        {/* 나머지 2개 카드도 작성하세요 */}
      </div>
    </section>
  );
}`,
    },
    9: {
      title: "문제 H-9: 연락처 폼 ⭐⭐⭐⭐⭐",
      description: "이름, 이메일, 메시지 입력이 있는 연락처 폼",
      example: `// 요구사항:
// - 폼 제목: "연락하기"
// - 입력 필드: 이름, 이메일, 메시지(textarea)
// - 전송 버튼
// - 깔끔한 폼 디자인`,
      hint: "form 태그를 사용하고 input과 textarea를 스타일링하세요",
      solution: `function ContactForm() {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '24px',
        textAlign: 'center',
        color: '#1f2937'
      }}>
        연락하기
      </h2>
      
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#374151'
          }}>
            이름
          </label>
          <input
            type="text"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            placeholder="이름을 입력하세요"
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#374151'
          }}>
            이메일
          </label>
          <input
            type="email"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            placeholder="이메일을 입력하세요"
          />
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#374151'
          }}>
            메시지
          </label>
          <textarea
            rows={5}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '16px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
            placeholder="메시지를 입력하세요"
          />
        </div>
        
        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '14px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          전송하기
        </button>
      </form>
    </div>
  );
}`,
      placeholder: `function ContactForm() {
  return (
    <div style={{
      // 폼 컨테이너 스타일을 작성하세요
    }}>
      <h2>연락하기</h2>
      
      <form>
        <div>
          <label>이름</label>
          <input
            type="text"
            style={{
              // 입력 필드 스타일을 작성하세요
            }}
            placeholder="이름을 입력하세요"
          />
        </div>
        
        {/* 이메일과 메시지 필드도 작성하세요 */}
        
        <button type="submit" style={{
          // 버튼 스타일을 작성하세요
        }}>
          전송하기
        </button>
      </form>
    </div>
  );
}`,
    },
    10: {
      title: "문제 H-10: 완전한 랜딩 페이지 ⭐⭐⭐⭐⭐",
      description: "히어로 섹션, 기능 소개, CTA가 있는 미니 랜딩 페이지",
      example: `// 요구사항:
// - 히어로 섹션: 제목, 부제목, 버튼
// - 기능 소개: 3개의 간단한 기능 카드
// - CTA 섹션: 행동 유도 문구와 버튼
// - 전체적으로 통일된 디자인`,
      hint: "여러 섹션을 div로 나누고 각각 다른 배경색으로 구분하세요",
      solution: `function LandingPage() {
  return (
    <div>
      {/* 히어로 섹션 */}
      <section style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}>
          혁신적인 디자인 툴
        </h1>
        <p style={{
          fontSize: '20px',
          marginBottom: '32px',
          color: '#d1d5db'
        }}>
          더 쉽고 빠르게 아름다운 디자인을 만들어보세요
        </p>
        <button style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '16px 32px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          무료로 시작하기
        </button>
      </section>
      
      {/* 기능 소개 */}
      <section style={{
        backgroundColor: '#f9fafb',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          marginBottom: '48px',
          color: '#1f2937'
        }}>
          핵심 기능
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            width: '200px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎨</div>
            <h3 style={{ marginBottom: '8px' }}>쉬운 디자인</h3>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>드래그 앤 드롭으로 간편하게</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            width: '200px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>⚡</div>
            <h3 style={{ marginBottom: '8px' }}>빠른 속도</h3>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>실시간으로 결과 확인</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            width: '200px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🤝</div>
            <h3 style={{ marginBottom: '8px' }}>팀 협업</h3>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>동시에 함께 작업</p>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}>
          지금 바로 시작하세요
        </h2>
        <p style={{
          fontSize: '18px',
          marginBottom: '32px',
          opacity: 0.9
        }}>
          무료 체험으로 모든 기능을 경험해보세요
        </p>
        <button style={{
          backgroundColor: 'white',
          color: '#3b82f6',
          padding: '16px 32px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          무료 체험 시작
        </button>
      </section>
    </div>
  );
}`,
      placeholder: `function LandingPage() {
  return (
    <div>
      {/* 히어로 섹션 */}
      <section style={{
        backgroundColor: '#1f2937',
        // 히어로 섹션 스타일을 작성하세요
      }}>
        <h1>혁신적인 디자인 툴</h1>
        <p>더 쉽고 빠르게 아름다운 디자인을 만들어보세요</p>
        <button>무료로 시작하기</button>
      </section>
      
      {/* 기능 소개 */}
      <section style={{
        backgroundColor: '#f9fafb',
        // 기능 소개 섹션 스타일을 작성하세요
      }}>
        <h2>핵심 기능</h2>
        <div style={{
          display: 'flex',
          // 기능 카드들 배치 스타일을 작성하세요
        }}>
          {/* 3개의 기능 카드를 작성하세요 */}
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section style={{
        backgroundColor: '#3b82f6',
        // CTA 섹션 스타일을 작성하세요
      }}>
        <h2>지금 바로 시작하세요</h2>
        <p>무료 체험으로 모든 기능을 경험해보세요</p>
        <button>무료 체험 시작</button>
      </section>
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

    // 각 문제별 답안 체크 로직 (간단화)
    switch (currentProblem) {
      case 1:
        isCorrect = currentAnswer.includes("BusinessCard") && 
                   currentAnswer.includes("김세진") && 
                   currentAnswer.includes("UI/UX 디자이너");
        break;
      case 2:
        isCorrect = currentAnswer.includes("PriceCard") && 
                   currentAnswer.includes("textDecoration") && 
                   currentAnswer.includes("50,000");
        break;
      case 3:
        isCorrect = currentAnswer.includes("AlertMessages") && 
                   currentAnswer.includes("backgroundColor") && 
                   currentAnswer.includes("✅");
        break;
      case 4:
        isCorrect = currentAnswer.includes("TeamCards") && 
                   currentAnswer.includes("display: 'flex'") && 
                   currentAnswer.includes("김세진");
        break;
      case 5:
        isCorrect = currentAnswer.includes("Navigation") && 
                   currentAnswer.includes("justify-content") && 
                   currentAnswer.includes("MyCompany");
        break;
      case 6:
        isCorrect = currentAnswer.includes("ProductList") && 
                   currentAnswer.includes("display: 'grid'") && 
                   currentAnswer.includes("스마트폰");
        break;
      case 7:
        isCorrect = currentAnswer.includes("Dashboard") && 
                   currentAnswer.includes("grid-template-columns") && 
                   currentAnswer.includes("12,345");
        break;
      case 8:
        isCorrect = currentAnswer.includes("FeatureSection") && 
                   currentAnswer.includes("section") && 
                   currentAnswer.includes("주요 기능");
        break;
      case 9:
        isCorrect = currentAnswer.includes("ContactForm") && 
                   currentAnswer.includes("form") && 
                   currentAnswer.includes("textarea");
        break;
      case 10:
        isCorrect = currentAnswer.includes("LandingPage") && 
                   currentAnswer.includes("section") && 
                   currentAnswer.includes("혁신적인 디자인 툴");
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
            {[1, 2, 3].map((i) => (
              <span key={i} className="text-yellow-500">⭐</span>
            ))}
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            실전 응용 문제
          </h2>
        </div>
        <p className="text-gray-600">
          Level 1~3에서 배운 JSX, 컴포넌트, 스타일링을 활용해서 실제 웹사이트에서 볼 수 있는 컴포넌트들을 만들어보세요!
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
          <li>JSX 문법을 자유자재로 활용할 수 있다</li>
          <li>컴포넌트 구조를 체계적으로 설계할 수 있다</li>
          <li>인라인 스타일로 아름다운 디자인을 만들 수 있다</li>
          <li>실제 웹사이트에 사용할 수 있는 수준의 컴포넌트를 구현할 수 있다</li>
          <li>복잡한 레이아웃을 flexbox와 grid로 만들 수 있다</li>
        </ul>
      </div>
    </div>
  );
}