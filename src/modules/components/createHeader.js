import { createTagElem } from '../helpers/createTagElememt';

export function createHeader() {
  const rootElem = createTagElem('div', '', true, ['wrapper']);
  const wrapListNotes = createTagElem('div', '', true, ['list-notes__wrapper']);
  const wrapListNotesHeader = createTagElem('div', '', true, ['list-notes__header', 'notes-header']);

  const classesHeader = ['header', 'data-column'];
  wrapListNotesHeader.appendChild(createTagElem('div', 'Name', true, classesHeader));
  wrapListNotesHeader.appendChild(createTagElem('div', 'Created', true, classesHeader));
  wrapListNotesHeader.appendChild(createTagElem('div', 'Category', true, classesHeader));
  wrapListNotesHeader.appendChild(createTagElem('div', 'Content', true, classesHeader));
  wrapListNotesHeader.appendChild(createTagElem('div', 'Dates', true, classesHeader));

  const buttons = createTagElem('div', '', true, ['header-buttons', 'buttons-column']);

  const classesBtn = ['header-button-item'];
  const btnSquare = createTagElem('div', '', true, classesBtn);
  btnSquare.appendChild(createTagElem('i', '', true, ['far', 'fa-caret-square-down', 'fa-lg']));
  const btnTrash = createTagElem('div', '', true, classesBtn);
  btnTrash.appendChild(createTagElem('i', '', true, ['fas', 'fa-trash', 'fa-lg']));

  buttons.appendChild(btnSquare);
  buttons.appendChild(btnTrash);

  wrapListNotesHeader.appendChild(buttons);
  wrapListNotes.appendChild(wrapListNotesHeader);
  rootElem.appendChild(wrapListNotes);

  const wrapCategoriesNotes = createTagElem('div', '', true, ['categories-notes__wrapper']);
  rootElem.appendChild(wrapCategoriesNotes);

  return rootElem;
}
