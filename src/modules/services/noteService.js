import { LocalStorageService } from './localStorageService';
import { StatCategories } from '../models/statCategories';

function getNotesFromLocalStorage() {
  let notes = [];
  const listNotes = localStorage.getItem('ListNotes');
  if (!listNotes) {
    throw new Error('There is no data in LocalStorage');
  }

  try {
    notes = JSON.parse(listNotes, (key, value) => {
      if (key === 'created') {
        return new Date(value);
      } else {
        return value;
      }
    });
  } catch (error) {
    throw error;
  }

  return notes;
}

class NoteService {
  getNotes(isActive = true) {
    const notes = LocalStorageService.getNotesFromLocalStorage();

    return notes.filter((note) => (isActive ? !note.archived : note.archived));
  }

  getNoteById(id) {
    const notes = LocalStorageService.getNotesFromLocalStorage();

    return notes.find((element) => element.id === id);
  }

  getMaxNoteId() {
    const notes = LocalStorageService.getNotesFromLocalStorage();
    if (!notes.length) {
      return 1;
    }
    notes.sort((a, b) => a - b);

    return notes[notes.length - 1].id;
  }

  addNote(note) {
    const notes = LocalStorageService.getNotesFromLocalStorage();
    notes.push(note);

    LocalStorageService.saveNotesToLocalStorage(notes);
  }

  updateNote(note) {
    const notes = LocalStorageService.getNotesFromLocalStorage();

    const index = notes.findIndex((element) => element.id === note.id);
    if (index === -1) {
      throw new Error('Not found note by id: ' + id);
    }

    notes[index] = note;
    LocalStorageService.saveNotesToLocalStorage(notes);
  }

  removeNote(id) {
    let result = [];
    const notes = LocalStorageService.getNotesFromLocalStorage();
    const index = notes.findIndex((element) => element.id === id);

    if (index === -1) {
      throw new Error('Not found note by id: ' + id);
    }

    if (index === 0) {
      result = notes.slice(1);
    } else if (index < notes.length - 1) {
      result = notes.slice(0, index).concat(notes.slice(index + 1));
    } else {
      result = notes.slice(0, index);
    }

    LocalStorageService.saveNotesToLocalStorage(result);
  }

  getStat() {
    const mapCategories = new Map();
    const notes = LocalStorageService.getNotesFromLocalStorage();

    for (let i = 0; i < notes.length; i++) {
      const isExistsElemCategory = mapCategories.has(notes[i].category);

      if (!isExistsElemCategory) {
        const elem = new StatCategories(notes[i].category);
        elem.addNoteToStat(notes[i]);
        mapCategories.set(notes[i].category, elem);
      } else {
        mapCategories.get(notes[i].category).addNoteToStat(notes[i]);
      }
    }

    return mapCategories;
  }
}

export default new NoteService();
