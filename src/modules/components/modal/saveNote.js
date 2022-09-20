import NoteService from '../../services/noteService';
import { Note } from '../../models/note';
import { renderOneItemListNotes } from '../list/renderOneItemListNotes';
import { renderCategoryNotes } from '../list/renderCategoryNotes';

export function saveNote(event) {
  const msgError = checkInputFields();
  if (msgError !== '') {
    alert(msgError);
    return;
  }

  const elemButton = event.target;
  const noteId = Number(elemButton.dataset.noteId);

  if (noteId) {
    const note = NoteService.getNoteById(noteId);
    if (note) {
      updateNote(note);
    }
  } else {
    addNote();
  }
  renderCategoryNotes(NoteService.getStat());
}

function updateNoteFromForm(note) {
  const form = document.forms.note;
  note.name = form.name.value;
  note.category = form.category.options[form.category.selectedIndex].text;
  note.content = form.content.value;
}

function addNote() {
  const newNote = new Note(NoteService.getMaxNoteId() + 1);
  updateNoteFromForm(newNote);
  NoteService.addNote(newNote);
}

function updateNote(note) {
  updateNoteFromForm(note);
  NoteService.updateNote(note);
  renderOneItemListNotes(note);
}

function checkInputFields() {
  let msgError = '';
  const form = document.forms.note;
  if (!form.name.value.trim()) {
    msgError += 'Name is empty\n';
  }

  if (!form.category.selectedIndex) {
    msgError += 'Not selected category';
  }

  return msgError;
}
