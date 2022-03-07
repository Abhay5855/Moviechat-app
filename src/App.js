import "./App.css";

import { UseAuthContextProvider } from "./components/hooks/useAuth";
import MainApp from "./components/main_app/MainApp";

function App() {
  return (
    <div className="App">
      <UseAuthContextProvider>
        <MainApp />
      </UseAuthContextProvider>
    </div>
  );
}

export default App;
