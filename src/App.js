import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
// import styled from "styled-components"

function App() {
  const theme = {
    colors: {
      bg: "	#FAEBD7",
    },
  }

  

  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>

    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/about' element={<About/>}> </Route>
    </Routes>

   
    </ThemeProvider>

    
    </>
  );
}

export default App;
