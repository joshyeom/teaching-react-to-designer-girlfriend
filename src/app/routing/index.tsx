import { Routes, Route } from "react-router-dom";
import { MainPage } from "~/pages/main";
import { MiniProjectPage } from "~/pages/mini-project";

export function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mini-project" element={<MiniProjectPage />} />
    </Routes>
  );
}