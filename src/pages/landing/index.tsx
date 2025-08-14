import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  badge: string;
  badgeColor: string;
}

const courses: Course[] = [
  {
    id: "react-basics",
    title: "아주 아주 기초적인 React 컴포넌트",
    description:
      "React의 기본 개념부터 실제 프로젝트까지! 컴포넌트, JSX, Props, Events를 단계별로 학습하세요.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=240&fit=crop&crop=center",
    badge: "인기",
    badgeColor: "#3B82F6",
  },
  {
    id: "react-basics-exercise",
    title: "React 연습 문제 도전하기",
    description:
      "30개의 연습 문제로 React 실력을 확실하게! 기초부터 응용까지 단계별로 도전해보세요.",
    thumbnail:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=240&fit=crop&crop=center",
    badge: "도전",
    badgeColor: "#7C3AED",
  },
  {
    id: "react-use-state",
    title: "React useState 마스터하기",
    description:
      "상태 관리의 핵심 원리를 이해하고 React의 리렌더링 메커니즘을 학습합니다. 인터랙티브한 예제로 배워보세요!",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop&crop=center",
    badge: "NEW",
    badgeColor: "#10B981",
  },
];

function CourseCard({
  course,
  isVisible,
}: {
  course: Course;
  isVisible: boolean;
}) {
  const getPath = (courseId: string) => {
    if (courseId === "react-basics-exercise") {
      return "/exercise";
    }
    if (courseId === "react-use-state") {
      return "/use-state";
    }
    return `/main`;
  };

  return (
    <Link to={getPath(course.id)}>
      <div
        className={`bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-700 cursor-pointer overflow-hidden group max-w-md mx-auto ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover bg-gray-100 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span
            className="absolute top-4 left-4 text-white text-xs font-semibold rounded-full px-3 py-1 transform group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: course.badgeColor }}
          >
            {course.badge}
          </span>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {course.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {course.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
              바로 시작하기
            </div>
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              학습 시작 →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// 히어로/인트로 섹션
function HeroSection({ isVisible }: { isVisible: boolean }) {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden relative snap-start">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* 배경 장식 요소들 */}
      <div
        className={`absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      ></div>
      <div
        className={`absolute bottom-40 right-32 w-24 h-24 bg-white/10 rounded-full transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      ></div>
      <div
        className={`absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
        }`}
      ></div>

      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        {/* 메인 타이틀 */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            안녕하세요! 👋
          </h1>
        </div>

        {/* 서브 타이틀 */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-100">
            React와 함께하는 첫 여행에 오신 것을 환영합니다 ✨
          </h2>
        </div>

        {/* 설명 텍스트 */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
            코딩이 처음이신가요? 걱정 마세요! 🤗
            <br />
            디자이너 눈높이에 맞춰 쉽고 재미있게 React를 배워보세요
          </p>
        </div>

        {/* React 소개 박스들 */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🎨",
              title: "디자이너 친화적",
              desc: "피그마처럼 컴포넌트를 조립해요",
            },
            {
              icon: "⚡",
              title: "빠른 학습",
              desc: "HTML/CSS 알면 금방 배울 수 있어요",
            },
            {
              icon: "🚀",
              title: "무한 가능성",
              desc: "웹사이트부터 앱까지 모든 걸 만들어요",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <div
          className={`mt-12 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
            <p className="text-lg">아래로 스크롤해서 시작해보세요 👇</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 강의 섹션
function CourseSection({ isVisible }: { isVisible: boolean }) {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              함께 시작해볼까요? 💕
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2시간이면 충분해요! 차근차근 따라하면서 첫 React 프로젝트를
              완성해보세요.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function LandingPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // 컴포넌트 마운트 시 첫 번째 섹션 애니메이션 활성화
  useEffect(() => {
    // 약간의 지연 후 애니메이션 시작 (DOM이 완전히 렌더링된 후)
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer로 현재 섹션 감지
  useEffect(() => {
    const sections = document.querySelectorAll(".snap-start");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = Array.from(sections).indexOf(entry.target);
            setActiveSection(sectionIndex);
          }
        });
      },
      {
        threshold: 0.6, // 60% 이상 보일 때 활성화
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <HeroSection isVisible={isInitialized && activeSection === 0} />
      <CourseSection isVisible={activeSection === 1} />

      {/* 섹션 인디케이터 */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-3 z-50">
        {[0, 1].map((index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSection
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
