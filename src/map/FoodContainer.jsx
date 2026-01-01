import React from 'react';
import Food from './Food';

const FoodContainer = () => {

  const foods = [
    {
      id: 1,
      name: "샐러드"
    },
    {
      id: 2,
      name: "김치찌개"
    },
    {
      id: 3,
      name: "스테이크"
    },
    {
      id: 4,
      name: "족발"
    },
    {
      id: 5,
      name: "타코야끼"
    },
  ]

  const foodList = foods.map(({name}, i) => <Food key={i} name={name} />)

  return (
    <div>
      {foodList}
    </div>
  );
};

export default FoodContainer;