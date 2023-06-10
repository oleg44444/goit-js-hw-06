const categoriesList = document.getElementById("categories");
const listItems = categoriesList.children;

console.log(`Number of categories: ${listItems.length}`);

Array.from(listItems).forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const valueItems = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${valueItems}`);
});
