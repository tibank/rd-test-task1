export function createTagElem(tag, content = '', isText = true, classNames = [], attrList = {}) {
  let elem = document.createElement(tag);

  isText ? (elem.textContent = content) : (elem.innerHTML = content);

  elem.classList.add(...classNames);
  for (const [key, value] of Object.entries(attrList)) {
    elem.setAttribute(key, value);
  }

  return elem;
}
