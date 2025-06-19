import { useState } from "react";
import {
  Header,
  Timeline,
  SectionTabs,
  Step1Intro,
  Step2WhyReact,
  Step4JSX,
  Step3Component,
  Step5Props,
  Step6Children,
  Step7Events,
  Step8Project,
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
        return <Step1Intro />;
      case "why":
        return <Step2WhyReact />;
      case "jsx":
        return <Step4JSX />;
      case "component":
        return <Step3Component />;
      case "props":
        return <Step5Props />;
      case "children":
        return <Step6Children />;
      case "event":
        return <Step7Events />;
      case "project":
        return <Step8Project />;
      default:
        return <Step1Intro />;
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
