import { renderListNotes } from './renderListNotes';
import noteService from '../../services/noteService';

const renderNotes = (notes) => {
  const notesHeader = document.querySelector('.list-notes__header');
  let listNotes = document.querySelector('.list-notes__items');
  let height = listNotes ? listNotes.clientHeight : 0;
  let timerId = setInterval(() => {
    height = height > 20 ? height - 20 : 0;
    if (height) {
      listNotes.style.height = height + 'px';
    } else {
      clearInterval(timerId);
      listNotes.remove();
      listNotes = renderListNotes(notes);
      notesHeader.after(listNotes);
    }
  }, 100);
};

const renderActiveNotes = () => {
  const notes = noteService.getNotes(true);
  renderNotes(notes);
};

const renderArchivedNotes = () => {
  const notes = noteService.getNotes(false);
  renderNotes(notes);
};

export { renderActiveNotes, renderArchivedNotes };
