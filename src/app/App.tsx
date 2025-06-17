import { AppProviders } from "./providers";
import { AppRouting } from "./routing";
import "~/shared/config/index.css";

function App() {
  return (
    <AppProviders>
      <AppRouting />
    </AppProviders>
  );
}

export default App;
