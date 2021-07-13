const categoriesEl = document.querySelectorAll("#categories .item");
console.dir(categoriesEl);
const message = `В списке ${categoriesEl.length} категории`;
console.log(message);
categoriesEl.forEach((el) => {
  console.log(`Категория:  ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});
