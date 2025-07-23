import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "~/pages/landing";
import { MainPage } from "~/pages/main";
import { ExercisePage } from "~/pages/exercise";
import { MiniProjectPage } from "~/pages/mini-project";

// 30개 문제 리스트
export const exerciseProblems = [
  // Level 1: JSX 기본 문법
  { id: 1, level: 1, title: "JSX 변환하기", difficulty: 1 },
  { id: 2, level: 1, title: "JavaScript 표현식 사용하기", difficulty: 1 },
  { id: 3, level: 1, title: "계산된 값 표시하기", difficulty: 1 },

  // Level 2: 정적 컴포넌트 만들기
  { id: 4, level: 2, title: "첫 번째 컴포넌트", difficulty: 1 },
  { id: 5, level: 2, title: "프로필 카드 컴포넌트", difficulty: 2 },
  { id: 6, level: 2, title: "버튼 컴포넌트", difficulty: 2 },

  // Level 3: 스타일 적용하기
  { id: 7, level: 3, title: "인라인 스타일 적용", difficulty: 2 },
  { id: 8, level: 3, title: "CSS 클래스 사용하기", difficulty: 2 },
  { id: 9, level: 3, title: "호버 효과 버튼", difficulty: 3 },

  // Level 4: Props 기초
  { id: 10, level: 4, title: "인사말 컴포넌트", difficulty: 2 },
  { id: 11, level: 4, title: "제목과 부제목 컴포넌트", difficulty: 2 },
  { id: 12, level: 4, title: "사용자 정보 카드", difficulty: 3 },

  // Level 5: Props 심화
  { id: 13, level: 5, title: "토글 가능한 알림", difficulty: 3 },
  { id: 14, level: 5, title: "진행률 표시 바", difficulty: 4 },
  { id: 15, level: 5, title: "제품 가격 카드", difficulty: 4 },

  // Level 6: Children Props
  { id: 16, level: 6, title: "기본 래퍼 컴포넌트", difficulty: 3 },
  { id: 17, level: 6, title: "모달 컴포넌트", difficulty: 4 },
  { id: 18, level: 6, title: "레이아웃 컴포넌트", difficulty: 4 },

  // Level 7: 조건부 렌더링
  { id: 19, level: 7, title: "로그인 상태 표시", difficulty: 3 },
  { id: 20, level: 7, title: "메시지 뱃지", difficulty: 4 },
  { id: 21, level: 7, title: "상품 상태 카드", difficulty: 4 },

  // Level 8: 리스트 렌더링
  { id: 22, level: 8, title: "간단한 목록 표시", difficulty: 3 },
  { id: 23, level: 8, title: "팀원 목록 카드", difficulty: 4 },
  { id: 24, level: 8, title: "필터링 가능한 목록", difficulty: 5 },

  // Level 9: 복합 컴포넌트
  { id: 25, level: 9, title: "기본 상품 카드", difficulty: 4 },
  { id: 26, level: 9, title: "인터랙티브 상품 카드", difficulty: 5 },
  { id: 27, level: 9, title: "상품 카드 그리드", difficulty: 5 },

  // Level 10: 미니 프로젝트
  { id: 28, level: 10, title: "팀 소개 섹션", difficulty: 6 },
  { id: 29, level: 10, title: "가격 테이블", difficulty: 6 },
  { id: 30, level: 10, title: "블로그 포스트 목록", difficulty: 7 },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/exercise",
    element: <ExercisePage />,
  },
  {
    path: "/exercise/:problemId",
    element: <ExercisePage />,
  },
  {
    path: "/hidden-level",
    element: <ExercisePage />,
  },
  {
    path: "/mini-project",
    element: <MiniProjectPage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
