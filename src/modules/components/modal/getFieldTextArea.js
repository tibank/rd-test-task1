import { createElement } from '../../helpers/createElement';
import { createLineElement } from './createLineElement';

export function getFieldTextArea(nameField, value) {
  const elemLine = createLineElement(nameField);

  const elemInput = createElement({
    tagName: 'div',
    className: 'item-note-block__input',
  });

  const fieldTextArea = createElement({
    tagName: 'textarea',
    className: 'item-note__input',
    attributes: {
      name: nameField.toLowerCase(),
      placeholder: nameField.toLowerCase(),
      cols: '40',
      rows: '5',
    },
  });
  fieldTextArea.value = value;
  elemInput.append(fieldTextArea);
  elemLine.append(elemInput);

  return elemLine;
}
