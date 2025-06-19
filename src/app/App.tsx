import { AppProviders } from "./providers";
import { AppRouter } from "./routing";
import "~/shared/config/index.css";

function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
