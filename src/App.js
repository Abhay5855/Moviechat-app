import "./App.css";
import Signup from "./components/authentication/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/container/Container";
import SearchPage from "./components/searchPage/SearchPage";
import WatchLater from "./components/watch_later/WatchLater";
import {UseAuthContextProvider} from './components/hooks/useAuth';

function App() {
  return (
    <div className="App">
      <UseAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/home" element={<Container />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/watch-later" element={<WatchLater />}></Route>
        </Routes>
      </BrowserRouter>

      </UseAuthContextProvider>
    </div>
    
  );
}

export default App;
