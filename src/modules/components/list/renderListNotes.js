import { noteClick } from './noteClick';
import { createNoteElementList } from './createNoteElementList';
import { createElement } from '../../helpers/createElement';

export function renderListNotes(notes) {
  const listNotes = createElement({ tagName: 'div', className: 'list-notes__items' });
  const noteElements = notes.map((note) => createNoteElementList(note));

  listNotes.append(...noteElements);
  listNotes.addEventListener('click', noteClick);

  return listNotes;
}
