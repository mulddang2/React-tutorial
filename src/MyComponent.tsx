import React, { useState } from 'react';

function MyComponent() {
  const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

  function handleAddFood() {
    // 1. 내가 입력한 값 추가
    const newFood = document.getElementById('foodInput').value;
    // 2. 추후, 다시 입력 할 수 있도록 초기화
    document.getElementById('foodInput').value = '';

    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type='text' id='foodInput' placeholder='Enter food name' />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
export default MyComponent;
