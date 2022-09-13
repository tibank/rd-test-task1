import { createElement } from '../helpers/createElement';

export function createButtonsBlock(note) {
    const attributes = { 'data-noteid': note.id };
    let divButtons = createElement({
        tagName: 'div',
        className: 'note-buttons buttons-column',
    });

    attributes['data-btn'] = 'edit';
    let divButtonPencil = createElement({
        tagName: 'div',
        className: 'note-button-item',
        attributes,
    });

    let btnPencil = createElement({
        tagName: 'i',
        className: 'fas fa-pencil-alt fa-lg',
    });

    attributes['data-btn'] = 'archived';
    let divButtonCaret = createElement({
        tagName: 'div',
        className: 'note-button-item',
        attributes,
    });

    let btnCaret = createElement({
        tagName: 'i',
        className: 'fas fa-caret-square-down fa-lg',
    });

    attributes['data-btn'] = 'remove';
    let divButtonTrash = createElement({
        tagName: 'div',
        className: 'note-button-item',
        attributes,
    });

    let btnTrash = createElement({
        tagName: 'i',
        className: 'fas fa-trash fa-lg',
    });

    divButtonPencil.append(btnPencil);
    divButtonCaret.append(btnCaret);
    divButtonTrash.append(btnTrash);

    divButtons.append(divButtonPencil);
    divButtons.append(divButtonCaret);
    divButtons.append(divButtonTrash);

    return divButtons;
}
