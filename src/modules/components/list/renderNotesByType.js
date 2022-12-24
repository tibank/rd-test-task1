import { renderListNotes } from './renderListNotes';
import noteService from '../../services/noteService';

const renderActiveNotes = () => {
    const notes = noteService.getNotes(true);
    const notesHeader = document.querySelector('.list-notes__header');
    let listNotes = document.querySelector('.list-notes__items');
    if (listNotes) {
        listNotes.remove();
    }
    listNotes = renderListNotes(notes);
    notesHeader.after(listNotes);
};

const renderArchivedNotes = () => {
    const notes = noteService.getNotes(false);
    const notesHeader = document.querySelector('.list-notes__header');
    let listNotes = document.querySelector('.list-notes__items');
    if (listNotes) {
        listNotes.remove();
    }
    listNotes = renderListNotes(notes);
    notesHeader.after(listNotes);
};

export { renderActiveNotes, renderArchivedNotes };
