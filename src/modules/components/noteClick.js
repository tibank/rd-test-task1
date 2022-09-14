import NoteService from '../services/noteService';

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
          if (!divTask.hasAttribute('editing')) {
            divTask.setAttribute('editing', '');
            //renderOneNote(note);
          }
          break;
        case 'archived':
          console.log(divTask);
          console.log(Number(divTask.dataset.noteId));
          const noteArchived = NoteService.getNoteById(Number(divTask.dataset.noteId));
          noteArchived.archived = 1;
          console.log(noteArchived);
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
      //renderUpdatedListCategories(mapStat);
    }
  }
}
