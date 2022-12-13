import NoteService from '../../services/noteService';
import { Note } from '../../models/note';
import { renderOneItemListNotes } from '../list/renderOneItemListNotes';
import { renderCategoryNotes } from '../list/renderCategoryNotes';
import { createNoteElementList } from '../list/createNoteElementList';
import { checkInputFields } from '../../helpers/checkInputFields';

export function saveNote(event) {
  const elemButton = event.target;
  const noteId = Number(elemButton.dataset.noteId);

  if (checkInputFields()) {
    alert('Fill name & category!');
    return false;
  }

  if (noteId) {
    const note = NoteService.getNoteById(noteId);
    if (note) {
      updateNote(note);
    }
  } else {
    addNote();
  }
  renderCategoryNotes(NoteService.getStat());

  return true;
}

function updateNoteFromForm(note) {
  const form = document.forms.note;
  note.name = form.name.value;
  note.category = form.category.options[form.category.selectedIndex].text;
  note.content = form.content.value;
}

function addCreateNoteToList(note) {
  const itemAdded = createNoteElementList(note);
  const rowList = document.querySelector('.list-notes__items');

  if (rowList) {
    const lastItem = rowList.lastElementChild;
    if (lastItem) {
      lastItem.after(itemAdded);
    } else {
      rowList.append(itemAdded);
    }
  }
}

function addNote() {
  const newNote = new Note(NoteService.getMaxNoteId() + 1);
  updateNoteFromForm(newNote);
  NoteService.addNote(newNote);
  addCreateNoteToList(newNote);
}

function updateNote(note) {
  updateNoteFromForm(note);
  NoteService.updateNote(note);
  renderOneItemListNotes(note);
}
