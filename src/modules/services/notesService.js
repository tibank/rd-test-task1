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

export default class NoteService {
  static getActiveNotes() {
    const result = [];
    const notes = getNotesFromLocalStorage();

    for (let i = 0; i < notes.length; i++) {
      if (!notes[i].archived) {
        result.push(notes[i]);
      }
    }

    return result;
  }

  static getNoteById(id) {
    const notes = getNotesFromLocalStorage();
    const note = notes.find((element) => {
      if (element.id === id) {
        return true;
      }
    });

    return note;
  }

  static addNote(note) {
    const notes = getNotesFromLocalStorage();
    notes.push(note);

    localStorage.setItem('ListNotes', JSON.stringify(result));
  }

  static updateNote(note) {
    const notes = getNotesFromLocalStorage();

    const index = notes.findIndex((element) => {
      if (element.id === id) {
        return true;
      }
    });

    if (index === -1) {
      throw new Error('Not found note by id: ' + id);
    }

    notes[index] = note;
    localStorage.setItem('ListNotes', JSON.stringify(result));
  }

  static removeNote(id) {
    let result = [];
    const notes = getNotesFromLocalStorage();
    const index = notes.findIndex((element) => {
      if (element.id === id) {
        return true;
      }
    });

    if (index === -1) {
      throw new Error('Not found note by id: ' + id);
    }

    if (index === 0) {
      result = notes.slice(1);
    } else if (index < notes.length - 1) {
      result = notes.slice(0, index - 1).concat(notes.slice(index + 1));
    } else {
      result = notes.slice(0, index - 1);
    }

    localStorage.setItem('ListNotes', JSON.stringify(result));
  }
}
