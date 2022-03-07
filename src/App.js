import "./App.css";
import Signup from "./components/authentication/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {UseAuthContextProvider} from './components/hooks/useAuth';
import MainApp from "./components/main_app/MainApp";

function App() {
  return (
    <div className="App">
      <UseAuthContextProvider>

        
      {/* <BrowserRouter> */}
      
          {/* <Route path="/" element={<Signup  />}></Route>
          <Route path="/home" element={<Container />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/watch-later" element={<WatchLater />}></Route> */}
           <MainApp />

      
      {/* </BrowserRouter> */}

      </UseAuthContextProvider>
    </div>
    
  );
}

export default App;
