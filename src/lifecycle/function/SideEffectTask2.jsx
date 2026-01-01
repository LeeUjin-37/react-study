import React, { useEffect, useState } from 'react';

const SideEffectTask2 = () => {

  // 다음 페이지를 누르면 다음 10개를 조회
  // 이전 페이지를 누르면 이전 10개를 조회
  const [todos, setTodos] = useState([])
  const [cursor, setCursor] = useState(0)

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${cursor * 10}&_limit=10`)
      const datas = await response.json()
      setTodos(datas)
    }

    getTodos()
  }, [cursor])
  console.log(todos)
  
  const todoList = todos.map(({title}, i) => (
    <li key={i}>{title}</li>
  ))


  const handleCursorIncreaseOnClick = () => {
     setCursor(cursor + 1)
  }
  const handleCursorDecreaseOnClick = () => {
     setCursor(cursor - 1)
  }

  return (
    <ul>
      {todoList}
      { cursor <= 0 ? (
          <></>
      ) : (
           <button onClick={handleCursorDecreaseOnClick}>이전 페이지</button>
      )}
      <button onClick={handleCursorIncreaseOnClick}>다음 페이지</button>
    </ul>
  );
};

export default SideEffectTask2;