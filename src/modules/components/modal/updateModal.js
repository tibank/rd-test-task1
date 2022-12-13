import { optionsDateFormat } from '../../helpers/constants';
import { getCategoryId } from '../../helpers/getCategoryId';

export function updateModal(note) {
  let id = '0';
  let header = 'New note';
  console.log('updateModal');
  console.log(note);

  if (note.hasOwnProperty('id') && note.id) {
    id = note.id;
    header = note.name;
  }
  const labelHeader = document.querySelector('.item-note__header');
  if (labelHeader) {
    labelHeader.textContent = header;
  }

  const labelName = document.querySelector('input[name="name"]');
  if (labelName) {
    labelName.value = note.name;
  }

  const elemDateCreated = document.querySelector('.item-note-value__text');
  if (elemDateCreated) {
    elemDateCreated.textContent = note.created.toLocaleDateString('en-US', optionsDateFormat);
  }

  const elemSelect = document.querySelector('select[name="category"]');
  if (elemSelect) {
    elemSelect.selectedIndex = note.category ? +getCategoryId(note.category) : 0;
  }

  const elemTextArea = document.querySelector('textarea[name="content"]');
  if (elemTextArea) {
    console.log('textarea ' + note.content);
    elemTextArea.value = note.content;
  }

  const buttons = document.querySelectorAll('.item-note__btn');
  for (let button of buttons) {
    button.dataset.noteId = id;
  }
}
