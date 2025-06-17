// components/SectionTabs.tsx
import { SectionId } from "~/pages/main";

interface SectionTabsProps {
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
}

interface Tab {
  id: SectionId;
  label: string;
  icon: string;
}

const tabs: Tab[] = [
  { id: "intro", label: "들어가며", icon: "🎯" },
  { id: "why", label: "왜 React?", icon: "🤔" },
  { id: "jsx", label: "JSX", icon: "📝" },
  { id: "component", label: "컴포넌트", icon: "🧩" },
  { id: "props", label: "Props", icon: "📦" },
  { id: "children", label: "Children", icon: "🎁" },
  { id: "event", label: "클릭 이벤트", icon: "🎉" },
  { id: "project", label: "최종 프로젝트", icon: "🏆" },
];

export const SectionTabs = ({
  activeSection,
  onSectionChange,
}: SectionTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSectionChange(tab.id)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 hover:shadow-md ${
            activeSection === tab.id
              ? "bg-indigo-500 text-white"
              : "bg-white text-gray-700 shadow"
          }`}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
};
