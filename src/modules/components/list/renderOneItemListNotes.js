import { getCategoryId } from '../../helpers/getCategoryId';
import { getStringDates } from '../../helpers/getStringDates';

export function renderOneItemListNotes(note) {
  console.log('render one item ');
  console.log(note);
  const elemRow = document.querySelector('.list-notes__row[data-note-id="' + note.id + '"]');

  if (elemRow) {
    for (let elem of elemRow.childNodes) {
      if (elem.hasAttribute('data-name')) {
        elem.textContent = note.name;
        continue;
      }

      if (elem.hasAttribute('data-content')) {
        elem.textContent = note.content;
        continue;
      }

      if (elem.hasAttribute('data-category')) {
        elem.textContent = note.category;
        elem.setAttribute('data-category', getCategoryId(note.category));
        continue;
      }

      if (elem.hasAttribute('data-dates')) {
        elem.textContent = getStringDates(note.content);
        continue;
      }
    }
  }
}
