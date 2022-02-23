
import './App.css';
import Signup from './components/authentication/Signup';
import Navbar from './components/Navbar';
import {BrowserRouter,
  Routes,
  Route,} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          
        <Route path='/' element={<Signup/>}></Route>
          <Route path='/home' element={<Navbar />}></Route>

        </Routes>

  
        
          
      </BrowserRouter>

      {/* <Navbar /> */}

      {/* <Signup /> */}

      
 
    </div>
  );
}

export default App;
