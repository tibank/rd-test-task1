export function updateModal(note) {
    let id = '0';
    let header = 'New note';

    if (note.hasOwnProperty('id')) {
        id = note.id;
        header = note.name;
    }

    const labelName = document.querySelector('input[name="Name"]');
    if (labelName) {
        labelName.value = note.name;
    }

    const buttons = document.querySelectorAll('.item-note__btn');
    for (let button of buttons) {
        button.dataset.noteId = id;
    }
}
