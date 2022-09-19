import { createElement } from '../../helpers/createElement';

export function getHeaderPageNote(note) {
    const header =
        note.hasOwnProperty('id') && note.id === '0' ? 'New note' : note.name;

    const elemHeader = createElement({
        tagName: 'div',
        className: 'item-note__header',
    });
    elemHeader.textContent = header;

    return elemHeader;
}
