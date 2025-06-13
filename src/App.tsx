// App.tsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import SectionTabs from "./components/SectionTabs";
import ChildrenSection from "./components/ChildrenSection";
import ComponentSection from "./components/ComponentSection";
import EventSection from "./components/EventSection";
import IntroSection from "./components/IntroSection";
import ProjectSection from "./components/ProjectSection";
import PropsSection from "./components/PropsSection";
import WhyReactSection from "./components/WhyReactSection";
import MiniProjectPage from "./MiniProjectPage";
import "./index.css";

export type SectionId =
  | "intro"
  | "why"
  | "component"
  | "props"
  | "children"
  | "event"
  | "project";

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("intro");

  const renderSection = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection />;
      case "why":
        return <WhyReactSection />;
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/mini-project" element={<MiniProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
