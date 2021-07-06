const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const listEL = document.createElement('li');
  listEL.textContent = option;
  return listEL;
});

ingredientsContainerEl.append(...elements);
