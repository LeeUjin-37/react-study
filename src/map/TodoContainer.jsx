import React from 'react';
import Todo from './Todo';

const TodoContainer = () => {

  // 1. 할일 목록 중 완료하지 않은 목록만 화면에 타이틀을 출력하기
  // 2. Todo 컴포넌트로 분리하기

  const todos = [
    {
      title: "코딩 게임",
      isComplete: true
    },
    {
      title: "수기 코딩",
      isComplete: false
    },
    {
      title: "코딩 복습",
      isComplete: true
    },
    {
      title: "꿈속에서 코딩",
      isComplete: false
    },
    {
      title: "씻으면서 코딩",
      isComplete: true
    },
  ]

  const todoList = todos
    .filter((todo) => !todo.isComplete)
    .map((todo, i) => <Todo key={i} todo={todo} i={i} /> )

  return (
    <div>
      {todoList}
    </div>
  );
};

export default TodoContainer;