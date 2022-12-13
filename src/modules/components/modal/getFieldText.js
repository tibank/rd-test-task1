import { createElement } from '../../helpers/createElement';
import { createLineElement } from './createLineElement';

export function getFieldText(nameField, value) {
    const elemLine = createLineElement(nameField);

    const elemValue = createElement({
        tagName: 'div',
        className: 'item-note-value__text',
    });
    elemValue.textContent = value;

    elemLine.append(elemValue);

    return elemLine;
}
