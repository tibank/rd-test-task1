import NoteService from '../../services/noteService';
import { showModalNote } from '../modal/showModalNote';
import { renderCategoryNotes } from './renderCategoryNotes';

function getBtnObject(target) {
  let objBtn = { action: 'empty', node: target };

  if (target.tagName !== 'div') {
    let divBtn = target.closest('div[data-btn]');
    if (divBtn) {
      objBtn.action = divBtn.dataset.btn;
      objBtn.node = divBtn;
    }
  } else {
    if (target.hasAttribute('data-btn')) {
      objBtn.action = divBtn.dataset.btn;
    }
  }

  return objBtn;
}

export function noteClick(event) {
  const objBtn = getBtnObject(event.target);
  if (objBtn.action !== 'empty') {
    let divTask = objBtn.node.closest('div[data-note-id]');
    if (divTask) {
      switch (objBtn.action) {
        case 'edit':
          const note = NoteService.getNoteById(Number(divTask.dataset.noteId));

          showModalNote(note);

          break;
        case 'archived':
          const noteArchived = NoteService.getNoteById(Number(divTask.dataset.noteId));
          noteArchived.archived = 1;
          NoteService.updateNote(noteArchived);

          divTask.remove();
          break;
        case 'remove':
          {
            NoteService.removeNote(Number(divTask.dataset.noteId));
            divTask.remove();
          }
          break;
        default:
      }
      const mapStat = NoteService.getStat();
      renderCategoryNotes(mapStat);
    }
  }
}
