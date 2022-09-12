export default function createTagElem(tag, content = '', isText = true, classList = [], attrList = {}) {
  let elem = document.createElement(tag);

  isText ? (elem.textContent = content) : (elem.innerHTML = content);
  // if (isText) {
  //   elem.textContent = content;
  // } else {
  //   elem.innerHTML = content;
  // }

  classList.forEach((itemClass) => elem.classList.add(itemClass));
  for (const [key, value] of Object.entries(attrList)) {
    elem.setAttribute(key, value);
  }

  return elem;
}
