import { createElement } from '../../helpers/createElement';

export function createLineElement(nameField) {
    const elemLine = createElement({
        tagName: 'div',
        className: 'item-note__lines',
    });

    const elemHeader = createElement({
        tagName: 'div',
        className: 'item-note__text',
    });
    elemHeader.textContent = nameField;
    elemLine.append(elemHeader);

    return elemLine;
}
