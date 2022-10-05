import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/about' element={<About/>}> </Route>
    </Routes>
    
    </>
  );
}

export default App;
