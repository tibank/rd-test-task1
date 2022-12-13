import { createTagElem } from '../../helpers/createTagElememt';
import { noteClick } from './noteClick';
import { createNoteElementList } from './createNoteElementList';

export function renderListNotes(notes) {
  const listNotes = createTagElem('div', '', true, ['list-notes__items'], {});
  const noteElements = notes.map((note) => createNoteElementList(note));

  listNotes.append(...noteElements);
  listNotes.addEventListener('click', noteClick);

  return listNotes;
}
