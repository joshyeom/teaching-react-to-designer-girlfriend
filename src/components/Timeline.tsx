// components/Timeline.tsx
import React from "react";
import { SectionId } from "../App";

interface TimelineProps {
  activeSection: SectionId;
}

interface TimelineItem {
  id: SectionId;
  time: string;
  title: string;
}

const timelineItems: TimelineItem[] = [
  { id: "intro", time: "시작", title: "들어가며" },
  { id: "why", time: "15분", title: "왜 React?" },
  { id: "component", time: "30분", title: "컴포넌트" },
  { id: "props", time: "30분", title: "Props" },
  { id: "children", time: "25분", title: "Children" },
  { id: "event", time: "10분", title: "이벤트" },
  { id: "project", time: "20분", title: "미니 프로젝트" },
];

function Timeline({ activeSection }: TimelineProps) {
  const progressMap: Record<SectionId, number> = {
    intro: 0,
    why: 15,
    component: 30,
    props: 50,
    children: 70,
    event: 85,
    project: 100,
  };

  const progress = progressMap[activeSection] || 0;

  return (
    <div className="bg-white rounded-2xl p-8 mb-8 shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        ⏰ 오늘의 여정
      </h2>

      <div className="relative px-4 py-8">
        {/* Progress Line Background */}
        <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-200 -translate-y-1/2" />

        {/* Timeline Items */}
        <div className="relative grid grid-cols-5 gap-4">
          {timelineItems.slice(1, 6).map((item, index) => (
            <div key={item.id} className="relative text-center z-10">
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold shadow-md transition-all ${
                  progressMap[item.id] <= progress
                    ? "bg-indigo-500 shadow-indigo-300"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <div className="text-sm text-gray-500 mb-1">{item.time}</div>
              <div className="text-sm font-semibold text-gray-800">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default Timeline;
