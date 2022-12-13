import { createTagElem } from '../../helpers/createTagElememt';

export function createHeader() {
  const rootElem = createTagElem('div', '', true, ['list-notes__header', 'notes-header']);

  createTagElem;

  const classesHeader = ['header', 'data-column'];
  rootElem.appendChild(createTagElem('div', 'Name', true, classesHeader));
  rootElem.appendChild(createTagElem('div', 'Created', true, classesHeader));
  rootElem.appendChild(createTagElem('div', 'Category', true, classesHeader));
  rootElem.appendChild(createTagElem('div', 'Content', true, classesHeader));
  rootElem.appendChild(createTagElem('div', 'Dates', true, classesHeader));

  const buttons = createTagElem('div', '', true, ['header-buttons', 'buttons-column']);

  const classesBtn = ['header-button-item'];
  const btnSquare = createTagElem('div', '', true, classesBtn);
  btnSquare.appendChild(createTagElem('i', '', true, ['far', 'fa-caret-square-down', 'fa-lg']));
  const btnTrash = createTagElem('div', '', true, classesBtn);
  btnTrash.appendChild(createTagElem('i', '', true, ['fas', 'fa-trash', 'fa-lg']));

  buttons.appendChild(btnSquare);
  buttons.appendChild(btnTrash);
  rootElem.appendChild(buttons);

  return rootElem;
}
