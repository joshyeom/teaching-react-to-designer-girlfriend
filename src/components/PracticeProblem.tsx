import { useState } from "react";

interface Problem {
  id: number;
  title: string;
  description: string;
  starterCode: string;
  hint?: string;
  solution?: string;
}

interface PracticeProblemsProps {
  problems: Problem[];
}

export default function PracticeProblems({ problems }: PracticeProblemsProps) {
  const [showHint, setShowHint] = useState<{ [key: number]: boolean }>({});
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = async (code: string, problemId: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(problemId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mt-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-bold mb-2">🏋️‍♀️ 연습문제</h3>
        <p className="text-gray-600">
          CodeSandbox에 코드를 복사해서 직접 해보세요!
        </p>
      </div>

      <div className="space-y-6">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden"
          >
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <span className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  {problem.id}
                </span>
                {problem.title}
              </h4>
              <p className="text-gray-600 mt-2">{problem.description}</p>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-semibold text-sm text-gray-700">
                    시작 코드:
                  </label>
                  <button
                    onClick={() =>
                      copyToClipboard(problem.starterCode, problem.id)
                    }
                    className={`px-3 py-1 text-sm rounded-md transition-all ${
                      copiedId === problem.id
                        ? "bg-green-500 text-white"
                        : "bg-indigo-500 text-white hover:bg-indigo-600"
                    }`}
                  >
                    {copiedId === problem.id ? "✓ 복사됨!" : "📋 복사하기"}
                  </button>
                </div>
                <pre className="bg-slate-800 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{problem.starterCode}</code>
                </pre>
              </div>

              {problem.hint && (
                <div className="mb-4">
                  <button
                    onClick={() =>
                      setShowHint({
                        ...showHint,
                        [problem.id]: !showHint[problem.id],
                      })
                    }
                    className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center gap-1"
                  >
                    💡 힌트 {showHint[problem.id] ? "숨기기" : "보기"}
                  </button>
                  {showHint[problem.id] && (
                    <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm">
                      {problem.hint}
                    </div>
                  )}
                </div>
              )}

              {problem.solution && (
                <div>
                  <button
                    onClick={() =>
                      setShowSolution({
                        ...showSolution,
                        [problem.id]: !showSolution[problem.id],
                      })
                    }
                    className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-1"
                  >
                    ✅ 정답 {showSolution[problem.id] ? "숨기기" : "보기"}
                  </button>
                  {showSolution[problem.id] && (
                    <div className="mt-2">
                      <pre className="bg-green-50 border border-green-200 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{problem.solution}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 <strong>팁:</strong> CodeSandbox에서 새 React 프로젝트를 만들고,
          App.js 파일에 복사한 코드를 붙여넣으세요!
        </p>
      </div>
    </div>
  );
}
