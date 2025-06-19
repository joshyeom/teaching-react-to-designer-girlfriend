import { createRoot } from "react-dom/client";
import { AppProviders } from "~/app/providers";
import { AppRouter } from "~/app/routing";
import "~/shared/config/index.css";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <AppRouter />
  </AppProviders>
);
