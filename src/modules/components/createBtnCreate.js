import { createElement } from '../helpers/createElement';
import { createNote } from './createNote';

export function btnCreateNote() {
  const divBtnCreate = createElement({ tagName: 'div', className: 'create-note__button visible' });
  let elemBtndivButtons = createElement({
    tagName: 'button',
    className: 'notes__btn',
  });
  elemBtndivButtons.textContent = 'Create note';
  elemBtndivButtons.id = 'create-note__btn';
  elemBtndivButtons.addEventListener('click', createNote);

  divBtnCreate.append(elemBtndivButtons);

  return divBtnCreate;
}
