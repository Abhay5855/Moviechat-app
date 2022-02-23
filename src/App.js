
import './App.css';
import Signup from './components/authentication/Signup';
import {BrowserRouter,
  Routes,
  Route,} from 'react-router-dom';
import Container from './components/container/Container';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          
        <Route path='/' element={<Signup/>}></Route>
          <Route path='/home' element={<Container/>}></Route>

        </Routes>

  
        
          
      </BrowserRouter>

      {/* <Navbar /> */}

      {/* <Signup /> */}

      
 
    </div>
  );
}

export default App;
