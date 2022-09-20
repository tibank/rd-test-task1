import { createElement } from '../../helpers/createElement';
import { saveNote } from './saveNote';

export function getFooterPageNote(note) {
  const id = note.hasOwnProperty('id') ? note.id : '0';
  const elemFooter = createElement({
    tagName: 'div',
    className: 'item-note__footer',
  });

  const elemBtnSave = createElement({
    tagName: 'div',
    className: 'item-note-btn__footer',
  });
  const btnSave = createElement({
    tagName: 'button',
    className: 'item-note__btn',
    attributes: { 'data-note-id': id },
  });
  btnSave.textContent = 'Save';
  btnSave.addEventListener('click', save);
  elemBtnSave.append(btnSave);

  const elemBtnCancel = createElement({
    tagName: 'div',
    className: 'item-note-btn__footer',
  });

  const btnCancel = createElement({
    tagName: 'button',
    className: 'item-note__btn',
    attributes: { 'data-note-id': id },
  });
  btnCancel.textContent = 'Cancel';

  btnCancel.addEventListener('click', cancel);
  elemBtnCancel.append(btnCancel);

  elemFooter.append(elemBtnSave);
  elemFooter.append(elemBtnCancel);

  return elemFooter;
}

function hideModal() {
  const modal = document.querySelector('.modal-layer');
  modal.style.display = 'none';
}

function save(event) {
  saveNote(event);
  hideModal();
}

function cancel() {
  hideModal();
}
