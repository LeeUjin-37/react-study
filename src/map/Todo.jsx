import React from 'react';

const Todo = ({todo, i}) => { 
  return (
    <li>{i + 1}. 할일: {todo.title}</li>
  )
};

export default Todo;