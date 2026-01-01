import React from 'react';
import './App.css';
import ProductContainer from './lifecycle/function/memo/ProductContainer';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import CharContainer from './context/basic/CharContainer';
import FontContainer from './context/normal/FontContainer';
import AnimalsContainer from './context/expert/AnimalsContainer';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Intro from './pages/intro/Intro';
import router from './routes/router';



function App() {
  return (
    <> 
    <ThemeProvider theme={theme}>
    <GlobalStyle /> { /* 삭제 하지 마세요! */}
    <RouterProvider router={router}/>
    </ThemeProvider>
    {/* <ProductContainer /> */}
    </>
  );
}

export default App; 
