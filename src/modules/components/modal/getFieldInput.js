import { createElement } from '../../helpers/createElement';
import { createLineElement } from './createLineElement';

export function getFieldInput(nameField, value) {
    const elemLine = createLineElement(nameField);

    const elemInput = createElement({
        tagName: 'div',
        className: 'item-note-block__input',
    });

    const fieldInput = createElement({
        tagName: 'input',
        className: 'item-note__input',
        attributes: {
            type: 'text',
            name: nameField.toLowerCase(),
            placeholder: nameField.toLowerCase(),
            value,
        },
    });
    elemInput.append(fieldInput);
    elemLine.append(elemInput);

    return elemLine;
}
