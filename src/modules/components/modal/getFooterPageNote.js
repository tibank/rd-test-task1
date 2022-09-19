import { createElement } from '../../helpers/createElement';

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
        className: 'item-note_btn',
        attributes: { 'data-note-id': id },
    });
    btnSave.textContent = 'Save';
    btnSave.addEventListener('click', saveNote);
    elemBtnSave.append(btnSave);

    const elemBtnCancel = createElement({
        tagName: 'div',
        className: 'item-note-btn__footer',
    });

    const btnCancel = createElement({
        tagName: 'button',
        className: 'item-note_btn',
        attributes: { 'data-note-id': id },
    });
    btnCancel.textContent = 'Cancel';

    btnCancel.addEventListener('click', cancelNote);
    elemBtnCancel.append(btnCancel);

    elemFooter.append(elemBtnSave);
    elemFooter.append(elemBtnCancel);

    return elemFooter;
}

function hideModal() {
    const modal = document.querySelector('.modal-layer');
    modal.style.display = 'none';
}

function saveNote() {
    console.log('save note');
    hideModal();
}

function cancelNote() {
    hideModal();
}
