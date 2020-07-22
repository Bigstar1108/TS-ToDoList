import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styled, { createGlobalStyle } from 'styled-components';

const Rootdiv = styled.div`
  display : flex;
  height : 100vh;
  width : 100%;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`;

const GlobalStyle = createGlobalStyle`
  body{
    padding : 0;
    margin : 0;
  }
`;

const App = () => {
  return(
    <>
      <GlobalStyle />
      <Rootdiv>
        <TodoForm />
        <TodoList />
      </Rootdiv>
    </>
  )
}

export default App;
