import createTagElem from '../helpers/createTagElememt';

export function createButtonsBlock() {
    let divButtons = createTagElem('div', '', false, [
        'note-buttons',
        'buttons-column',
    ]);

    return divButtons;
}
