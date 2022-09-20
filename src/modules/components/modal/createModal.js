import { createElement } from '../../helpers/createElement';
import { getHeaderPageNote } from './getHeaderPageNote';
import { getBodyPageNote } from './getBodyPageNote';
import { getFooterPageNote } from './getFooterPageNote';

export function createModal(note) {
  console.log('createModal');
  console.log(note);

  const root = createElement({ tagName: 'div', className: 'modal-layer' });
  const elemForm = createElement({
    tagName: 'div',
    className: 'modal-content',
  });

  elemForm.append(getHeaderPageNote(note));
  elemForm.append(getBodyPageNote(note));
  elemForm.append(getFooterPageNote(note));
  root.append(elemForm);

  return root;
}
