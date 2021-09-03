const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Нашел нужный елемент Дом по айди.
const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef)
//Map перезаписываю каждый элемент массива через МАП создаю каждому елементу массива Ли, и записываю текстконтент в в этот ли.
const addIngredient = (array) => array.map(element => {
  const itemOfListEl = document.createElement('li')
  itemOfListEl.textContent = element
  return itemOfListEl
});

ingredientsRef.append(...addIngredient(ingredients))