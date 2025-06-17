import { useState } from "react";
import {
  Header,
  Timeline,
  SectionTabs,
  IntroSection,
  WhyReactSection,
  JSXSection,
  ComponentSection,
  PropsSection,
  ChildrenSection,
  EventSection,
  ProjectSection,
} from "~/widgets";

export type SectionId =
  | "intro"
  | "why"
  | "component"
  | "props"
  | "children"
  | "event"
  | "project"
  | "jsx";

export function MainPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("intro");

  const renderSection = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection />;
      case "why":
        return <WhyReactSection />;
      case "jsx":
        return <JSXSection />;
      case "component":
        return <ComponentSection />;
      case "props":
        return <PropsSection />;
      case "children":
        return <ChildrenSection />;
      case "event":
        return <EventSection />;
      case "project":
        return <ProjectSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Timeline activeSection={activeSection} />
        <SectionTabs
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <div className="mt-8 transition-all duration-300">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}
