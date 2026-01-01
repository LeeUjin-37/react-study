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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



function App() {

  const queryClient = new QueryClient()

  return (
    <> 
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> { /* 삭제 하지 마세요! */}
        <RouterProvider router={router}/>
      </ThemeProvider>
    </QueryClientProvider>
    </>
  );
}

export default App; 
